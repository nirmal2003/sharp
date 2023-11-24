package com.sharp.main.project.tasks.task.value;

import com.sharp.main.dto.member.MemberDTO;
import com.sharp.main.dto.project.task.*;
import com.sharp.main.members.Member;
import com.sharp.main.members.MemberRepository;
import com.sharp.main.project.tasks.column.ColumnRepository;
import com.sharp.main.project.tasks.column.TableColumn;
import com.sharp.main.project.tasks.task.Task;
import com.sharp.main.project.tasks.task.TaskRepository;
import com.sharp.main.project.tasks.values.Option;
import com.sharp.main.project.tasks.values.OptionRepository;
import com.sharp.main.user.User;
import com.sharp.main.user.UserRepository;
import com.sharp.main.utils.colors.Color;
import com.sharp.main.utils.colors.ColorRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class TaskValueService {
    private final TaskValueRepository taskValueRepository;
    private final ColumnRepository columnRepository;
    private final TaskRepository taskRepository;
    private final OptionRepository optionRepository;
    private final ColorRepository colorRepository;
    private final MemberRepository memberRepository;
    private final UserRepository userRepository;

    public List<TaskValue> createDefaultTaskValues(Long taskId, Long tableId, Long projectId) {
        Pageable pageRequest = PageRequest.of(0, 20, Sort.by("index").descending());

        List<TableColumn> tableColumns = columnRepository.findAllByTableId(tableId, pageRequest);

        List<TaskValue> taskValueList = new ArrayList<>();

        for (TableColumn column : tableColumns) {

            TaskValue taskValue = createTaskValue(taskId, column.getId(), column.getType(), projectId);
            taskValueList.add(taskValue);
        }

        return taskValueList;
    }

    public List<TaskValue> createTaskValues(Long taskId, Long tableId, Long projectId) {
        Pageable pageRequest = PageRequest.of(0, 20, Sort.by("index").ascending());

        List<TableColumn> tableColumns = columnRepository.findAllByTableId(tableId, pageRequest);

        List<TaskValue> taskValueList = new ArrayList<>();

        for (TableColumn column : tableColumns) {

            TaskValue taskValue = createTaskValue(taskId, column.getId(), column.getType(), projectId);
            taskValueList.add(taskValue);
        }

        return taskValueList;
    }

    public TaskValue createTaskValue(Long taskId, Long columnId, Integer type, Long projectId) {

        TableColumn column = columnRepository.findById(columnId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));

        TaskValue taskValue = TaskValue.builder()
                .projectId(projectId)
                .columnId(columnId)
                .taskId(taskId)
                .index(column.getIndex())
                .type(type)
                .stringValue(type == 4 ? "default" : null)
                .dateTimeStartValue(type == 2 ? LocalDateTime.now() : null)
                .dateTimeEndValue(type == 2 ? LocalDateTime.now().plusDays(2) : null)
                .personValue(null)
                .optionValue(null)
                .build();

        return taskValueRepository.save(taskValue);
    }

    public TaskResponse getTaskWithValue(Task task) {
        Pageable pageRequest = PageRequest.of(0, 20, Sort.by("index").ascending());

        List<TaskValue> taskValueList = taskValueRepository.findAllByTaskId(task.getId(), pageRequest);

        List<TaskValueDTO> taskValueDTOList = taskValueList.stream().map(this::getTaskValueDetails).toList();

        return TaskResponse.builder()
                .task(task)
                .taskValueList(taskValueDTOList)
                .build();
    }

    public TaskValueDTO getTaskValueDetails(TaskValue taskValue) {

        TaskValueDTO taskValueDTO = TaskValueDTO.builder()
                .id(taskValue.getId())
                .index(taskValue.getIndex())
                .stringValue(taskValue.getStringValue())
                .dateTimeStartValue(taskValue.getDateTimeStartValue())
                .dateTimeEndValue(taskValue.getDateTimeEndValue())
                .type(taskValue.getType())
                .build();


        if (taskValue.getType() == 1) {

            if (taskValue.getPersonValue() != null) {
                Optional<Member> member = memberRepository.findById(taskValue.getPersonValue());

                if (member.isPresent()) {

                    Optional<User> user = userRepository.findById(member.get().getMemberId());

                    if (user.isPresent()) {
                        MemberDTO memberDTO = MemberDTO.builder()
                                .id(member.get().getId())
                                .name(user.get().getName())
                                .image(user.get().getImage())
                                .build();

                        taskValueDTO.setPersonValue(memberDTO);
                    }
                }
            }

        } else if (taskValue.getType() == 2) {
            System.out.println("date value");

        } else if (taskValue.getType() == 3) {

            if (taskValue.getOptionValue() != null) {
                Optional<Option> option = optionRepository.findById(taskValue.getOptionValue());

                if (option.isPresent()) {

                    Optional<Color> color = colorRepository.findById(option.get().getColor());

                    OptionResponse optionResponse = OptionResponse.builder()
                            .id(option.get().getId())
                            .name(option.get().getName())
                            .build();

                    color.ifPresent(value -> optionResponse.setColor(value.getColor()));

                    taskValueDTO.setOptionValue(optionResponse);
                }
            }
        }
        return taskValueDTO;
    }

    public TaskValue changeTaskValue(Long taskId, Long taskValueId, ChangeTaskValue values) {
        Task task = taskRepository.findById(taskId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));

        TaskValue taskValue = taskValueRepository.findById(taskValueId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));

        switch (taskValue.getType()) {
            case 1 -> taskValue.setPersonValue(values.getPersonValue());
            case 2 -> {
                taskValue.setDateTimeStartValue(values.getDateTimeStartDate());
                taskValue.setDateTimeEndValue(values.getDateTimeEndDate());
            }
            case 3 -> taskValue.setOptionValue(values.getOptionValue());
            case 4 -> taskValue.setStringValue(values.getStringValue());
            default -> throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }

        return taskValueRepository.save(taskValue);
    }

    public OptionResponse changeTaskOptionValue(Long taskValueId, Long optionId) {
        TaskValue taskValue = taskValueRepository.findById(taskValueId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "task column not found"));
        Option option = optionRepository.findById(optionId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "option value not found"));

        taskValue.setOptionValue(option.getId());

        taskValueRepository.save(taskValue);

        Color color = colorRepository.findById(option.getColor()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "color not found"));

        return OptionResponse.builder()
                .id(option.getId())
                .name(option.getName())
                .color(color.getColor())
                .build();
    }

    public MemberDTO changeTaskPersonValue(Long taskValueId, Long memberId) {
        TaskValue taskValue = taskValueRepository.findById(taskValueId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "task column not found"));
        Member member = memberRepository.findById(memberId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "member not found"));

        taskValue.setPersonValue(member.getId());

        taskValueRepository.save(taskValue);

        User user = userRepository.findById(member.getMemberId()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "member not found"));

        return MemberDTO.builder()
                .id(memberId)
                .name(user.getName())
                .image(user.getImage())
                .build();
    }

    public void changeDateValue(Long taskValueId, DateValueDTO dateValueDTO) {
        try {
            TaskValue taskValue = taskValueRepository.findById(taskValueId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "task column not found"));

            LocalTime localTime = LocalTime.MIDNIGHT;

            LocalDate startLocalDate = LocalDate.parse(dateValueDTO.getFromDate());
            LocalDate endLocalDate = LocalDate.parse(dateValueDTO.getToDate());

            LocalDateTime startLocalDateTime = LocalDateTime.of(startLocalDate, localTime);
            LocalDateTime endLocalDateTime = LocalDateTime.of(endLocalDate, localTime);

            taskValue.setDateTimeStartValue(startLocalDateTime);
            taskValue.setDateTimeEndValue(endLocalDateTime);

            taskValueRepository.save(taskValue);

        } catch (Exception e) {
            System.out.println(e);
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "wrong data");
        }
    }

    public void deleteTaskValue(Long taskValueId) {
        taskValueRepository.deleteById(taskValueId);
    }
}
