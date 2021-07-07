package com.adlsa.recruitmentoffices.controller;

import com.adlsa.recruitmentoffices.entity.RecordStatus;
import com.adlsa.recruitmentoffices.helper.RecordHelper;
import com.adlsa.recruitmentoffices.service.RecordStatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class RecordStatusController {
    @Autowired
    private RecordStatusService service;

    @PostMapping("/recordStatuses")
    public RecordStatus addRecord(@RequestBody RecordStatus record){
        return service.saveRecordStatus(record);
    }
    @PostMapping("/addRecordStatuses")
    public List<RecordStatus> addRecords(){
        return service.saveRecordStatuses();
    }
    @GetMapping("/recordStatuses")
    public List<RecordStatus> findAllRecordStatuses(){
        return service.getRecordStatuses();
    }
    @GetMapping("/recordStatuses/{serialNo}")
    public RecordStatus findRecordStatusById(@PathVariable int serialNo){
        return service.getRecordStatusById(serialNo);
    }
    @PutMapping("/updateRecordStatus")
    public RecordStatus updateRecordStatus(@RequestBody RecordStatus record){
        return service.updateRecordStatus(record);
    }
    @DeleteMapping("/deleteRecordStatus/{serialNo}")
    public String deleteRecordStatus(@PathVariable int serialNo){
        return service.deleteRecordStatus(serialNo);
    }
}
