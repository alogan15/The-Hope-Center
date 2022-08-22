package com.newhope.inventory.domain;


import com.newhope.inventory.domain.inventory.models.Inventory;
import com.newhope.inventory.domain.inventory.models.CategoryType;
import com.newhope.inventory.domain.inventory.services.InventoryService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class InitialDataLoader implements CommandLineRunner {

    @Autowired
    private InventoryService inventoryService;

    @Override
    public void run(String...args) throws Exception{
        Inventory inventory = new Inventory("Clothes", CategoryType.ADULT, "small");
        inventory = inventoryService.create(inventory);
        log.info("Created a new category" + inventory.toString());
    }
}
