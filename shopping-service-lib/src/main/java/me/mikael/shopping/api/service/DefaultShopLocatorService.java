package me.mikael.shopping.api.service;

import me.mikael.shopping.api.distance.LocationAware;
import me.mikael.shopping.api.domain.Location;
import me.mikael.shopping.api.domain.Shop;
import me.mikael.shopping.api.persistence.ShopRepository;
import me.mikael.shopping.api.distance.DistanceCalculator;

import java.util.List;
import java.util.Optional;

/**
 *
 */
public class DefaultShopLocatorService implements ShopLocatorService {

    private DistanceCalculator distanceCalculator;

    private ShopRepository shopRepository;

    public DefaultShopLocatorService(DistanceCalculator distanceCalculator, ShopRepository shopRepository){
        this.distanceCalculator = distanceCalculator;
        this.shopRepository = shopRepository;
    }

    @Override
    @SuppressWarnings("unchecked")
    public Optional<Shop> findShopNearestTo(final Location location) {

        final List<Shop> shops = shopRepository.findAll();

        Optional<? extends LocationAware> shopOptional = distanceCalculator.nearest(location, shops);

        return (Optional<Shop>) shopOptional;
    }
}
