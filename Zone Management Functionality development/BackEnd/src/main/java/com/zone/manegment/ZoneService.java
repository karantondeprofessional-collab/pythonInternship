package com.zone.manegment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ZoneService {

    @Autowired
    private ZoneRepository zoneRepository;

    public Zone createZone(Zone zone){
        return zoneRepository.save(zone);
    }

    public List<Zone> getAllZones(){
        return zoneRepository.findAll();
    }

    public Zone updateStatus(Long id, Boolean status){
        Zone z = zoneRepository.findById(id).orElseThrow();
        z.setStatus(status);
        return zoneRepository.save(z);
    }

    public void deleteZone(Long id){
        zoneRepository.deleteById(id);
    }
}

