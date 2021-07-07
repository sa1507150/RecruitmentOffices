package com.adlsa.recruitmentoffices.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.adlsa.recruitmentoffices.entity.File;

import javax.persistence.*;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "SUBMISSION_TABLE")
public class Submission {
    @Id
    @GeneratedValue
    private int id;
    private int labourLicenseNo;
    private String submissionDate;
    private int fileId;
    private String submissionStatus;

    public Submission(int labourLicenseNo, int fileId){
        this.labourLicenseNo = labourLicenseNo;
        this.submissionDate = new SimpleDateFormat("d-MMM-yy").format(new Date());
        this.fileId = fileId;
    }
}
