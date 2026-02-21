package com.managment.groupManagment;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/groups")
public class GroupController {

    private final GroupRepository repository;

    public GroupController(GroupRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<GroupEntity> getAll() {
        return repository.findAll();
    }

    @PostMapping
    public GroupEntity create(@RequestBody GroupEntity group) {
        if (repository.existsByGroupName(group.getGroupName())) {
            throw new RuntimeException("Group name already exists");
        }
        return repository.save(group);
    }

    @PutMapping("/{id}")
    public GroupEntity update(@PathVariable Integer id, @RequestBody GroupEntity group) {
        GroupEntity existing = repository.findById(id).orElseThrow();
        existing.setGroupName(group.getGroupName());
        return repository.save(existing);
    }

    @DeleteMapping("/{id}")
    public void softDelete(@PathVariable Integer id) {
        GroupEntity existing = repository.findById(id).orElseThrow();
        existing.setIsActive(false);
        repository.save(existing);
    }
}
