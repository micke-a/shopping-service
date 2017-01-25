package me.mikael.shopping.api.persistence;

import me.mikael.shopping.api.domain.Shop;

import java.util.List;

/**
 *
 */
public interface ShopRepository{

    void saveShop(Shop shop);
    Shop findByName( String name);
    List<Shop> findAll();
}
