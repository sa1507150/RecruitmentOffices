package com.adlsa.recruitmentoffices.service;

import com.adlsa.recruitmentoffices.entity.Submission;
import com.adlsa.recruitmentoffices.repository.SubmissionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SubmissionService {
    @Autowired
    private SubmissionRepository repository;

    public Submission saveSubmission(Submission submission){
        return repository.save(submission);
    }
    public List<Submission> saveSubmissions(List<Submission> submissions){
        return repository.saveAll(submissions);
    }
    public List<Submission> getSubmissions(){
        return repository.findAll();
    }
    public Submission getSubmissionById(int id){
        return repository.findById(id).orElse(null);
    }
    public List<Submission> getSubmissionsOfOffice(int labourLicenseNo){
        List<Submission> submissionsOfOffice = new ArrayList<>();
        List<Submission> allSubmissions = getSubmissions();
        for(Submission submission: allSubmissions){
            if(submission.getLabourLicenseNo() == labourLicenseNo)
                submissionsOfOffice.add(submission);
        }
        return submissionsOfOffice;
    }
    public List<Submission> getSubmissionsOfOfficeByStatus(int labourLicenseNo, String status){
        List<Submission> submissionsOfOffice = new ArrayList<>();
        List<Submission> allSubmissions = getSubmissions();
        for(Submission submission: allSubmissions){
            if(submission.getLabourLicenseNo() == labourLicenseNo)
                if(submission.getSubmissionStatus().equalsIgnoreCase(status))
                        submissionsOfOffice.add(submission);
        }
        return submissionsOfOffice;
    }
    public String deleteSubmission(int id){
        repository.deleteById(id);
        return "Submission removed" + id;
    }
    public Submission updateSubmission(Submission submission){
        Submission existingSubmission = repository.findById(submission.getId()).orElse(null);
        existingSubmission.setLabourLicenseNo(submission.getLabourLicenseNo());
        existingSubmission.setSubmissionDate(submission.getSubmissionDate());
        existingSubmission.setSubmissionStatus(submission.getSubmissionStatus());
        existingSubmission.setFileId(submission.getFileId());
        return repository.save(existingSubmission);
    }
}
