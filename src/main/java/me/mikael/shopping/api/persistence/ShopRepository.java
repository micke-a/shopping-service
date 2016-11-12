package me.mikael.shopping.api.persistence;

import me.mikael.shopping.api.domain.Shop;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 *
 */
@RepositoryRestResource()
public interface ShopRepository extends JpaRepository<Shop, Long> {

    Shop findByName(@Param("name") String name);
}
