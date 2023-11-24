package com.sharp.main.employees.roles;

import com.sharp.main.dto.employees.roles.RoleResponse;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

    @Query("SELECT new com.sharp.main.dto.employees.roles.RoleResponse(r.id, r.name, c.color) FROM Role r JOIN Color c ON r.colorId = c.id WHERE r.companyId = :companyId ORDER BY r.createdAt DESC")
    List<RoleResponse> findAllByCompanyId(@Param("companyId") Long companyId, Pageable pageable);
    Optional<Role> findByIdAndCompanyId(Long id, Long companyId);
}
