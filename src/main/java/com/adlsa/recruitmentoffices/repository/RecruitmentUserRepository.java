package com.adlsa.recruitmentoffices.repository;

import com.adlsa.recruitmentoffices.entity.RecruitmentUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecruitmentUserRepository  extends JpaRepository<RecruitmentUser, Long> {
}

