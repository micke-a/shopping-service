package me.mikael.shopping.api.persistence;

import me.mikael.shopping.api.domain.Shop;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 *
 */
@Service
@RepositoryRestResource()
public interface JpaShopRepository extends ShopRepository, JpaRepository<Shop, Long> {

    default void saveShop(Shop shop){
        save(shop);
    }


}
