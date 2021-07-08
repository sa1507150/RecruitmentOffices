package com.adlsa.recruitmentoffices.repository;


import com.adlsa.recruitmentoffices.entity.ERole;
import com.adlsa.recruitmentoffices.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
