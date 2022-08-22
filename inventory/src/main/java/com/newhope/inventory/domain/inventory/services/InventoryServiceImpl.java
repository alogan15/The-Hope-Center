package com.newhope.inventory.domain.inventory.services;

import com.newhope.inventory.domain.exceptions.ResourceCreationException;
import com.newhope.inventory.domain.exceptions.ResourceNotFoundException;
import com.newhope.inventory.domain.inventory.models.Inventory;
import com.newhope.inventory.domain.inventory.repos.InventoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InventoryServiceImpl implements InventoryService{
    private InventoryRepo inventoryRepo;

    @Autowired
    public InventoryServiceImpl(InventoryRepo inventoryRepo) {
        this.inventoryRepo = inventoryRepo;
    }

    @Override
    public Inventory create(Inventory inventory) throws ResourceCreationException {
        Optional<Inventory> optional = inventoryRepo.findByName(inventory.getName());
        if(optional.isPresent())
            throw new ResourceCreationException("This item was found in " + inventory.getName());
        inventory = inventoryRepo.save(inventory);
        return inventory;
    }

    @Override
    public Inventory getById(Long id) throws ResourceNotFoundException {
        Inventory inventory = inventoryRepo.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("No item was found in category " + id));
        return inventory;
    }

    @Override
    public Inventory getByName(String name) throws ResourceNotFoundException {
        Inventory inventory = inventoryRepo.findByName(name)
                .orElseThrow(()->new ResourceNotFoundException("No item found with name: " + name));
        return inventory;
    }

    @Override
    public List<Inventory> getAll() {
        return inventoryRepo.findAll();
    }

    @Override
    public Inventory update(Long id, Inventory inventoryDetail) throws ResourceNotFoundException {
        Inventory inventory = getById(id);
        inventory.setName(inventoryDetail.getName());
        inventory.setCategoryType(inventoryDetail.getCategoryType());
        inventory.setDescription(inventoryDetail.getDescription());
        inventory = inventoryRepo.save(inventory);
        return inventory;
    }

    @Override
    public void delete(Long id) {
        Inventory inventory = getById(id);
        inventoryRepo.delete(inventory);
    }
}
