package com.adlsa.recruitmentoffices.controller;

import com.adlsa.recruitmentoffices.entity.*;
import com.adlsa.recruitmentoffices.repository.RecruitmentUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class RecruitmentUserController {

    @Autowired
    RecruitmentUserRepository recruitmentUserRepository;


    @PostMapping("/recruitmentUsers/register")
    public Status registerUser(@Valid @RequestBody RecruitmentUser newRecruitmentUser) {
        List<RecruitmentUser> recruitmentUsers = recruitmentUserRepository.findAll();
        System.out.println("New user: " + newRecruitmentUser.toString());
        for (RecruitmentUser recruitmentUser : recruitmentUsers) {
            System.out.println("Registered user: " + newRecruitmentUser.toString());
            if (recruitmentUser.equals(newRecruitmentUser)) {
                System.out.println("User Already exists!");
                return Status.USER_ALREADY_EXISTS;
            }
        }
        recruitmentUserRepository.save(newRecruitmentUser);
        return Status.SUCCESS;
    }

    @PostMapping("/recruitmentUsers/login")
    public Status loginUser(@Valid @RequestBody RecruitmentUser recruitmentUser) {
        List<RecruitmentUser> recruitmentUsers = recruitmentUserRepository.findAll();
        for (RecruitmentUser other : recruitmentUsers) {
            if (other.equals(recruitmentUser)) {
                recruitmentUser.setLoggedIn(true);
                recruitmentUserRepository.save(recruitmentUser);
                return Status.SUCCESS;
            }
        }
        return Status.FAILURE;
    }

    @PostMapping("/recruitmentUsers/logout")
    public Status logUserOut(@Valid @RequestBody RecruitmentUser recruitmentUser) {
        List<RecruitmentUser> recruitmentUsers = recruitmentUserRepository.findAll();
        for (RecruitmentUser other : recruitmentUsers) {
            if (other.equals(recruitmentUser)) {
                recruitmentUser.setLoggedIn(false);
                recruitmentUserRepository.save(recruitmentUser);
                return Status.SUCCESS;
            }
        }
        return Status.FAILURE;
    }

    @DeleteMapping("/recruitmentUsers/all")
    public Status deleteUsers() {
        recruitmentUserRepository.deleteAll();
        return Status.SUCCESS;
    }

}

