package com.adlsa.recruitmentoffices.service;

import com.adlsa.recruitmentoffices.entity.Office;
import com.adlsa.recruitmentoffices.repository.OfficeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class OfficeService {
    @Autowired
    private OfficeRepository repository;

    public Office saveOffice(Office office){
        return repository.save(office);
    }
    public List<Office> saveOffices(List<Office> offices){
        return repository.saveAll(offices);
    }
    public List<Office> getOffices(){
        return repository.findAll();
    }
    public Office getOfficeById(int labourLicenseNo){
        return repository.findById(labourLicenseNo).orElse(null);
    }
    public Office getOfficeByOfficeName(String officeName){
        return repository.findByOfficeName(officeName);
    }
    public String deleteOffice(int labourLicenseNo){
        repository.deleteById(labourLicenseNo);
        return "Office removed" + labourLicenseNo;
    }
    public Office updateOffice(Office office){
        Office existingOffice = repository.findById(office.getLabourLicenseNo()).orElse(null);
        assert existingOffice != null;
        existingOffice.setOfficeName(office.getOfficeName());
        existingOffice.setAddress(office.getAddress());
        return repository.save(existingOffice);
    }
}
