package com.adlsa.recruitmentoffices.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.adlsa.recruitmentoffices.entity.Submission;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.Digits;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "RECORD_TABLE")

public class Record {
    @Id
    private int serialNo;
    @NotNull(message = "Worker name must not be null")
    @Pattern(regexp = "[^0-9]*", message = "Worker name must not contain numbers")
    private String workerName;
    @NotNull(message = "Passport must not be null")
    @Pattern(regexp = "\\s*[a-zA-Z]{2}\\d{7}\\s*", message = "Passport must contain 2 letters and 7 digits")
    private String passport;
    @NotNull(message = "visaNo must not be null")
    @Pattern(regexp = "^[0-9]{12}$", message = "Visa must contain 12 digits")
    private String visaNo;
    @NotNull(message = "Sponsor name must not be null")
    @Pattern(regexp = "[^0-9]*", message = "Sponsor name must not contain numbers")
    private String sponsorName;
    @NotNull(message = "Arrival date must not be null")
    @Pattern(regexp = "([0-2][0-9]|(3)[0-1])-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\\d{2})", message = "Arrival Date must match the format d-MMM-yy")
    private String arrivalDate;
    @NotNull(message = "Remark must not be null")
    private String remark;
}
