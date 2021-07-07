package com.adlsa.recruitmentoffices.service;

import com.adlsa.recruitmentoffices.entity.RecordStatus;
import com.adlsa.recruitmentoffices.helper.RecordHelper;
import com.adlsa.recruitmentoffices.repository.RecordStatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.adlsa.recruitmentoffices.helper.RecordHelper.recordStatuses;

@Service
public class RecordStatusService {

    @Autowired
    private RecordStatusRepository repository;

    public RecordStatus saveRecordStatus(RecordStatus recordStatus){
        return repository.save(recordStatus);
    }
    public List<RecordStatus> saveRecordStatuses(){
        return repository.saveAll(recordStatuses);
    }
    public List<RecordStatus> getRecordStatuses(){
        return repository.findAll();
    }
    public RecordStatus getRecordStatusById(int serialNo){
        return repository.findById(serialNo).orElse(null);
    }
    public String deleteRecordStatus(int serialNo){
        repository.deleteById(serialNo);
        return "Record Status removed" + serialNo;
    }
    public RecordStatus updateRecordStatus(RecordStatus recordStatus){
        RecordStatus existingRecordStatus = repository.findById(recordStatus.getSerialNo()).orElse(null);
        assert existingRecordStatus != null;
        existingRecordStatus.setStatus(recordStatus.getStatus());
        existingRecordStatus.setIssue(recordStatus.getIssue());
        existingRecordStatus.setSubmissionId(recordStatus.getSubmissionId());
        return repository.save(existingRecordStatus);
    }
}
