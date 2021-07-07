package com.adlsa.recruitmentoffices.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "OFFICE_TABLE")
public class Office {
        @Id
        private int labourLicenseNo;
        private String officeName;
        private String address;
}
