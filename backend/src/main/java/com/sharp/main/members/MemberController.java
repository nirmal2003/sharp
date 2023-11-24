package com.sharp.main.members;

import com.sharp.main.dto.member.MemberDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/members")
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;

    @PostMapping(path = "/{memberId}")
    public MemberDTO createMember(@PathVariable("memberId") Long memberId) {
        return memberService.createMember(memberId);
    }

    @GetMapping
    public List<MemberDTO> getMembers() {
        return memberService.getMembers();
    }

    @DeleteMapping(path = "/{memberId}")
    public void deleteMember(@PathVariable("memberId") Long memberId) {
        memberService.deleteMember(memberId);
    }
}
