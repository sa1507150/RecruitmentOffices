package com.adlsa.recruitmentoffices.repository;

import com.adlsa.recruitmentoffices.entity.Office;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OfficeRepository extends JpaRepository<Office,Integer> {
    Office findByOfficeName(String officeName);
}
