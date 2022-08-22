package com.newhope.inventory.domain.inventory.services;


import com.newhope.inventory.domain.exceptions.ResourceCreationException;
import com.newhope.inventory.domain.exceptions.ResourceNotFoundException;
import com.newhope.inventory.domain.inventory.models.Inventory;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;

public interface InventoryService {
    Inventory create(Inventory inventory) throws ResourceCreationException;
    Inventory getById(Long id) throws ResourceNotFoundException;
    Inventory getByName(String name) throws ResourceNotFoundException;
    List<Inventory> getAll();
    Inventory update(Long id, Inventory inventoryDetail) throws ResourceNotFoundException;
    void delete(Long id);
}