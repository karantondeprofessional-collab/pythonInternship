package com.cainmanagmant.demo.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class ChainRequestDTO {

    @NotBlank(message = "Company name is required")
    private String companyName;

    @NotBlank(message = "GSTN number is required")
    @Size(min = 15, max = 15, message = "GSTN must be 15 characters")
    private String gstnNo;

    // getters & setters
}

