package com.newhope.inventory.domain.inventory.controllers;


import com.newhope.inventory.domain.inventory.models.Inventory;
import com.newhope.inventory.domain.inventory.services.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/inventory")
public class InventoryController {

    private InventoryService inventoryService;

    @Autowired
    public InventoryController(InventoryService inventoryService) {
        this.inventoryService = inventoryService;
    }

    @GetMapping
    public ResponseEntity<List<Inventory>> getAll(){
        List<Inventory> inventories = inventoryService.getAll();
        return new ResponseEntity<>(inventories, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Inventory> create(@RequestBody Inventory inventory){
        inventory = inventoryService.create(inventory);
        return new ResponseEntity<>(inventory, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<Inventory> getById(@PathVariable("id") Long id){
        Inventory inventory = inventoryService.getById(id);
        return new ResponseEntity<>(inventory, HttpStatus.OK);
    }

    @GetMapping("lookup")
    public ResponseEntity<Inventory> getByName(@RequestParam String name){
        Inventory inventory = inventoryService.getByName(name);
        return new ResponseEntity<>(inventory, HttpStatus.OK);
    }

    @PutMapping("{id}")
    public ResponseEntity<Inventory> update(@PathVariable("id") Long id, @RequestBody Inventory inventoryDetail){
        inventoryDetail = inventoryService.update(id, inventoryDetail);
        return new ResponseEntity<>(inventoryDetail, HttpStatus.ACCEPTED);
    }

    @DeleteMapping("{id}")
    public ResponseEntity delete(@PathVariable("id") Long id){
        inventoryService.delete(id);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}