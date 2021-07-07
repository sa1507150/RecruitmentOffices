package com.adlsa.recruitmentoffices.service;

import com.adlsa.recruitmentoffices.entity.File;
import com.adlsa.recruitmentoffices.repository.FileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Objects;
import java.util.stream.Stream;

@Service
public class FileStorageService {

    @Autowired
    private FileRepository fileRepository;

    public File store(MultipartFile file) throws IOException {
        String fileName = StringUtils.cleanPath(Objects.requireNonNull(file.getOriginalFilename()));
        File file1 = new File(fileName, file.getContentType(), file.getBytes());
        return fileRepository.save(file1);
    }

    public File getFile(int id) {
        return fileRepository.findById(id).get();
    }

    public Stream<File> getAllFiles() {
        return fileRepository.findAll().stream();
    }
    public List<File> getFiles() {
        return fileRepository.findAll();
    }

}