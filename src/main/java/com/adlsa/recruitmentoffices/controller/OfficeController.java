package com.adlsa.recruitmentoffices.controller;

import com.adlsa.recruitmentoffices.entity.Office;
import com.adlsa.recruitmentoffices.service.OfficeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class OfficeController {

    @Autowired
    private OfficeService service;

    @PostMapping("/offices")
    public Office addOffice(@RequestBody Office office) {
        return service.saveOffice(office);
    }

    @PostMapping("/addOffices")
    public List<Office> addOffices(@RequestBody List<Office> offices) {
        return service.saveOffices(offices);
    }

    @GetMapping("/offices")
    public List<Office> findAllOffices() {
        return service.getOffices();
    }

    @GetMapping("/officeById/{labourLicenseNo}")
    public Office findOfficeById(@PathVariable int labourLicenseNo) {
        return service.getOfficeById(labourLicenseNo);
    }

    @GetMapping("/officeByOfficeName/{officeName}")
    public Office findOfficeByOfficeName(@PathVariable String officeName) {
        return service.getOfficeByOfficeName(officeName);
    }

    @PutMapping("/updateOffice")
    public Office updateOffice(@RequestBody Office office) {
        return service.updateOffice(office);
    }

    @DeleteMapping("/deleteOffice/{labourLicenseNo}")
    public String deleteOffice(@PathVariable int labourLicenseNo) {
        return service.deleteOffice(labourLicenseNo);
    }
}