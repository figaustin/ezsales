package com.ezsales.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.util.Objects;

@Entity
@Table(name = "employees")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty
    @Size(min = 2, max = 30, message = "First name must be at least 2 characters long!")
    private String firstName;

    @NotEmpty
    @Size(min = 2, max = 30, message = "Last name must be at least 2 characters long!")
    private String lastName;


    @Max(value = 999999, message = "Pin must be 6 numbers long.")
    @Min(value = 100000, message = "Pin must be 6 numbers long.")
    private Integer pin;

    @Min(value = 14, message = "Wage you entered is lower than the minimum wage." )
    private Double wage;

    private Boolean clockedIn;


    private Boolean isAdmin;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "business_id")
    private Business business;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Integer getPin() {
        return pin;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", pin='" + pin + '\'' +
                ", isAdmin=" + isAdmin +
                ", business=" + business +
                '}';
    }

    public Double getWage() {
        return wage;
    }

    public void setWage(Double wage) {
        this.wage = wage;
    }

    public Boolean getClockedIn() {
        return clockedIn;
    }

    public void setClockedIn(Boolean clockedIn) {
        this.clockedIn = clockedIn;
    }

    public Boolean getAdmin() {
        return isAdmin;
    }

    public void setAdmin(Boolean admin) {
        isAdmin = admin;
    }

    public Business getBusiness() {
        return business;
    }

    public void setBusiness(Business business) {
        this.business = business;
    }
    public void setPin(Integer pin) {
        this.pin = pin;
    }

    public Employee() {}

}
