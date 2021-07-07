package com.adlsa.recruitmentoffices.service;

import com.adlsa.recruitmentoffices.entity.Record;
import com.adlsa.recruitmentoffices.entity.Submission;
import com.adlsa.recruitmentoffices.helper.ExcelHelper;
import com.adlsa.recruitmentoffices.helper.RecordHelper;
import com.adlsa.recruitmentoffices.helper.SubmissionHelper;
import com.adlsa.recruitmentoffices.repository.RecordRepository;
import com.adlsa.recruitmentoffices.repository.RecordStatusRepository;
import com.adlsa.recruitmentoffices.repository.SubmissionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class ExcelService {
    @Autowired
    RecordRepository repository;
    @Autowired
    RecordStatusRepository recordStatusRepository;
    @Autowired
    SubmissionRepository submissionRepository;
    public void save(MultipartFile file, Submission submission) {
        try {
            List<Record> records = ExcelHelper.excelToRecords(file.getInputStream());
            submissionRepository.save(submission);
            RecordHelper.recordsValidated(records, submission);
            SubmissionHelper.validateSubmission(records, submission);
            submissionRepository.saveAll(SubmissionHelper.submissions);
            recordStatusRepository.saveAll(RecordHelper.recordStatuses);
            repository.saveAll(RecordHelper.allRecords);
        } catch (IOException e) {
            throw new RuntimeException("fail to store excel data: " + e.getMessage());
        }
    }

    public List<Record> getAllRecords() {
        return repository.findAll();
    }
}