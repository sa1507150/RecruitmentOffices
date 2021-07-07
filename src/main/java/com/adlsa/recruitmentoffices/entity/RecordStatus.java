package com.adlsa.recruitmentoffices.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "RECORD_STATUS_TABLE")
public class RecordStatus {
    @Id
    private int serialNo;
    private String status;
    private String issue;
    private int submissionId;
}
