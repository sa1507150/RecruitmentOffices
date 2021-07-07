package com.adlsa.recruitmentoffices.repository;

import com.adlsa.recruitmentoffices.entity.ADLSAUser;
import com.adlsa.recruitmentoffices.entity.Record;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface ADLSAUserRepository extends JpaRepository<ADLSAUser, Long> {
}
