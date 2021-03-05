### Swapi Serverless Lambda AWS - by JoelPanoccaRomero

## Sobre el proyecto

Se exponen 2 servicios (estos servicios son almacenados en DynamoDB)
- **Vehicle**: permite insertar, obtener por id y listar a todos los vehículos
- **People**: permite insertar, obtener por id y listar a todos las personas

Se expone 1 servicio (Este servicio se conecta al endpoint de SWAPI mediante AXIOS)
- **Planet**: permite obtener por id los planetas

### SWAGGER HUB
- Link: https://app.swaggerhub.com/apis/Panocca/Rimac/1.0.0#/
#### Build With
- npm i
- sls Deploy
#### Run Test

- cd test
- npm i
- npm run test

### Objetivo del Reto
- Mapear los campos de inglés y guardarlos en español en la BD Dynamo.
- Conectarse al endpoint de SWAPI.
- Se usan los UNIT TEST con MOCHA.