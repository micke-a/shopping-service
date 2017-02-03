
# Dropwizard Backend Application

## How To Build

----
./gradlew shopping-service-dw:assemble
----

## How To Test

----
./gradlew shopping-service-dw:test
----

## How To Run
----

./gradlew shopping-service-dw:run

or

./gradlew shopping-service-dw:oneJar
java -jar shopping-service-dw\build\libs\shopping-service-dw-0.0.1-SNAPSHOT.jar server shopping-service-dw\src\dist\config\config.yml

----