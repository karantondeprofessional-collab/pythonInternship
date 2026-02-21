package com.managment.groupManagment;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "groups")
public class GroupEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer groupId;

    @Column(nullable = false, unique = true)
    private String groupName;

    private Boolean isActive = true;

    private LocalDateTime createdAt = LocalDateTime.now();
    private LocalDateTime updatedAt = LocalDateTime.now();

    public Integer getGroupId() { return groupId; }
    public String getGroupName() { return groupName; }
    public Boolean getIsActive() { return isActive; }

    public void setGroupName(String groupName) { this.groupName = groupName; }
    public void setIsActive(Boolean isActive) { this.isActive = isActive; }
}

