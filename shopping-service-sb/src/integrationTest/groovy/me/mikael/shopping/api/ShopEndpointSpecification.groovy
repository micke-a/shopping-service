package me.mikael.shopping.api

import groovyx.net.http.RESTClient
import static groovyx.net.http.ContentType.*
import spock.lang.Specification


/**
 * Requires Shopping API application to be running on localhost:8080
 */
class ShopEndpointSpecification extends Specification{

    def "Cannot create shop because location can not be determined"(){
        setup:
        def shopEndpoint = new RESTClient( 'http://localhost:8080/', JSON )
        shopEndpoint.handler.failure = { resp -> resp}

        when:
        def resp = shopEndpoint.post(
            [
                path: "shops",
                body: [
                    name   : 'test shop',
                    address: [
                            number  : "This cannot be located",
                            postCode: "AB143CD"
                    ]
                ]
            ]
        )

        then:
        with(resp) {
            status == 400
        }
    }

    def "Shop data returned successfully"() {
        setup:
        def shopEndpoint = new RESTClient( 'http://localhost:8080/' )

        when:
        //def resp = shopEndpoint.get([ path: 'shops', query : [ input : 'Get a hair cut' ]])
        def resp = shopEndpoint.get([ path: 'shops'])

        then:
        with(resp) {
            status == 200
            contentType == "application/json"
        }
        with(resp.data) {
            it.size() > 0 // We get results

            //Look for known shop from test data set
            def shop = it.find { s -> s.id == 1 }

            shop.name == 'name0'
            shop.address.getStreet == '100'
            shop.address.postCode == 'SG140FF'
            shop.location.latitude != null
            shop.location.longitude != null
        }
    }
}