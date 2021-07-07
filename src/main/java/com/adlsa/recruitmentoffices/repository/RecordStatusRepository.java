package com.adlsa.recruitmentoffices.repository;

import com.adlsa.recruitmentoffices.entity.RecordStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecordStatusRepository extends JpaRepository<RecordStatus,Integer> {
}
