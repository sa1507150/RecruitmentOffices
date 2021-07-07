package com.adlsa.recruitmentoffices.entity;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Objects;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "recruitment_users_table")
public class RecruitmentUser {
    private @Id @GeneratedValue long id;
    private @NotBlank String username;
    private @NotBlank String password;
    private @NotNull boolean loggedIn;

    public RecruitmentUser(@NotBlank String username, @NotBlank String password) {
        this.username = username;
        this.password = password;
        this.loggedIn = false;
    }
    public long getId() {
        return id;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public boolean isLoggedIn() {
        return loggedIn;
    }
    public void setLoggedIn(boolean loggedIn) {
        this.loggedIn = loggedIn;
    }
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof RecruitmentUser)) return false;
        RecruitmentUser recruitmentUser = (RecruitmentUser) o;
        return Objects.equals(username, recruitmentUser.username) &&
                Objects.equals(password, recruitmentUser.password);
    }
    @Override
    public int hashCode() {
        return Objects.hash(id, username, password, loggedIn);
    }
    @Override
    public String toString() {
        return "RecruitmentUser{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", loggedIn=" + loggedIn +
                '}';
    }
}
