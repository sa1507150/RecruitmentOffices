package com.adlsa.recruitmentoffices.controller;

import com.adlsa.recruitmentoffices.entity.Submission;
import com.adlsa.recruitmentoffices.service.SubmissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class SubmissionController {
    @Autowired
    private SubmissionService service;

    @PostMapping("/submissions")
    public Submission addSubmission(@RequestBody Submission submission){
        return service.saveSubmission(submission);
    }
    @PostMapping("/addSubmissions")
    public List<Submission> addSubmissions(@RequestBody List<Submission> submissions){
        return service.saveSubmissions(submissions);
    }
    @GetMapping("/submissions")
    public List<Submission> findAllSubmissions(){
        return service.getSubmissions();
    }
    @GetMapping("/submissionById/{id}")
    public Submission findSubmissionById(@PathVariable int id){
        return service.getSubmissionById(id);
    }
    @GetMapping("/submissions/{labourLicenseNo}")
    public List<Submission> findSubmissionsOfOffice(@PathVariable (value = "labourLicenseNo") int labourLicenseNo){
        return service.getSubmissionsOfOffice(labourLicenseNo);
    }
    @GetMapping("/submissionsOfOffice/{labourLicenseNo}/{status}")
    public List<Submission> findSubmissionsOfOfficeByStatus(@PathVariable int labourLicenseNo, @PathVariable String status){
        return service.getSubmissionsOfOfficeByStatus(labourLicenseNo, status);
    }
    @PutMapping("/updateSubmission")
    public Submission updateSubmission(@RequestBody Submission submission){
        return service.updateSubmission(submission);
    }
    @DeleteMapping("/deleteSubmission/{id}")
    public String deleteSubmission(@PathVariable int id){
        return service.deleteSubmission(id);
    }
}
