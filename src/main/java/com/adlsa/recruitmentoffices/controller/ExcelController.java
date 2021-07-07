package com.adlsa.recruitmentoffices.controller;

import com.adlsa.recruitmentoffices.entity.File;
import com.adlsa.recruitmentoffices.entity.Record;
import com.adlsa.recruitmentoffices.entity.Submission;
import com.adlsa.recruitmentoffices.helper.ExcelHelper;
import com.adlsa.recruitmentoffices.message.ResponseMessage;
import com.adlsa.recruitmentoffices.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.util.List;
// http://localhost:9191/api/excel/upload
@Controller
@CrossOrigin(origins = "http://localhost:4200")
public class ExcelController {
    @Autowired
    ExcelService fileService;
    @Autowired
    FileStorageService storageService;
    @Autowired
    SubmissionService submissionService;
    @Autowired
    OfficeService officeService;

    @PostMapping(value = "/upload/{labourLicenseNo}")
    public ResponseEntity<ResponseMessage> uploadFile(@RequestParam("file") MultipartFile file ,@PathVariable int labourLicenseNo) {
        String message = "";
        if (ExcelHelper.hasExcelFormat(file)) {
            try {
                if(officeService.getOfficeById(labourLicenseNo) == null){
                    message = "Office with labour license no: " + labourLicenseNo + " not found!";

                }else {
                    File file1 = storageService.store(file);
                    Submission submission = new Submission(labourLicenseNo, file1.getId());
                    fileService.save(file, submission);
                    message = "Uploaded the file successfully: " + file.getOriginalFilename();
                }
                return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
            } catch (Exception e) {
                message = "Could not upload the file: " + file.getOriginalFilename() + "!";
                return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
            }
        }

        message = "Please upload an excel file!";
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResponseMessage(message));
    }

    @GetMapping("/recordss")
    public ResponseEntity<List<Record>> getAllRecords() {
        try {
            List<Record> records = fileService.getAllRecords();

            if (records.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(records, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
