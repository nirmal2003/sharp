package com.sharp.main.project.tasks.values;

import com.sharp.main.auth.AuthService;
import com.sharp.main.dto.project.RequestName;
import com.sharp.main.dto.project.task.CreateOptionsRequest;
import com.sharp.main.dto.project.task.OptionResponse;
import com.sharp.main.dto.user.UserDTO;
import com.sharp.main.utils.colors.Color;
import com.sharp.main.utils.colors.ColorRepository;
import com.sharp.main.utils.colors.ColorService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
@RequiredArgsConstructor
public class OptionService {
    private final OptionRepository selectRepository;
    private final AuthService authService;
    private final ColorRepository colorRepository;

    public OptionResponse createOption(Long projectId, Boolean isGlobal, CreateOptionsRequest createOptionsRequest) {
        try {
            UserDTO user = authService.getCurrentUser();

            Option select = selectRepository.save(Option.builder()
                    .projectId(projectId)
                    .userId(user.getId())
                    .isGlobal(isGlobal)
                    .name(createOptionsRequest.getName())
                    .color(createOptionsRequest.getColorId())
                    .build());

            Color color = colorRepository.findById(select.getColor()).get();

            return OptionResponse.builder()
                    .id(select.getId())
                    .name(select.getName())
                    .color(color.getColor())
                    .build();

        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public List<OptionResponse> getOptionsByProject(Long projectId) {
        try {
            List<Option> optionList = selectRepository.findAllByProjectIdOrderByCreatedAtDesc(projectId);

            return optionList.stream().map(this::getOptionDetails).toList();
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public List<OptionResponse> getGlobalOptions() {
        UserDTO userDTO = authService.getCurrentUser();
        List<Option> optionList = selectRepository.findAllByUserIdAndIsGlobalOrderByCreatedAtDesc(userDTO.getId(), true);

        return optionList.stream().map(this::getOptionDetails).toList();
    }

    private OptionResponse getOptionDetails(Option option) {
        Color color = colorRepository.findById(option.getColor()).get();

        return OptionResponse.builder()
                .id(option.getId())
                .name(option.getName())
                .color(color.getColor())
                .build();
    }
}
