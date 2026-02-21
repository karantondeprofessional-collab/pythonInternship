package com.managment.groupManagment;


import org.springframework.data.jpa.repository.JpaRepository;

public interface GroupRepository extends JpaRepository<GroupEntity, Integer> {
    boolean existsByGroupName(String groupName);
}
