package com.adlsa.recruitmentoffices.controller;

import com.adlsa.recruitmentoffices.entity.Record;
import com.adlsa.recruitmentoffices.entity.RecordStatus;
import com.adlsa.recruitmentoffices.entity.Submission;
import com.adlsa.recruitmentoffices.service.RecordService;
import com.adlsa.recruitmentoffices.service.RecordStatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class RecordController {

    @Autowired
    private RecordService service;
    @Autowired
    private RecordStatusService recordStatusService;

    @PostMapping("/records")
    public Record addRecord(@RequestBody Record record){
        return service.saveRecord(record);
    }
    @PostMapping("/addRecords")
    public List<Record> addRecords(@RequestBody List<Record> records){
        return service.saveRecords(records);
    }
    @GetMapping("/records")
    public List<Record> findAllRecords(){
        return service.getRecords();
    }
    @GetMapping("/recordById/{serialNo}")
    public Record findRecordById(@PathVariable int serialNo){
        return service.getRecordById(serialNo);
    }
    @GetMapping("/records/recordStatus/{serialNo}")
    public RecordStatus showRecordStatus(@PathVariable int serialNo){
        return recordStatusService.getRecordStatusById(serialNo);
    }
    @GetMapping("/records/{id}")
    public List<Record> findRecordsOfSubmissions(@PathVariable (value = "id") int id){
        return service.getRecordssOfSubmission(id);
    }
    @GetMapping("/recordByWorkerName/{workerName}")
    public Record findRecordByWorkerName(@PathVariable String workerName){
        return service.getRecordByWorkerName(workerName);
    }
    @PutMapping("/updateRecord")
    public Record updateRecord(@RequestBody Record record){
        return service.updateRecord(record);
    }
    @DeleteMapping("/deleteRecord/{serialNo}")
    public String deleteRecord(@PathVariable int serialNo){
        return service.deleteRecord(serialNo);
    }
}
