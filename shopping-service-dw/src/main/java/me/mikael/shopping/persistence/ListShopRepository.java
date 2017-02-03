package me.mikael.shopping.persistence;

import me.mikael.shopping.api.domain.Shop;
import me.mikael.shopping.api.persistence.ShopRepository;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

/**
 *
 */
public class ListShopRepository implements ShopRepository {

    private final List<Shop> shops = new ArrayList<>(100);

    @Override
    public void saveShop(Shop shop) {
        shops.add(shop);
    }

    @Override
    public Shop findByName(String name) {
        return shops.stream().filter( s -> name.equals(s.getName())).findFirst().orElse(null);
    }

    @Override
    public List<Shop> findAll() {
        return Collections.unmodifiableList(shops);
    }

    @Override
    public Optional<Shop> findById(int id) {
        Optional<Shop> retVal = shops.stream()
                .filter( s -> id == s.getId() )
                .findFirst();

        return retVal;
    }
}
