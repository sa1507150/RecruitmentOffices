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

public class RecordHelper {
    public static List<RecordStatus> recordStatuses = new ArrayList<>();
    public static List<Record> allRecords = new ArrayList<>();

    public static /*List<Record>*/ void recordsValidated(List<Record> records, Submission submission) {
        //List<Record> validRecords = new ArrayList<>();

        for(Record record: records){

            ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
            Validator validator = factory.getValidator();

            Set<ConstraintViolation<Record>> constraintViolations = validator.validate(record);
            if( constraintViolations.size() == 0 ){
                //validRecords.add(record);
                inValidRecordStatuses(record, "Valid", "No Issue", submission.getId());
            }else{
                //validRecords.add(record);
                inValidRecordStatuses(record, "Invalid", constraintViolations.iterator().next().getMessage(), submission.getId());
            }
            allRecords.add(record);
        }
        //return allRecords;
    }
    public static void inValidRecordStatuses(Record record, String status, String issue, int submissionId) {
        recordStatuses.add(new RecordStatus(record.getSerialNo(), status, issue, submissionId));
        //allRecords.add(record);
    }
}
