package me.mikael.shopping.api.distance;

import me.mikael.shopping.api.domain.Location;
import me.mikael.shopping.api.domain.Shop;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

/**
 *
 */
public class DefaultDistanceCalculatorTests {

    private static final double[][] TEST_DATA = {
            //long1,lat1, long2,lat2,  expected value
            {0,0,    0,0,  0},
            {1,0,    1,0,  0},
            {0,1,    0,1,  0},
            {2,2,    4,4,  2.828},
            {4,4,    2,2,  2.828},
            {-2,-2, -4,-4, 2.828}
    };

    private static final int LONG_INDEX1 = 0;
    private static final int LAT_INDEX1 = 1;

    private static final int LONG_INDEX2 = 2;
    private static final int LAT_INDEX2 = 3;

    private static final int EXPECTED_INDEX = 4;

    private DefaultDistanceCalculator distanceCalculator;
    
    @Before
    public void before(){
        distanceCalculator = new DefaultDistanceCalculator();
    }
    
    @Test
    public void distanceCalculations(){
        
        for(int i=0; i<TEST_DATA.length; i++){
            double[] testData = TEST_DATA[i];

            final Location loc1 = new Location(testData[LONG_INDEX1], testData[LAT_INDEX1]);
            final Location loc2 = new Location(testData[LONG_INDEX2], testData[LAT_INDEX2]);

            assertEquals(
                    "Test case "+i,
                    testData[EXPECTED_INDEX],
                    distanceCalculator.calculate(loc1, loc2),
                2d);
        }
    }



    @Test(expected = NullPointerException.class)
    public void nearestWithNullArguments1(){
        distanceCalculator.calculate(null, null);
    }

    @Test(expected = NullPointerException.class)
    public void nearestWithNullArguments2(){
        distanceCalculator.calculate(null, new Shop());
    }

    @Test(expected = NullPointerException.class)
    public void nearestWithNullArguments3(){
        distanceCalculator.calculate((new Shop()), null);
    }
}
