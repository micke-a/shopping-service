package me.mikael.shopping.api.service;

import me.mikael.shopping.api.domain.Location;

import java.util.Optional;

/**
 *
 */
public interface GeolocationService {

    Optional<Location> findLocationByStreetAndPostCode(final String number, final String postCode);
}
