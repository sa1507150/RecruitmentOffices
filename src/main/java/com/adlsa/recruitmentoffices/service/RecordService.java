package com.adlsa.recruitmentoffices.service;

import com.adlsa.recruitmentoffices.entity.Record;
import com.adlsa.recruitmentoffices.entity.RecordStatus;
import com.adlsa.recruitmentoffices.entity.Submission;
import com.adlsa.recruitmentoffices.helper.RecordHelper;
import com.adlsa.recruitmentoffices.repository.RecordRepository;
import com.adlsa.recruitmentoffices.repository.RecordStatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RecordService {

    @Autowired
    private RecordRepository repository;
    @Autowired
    private RecordStatusRepository recordStatusRepository;

    public Record saveRecord(Record record){
       return repository.save(record);
    }
    public List<Record> saveRecords(List<Record> records/*, Submission submission*/){
        //RecordHelper.recordsValidated(records, submission);
        //repository.saveAll(records);
        return repository.saveAll(RecordHelper.allRecords);
    }
    public List<Record> getRecords(){
        return repository.findAll();
    }
    public Record getRecordById(int serialNo){
        return repository.findById(serialNo).orElse(null);
    }
    public Record getRecordByWorkerName(String workerName){
        return repository.findByWorkerName(workerName);
    }
    public String deleteRecord(int serialNo){
        repository.deleteById(serialNo);
        return "Record removed" + serialNo;
    }
    public List<Record> getRecordssOfSubmission(int submission_id) {
        List<RecordStatus> recordStatuses = recordStatusRepository.findAll();
        List<Record> submissionRecords = new ArrayList<>();
        for (RecordStatus recordStatus : recordStatuses) {
            if (recordStatus.getSubmissionId() == submission_id) {
                Record record = getRecordById(recordStatus.getSerialNo());
                submissionRecords.add(record);
            }
        }
        return submissionRecords;
    }
    public Record updateRecord(Record record){
        Record existingRecord = repository.findById(record.getSerialNo()).orElse(null);
        existingRecord.setWorkerName(record.getWorkerName());
        existingRecord.setPassport(record.getPassport());
        existingRecord.setVisaNo(record.getVisaNo());
        existingRecord.setSponsorName(record.getSponsorName());
        existingRecord.setArrivalDate(record.getArrivalDate());
        existingRecord.setRemark(record.getRemark());
        return repository.save(existingRecord);
    }
}
