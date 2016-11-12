package me.mikael.shopping.api.service;

import me.mikael.shopping.api.domain.Location;
import me.mikael.shopping.api.domain.Shop;

import java.util.Optional;

/**
 *
 */
public interface ShopLocatorService {
    Optional<Shop> findShopNearestTo(Location location);
}
