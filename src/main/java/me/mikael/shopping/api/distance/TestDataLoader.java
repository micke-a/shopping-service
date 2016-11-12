package me.mikael.shopping.api.distance;

import me.mikael.shopping.api.domain.Location;
import me.mikael.shopping.api.domain.Shop;
import me.mikael.shopping.api.domain.ShopAddress;
import me.mikael.shopping.api.persistence.ShopRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

/**
 *
 */
@Component
@Profile("local")
public class TestDataLoader {

    @Autowired
    private ShopRepository shopRepository;

    @PostConstruct
    public void loadLocalEnvTestData(){

        for(int i=0; i<10;i++) {
            ShopAddress sa = new ShopAddress();
            sa.setNumber("10"+i);
            sa.setPostCode("SG14"+i+"FF");

            Location loc = new Location(i,i);

            Shop shop = new Shop();
            shop.setName("name"+i);
            shop.setAddress(sa);
            shop.setLocation(loc);

            shopRepository.save(shop);
        }
    }
}
