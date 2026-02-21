package com.zone.manegment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/zones")
@CrossOrigin("*")
public class ZoneController {

    @Autowired
    private ZoneService zoneService;

    @PostMapping
    public Zone create(@RequestBody Zone zone){
        return zoneService.createZone(zone);
    }

    @GetMapping
    public List<Zone> all(){
        return zoneService.getAllZones();
    }

    @PutMapping("/{id}/{status}")
    public Zone updateStatus(@PathVariable Long id, @PathVariable Boolean status){
        return zoneService.updateStatus(id,status);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        zoneService.deleteZone(id);
    }
}

