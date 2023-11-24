package com.sharp.main.members;

import com.sharp.main.auth.AuthService;
import com.sharp.main.dto.member.MemberDTO;
import com.sharp.main.dto.user.UserDTO;
import com.sharp.main.user.User;
import com.sharp.main.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;
    private final AuthService authService;
    private final UserRepository userRepository;

    public MemberDTO createMember(Long memberId) {

        UserDTO userDTO = authService.getCurrentUser();
        User memberDetails = userRepository.findById(memberId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "user not found"));

        Member member = memberRepository.save(Member.builder()
                .userId(userDTO.getId())
                .memberId(memberId)
                .build());

        return MemberDTO.builder()
                .id(member.getId())
                .name(memberDetails.getName())
                .image(memberDetails.getImage())
                .build();
    }

    public List<MemberDTO> getMembers() {
        try {
            UserDTO userDTO = authService.getCurrentUser();

            List<Member> memberList = memberRepository.findAllByUserIdOrderByCreatedAtDesc(userDTO.getId());

            return memberList.stream().map(this::getMemberDetails).toList();
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "requested data error");
        }
    }

    private MemberDTO getMemberDetails(Member member) {
        User user = userRepository.findById(member.getMemberId()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "user not found"));

        return MemberDTO.builder()
                .id(member.getId())
                .name(user.getName())
                .image(user.getImage())
                .build();
    }

    public void deleteMember(Long memberId) {
        UserDTO userDTO = authService.getCurrentUser();

        Member member = memberRepository.findById(memberId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "user not found"));

        if (!member.getUserId().equals(userDTO.getId())) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Access denied");
        }

        memberRepository.delete(member);
    }
}
