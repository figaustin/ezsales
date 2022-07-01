package com.ezsales.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
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

    @NotEmpty
    @Size(min = 6, max = 6, message = "Pin must be 6 numbers!")
    private String pin;

    private Integer wage;

    private Boolean clockedIn;


    private Boolean isAdmin;

    @JsonBackReference
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

    public String getPin() {
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

    public Integer getWage() {
        return wage;
    }

    public void setWage(Integer wage) {
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
    public void setPin(String pin) {
        this.pin = pin;
    }


    public Employee() {}

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Employee employee = (Employee) o;
        return Objects.equals(id, employee.id) && Objects.equals(firstName, employee.firstName) && Objects.equals(lastName, employee.lastName) && Objects.equals(pin, employee.pin) && Objects.equals(isAdmin, employee.isAdmin) && Objects.equals(business, employee.business);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, firstName, lastName, pin, isAdmin, business);
    }

    public Employee(String firstName, String lastName, String pin, Boolean isAdmin) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.pin = pin;
        this.isAdmin = isAdmin;
    }
}
