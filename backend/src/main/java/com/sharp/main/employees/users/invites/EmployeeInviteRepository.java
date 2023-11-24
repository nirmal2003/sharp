package com.sharp.main.employees.users.invites;

import com.sharp.main.dto.employees.users.EmployeeInviteResponse;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EmployeeInviteRepository extends JpaRepository<EmployeeInvite, Long> {

    @Query("SELECT new com.sharp.main.dto.employees.users.EmployeeInviteResponse(ei.id, r.name, c.color) FROM EmployeeInvite ei JOIN Role r ON ei.roleId = r.id JOIN Color c ON r.colorId = c.id WHERE r.companyId = :companyId ORDER BY r.createdAt DESC")
    List<EmployeeInviteResponse> findAllByCompanyId(@Param("companyId") Long companyId, Pageable pageable);

    Optional<EmployeeInvite> findByIdAndCompanyId(Long id, Long companyId);

    Optional<EmployeeInvite> findByCompanyIdAndRoleId(Long companyId, Long roleId);
}
