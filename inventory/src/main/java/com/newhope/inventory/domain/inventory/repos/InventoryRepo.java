package com.newhope.inventory.domain.inventory.repos;


import com.newhope.inventory.domain.inventory.models.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface InventoryRepo extends JpaRepository<Inventory, Long> {
    Optional<Inventory> findByName(String name);
}
