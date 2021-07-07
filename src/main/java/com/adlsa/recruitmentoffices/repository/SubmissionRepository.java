package com.adlsa.recruitmentoffices.repository;

import com.adlsa.recruitmentoffices.entity.Submission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubmissionRepository extends JpaRepository<Submission,Integer>{
}
