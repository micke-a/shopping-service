package me.mikael.shopping.api.persistence;

import me.mikael.shopping.api.domain.Shop;

import java.util.List;
import java.util.Optional;

/**
 *
 */
public interface ShopRepository{

    void saveShop(Shop shop);
    Shop findByName( String name);
    List<Shop> findAll();

    Optional<Shop> findById(int id);
}
