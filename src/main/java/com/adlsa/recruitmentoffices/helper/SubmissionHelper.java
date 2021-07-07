package com.adlsa.recruitmentoffices.helper;

import com.adlsa.recruitmentoffices.entity.Record;
import com.adlsa.recruitmentoffices.entity.RecordStatus;
import com.adlsa.recruitmentoffices.entity.Submission;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

public class SubmissionHelper {
    public static List<Submission> submissions = new ArrayList<>();

    public static void validateSubmission(List<Record> records, Submission submission) {
        for(Record record: records){

            ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
            Validator validator = factory.getValidator();

            Set<ConstraintViolation<Record>> constraintViolations = validator.validate(record);
            if( constraintViolations.size() == 0 ){
                inValidSubmissions(submission, "Valid");
            }else{
                inValidSubmissions(submission, "Invalid");
            }
        }
    }
    public static void inValidSubmissions(Submission submission, String status) {
        submission.setSubmissionStatus(status);
        submissions.add(submission);
    }
}
