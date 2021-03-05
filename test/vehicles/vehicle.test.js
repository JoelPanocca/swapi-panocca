const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const expect = chai.expect;

describe('Test para Lambda: VEHICULO', function () {
    this.timeout(10000);

    it('Debe crear un VEHICULO', async () => {

        const newVehicle = {
            "cargo_capacity": (Math.floor(Math.random()*90000) + 10000).toString(),
            "consumables": "2 months",
            "cost_in_credits": (Math.floor(Math.random()*90000) + 10000).toString(),
            "created": "2017-12-10T15:36:25.724000Z",
            "crew": (Math.floor(Math.random()*90) + 10).toString(),
            "edited": "2017-12-10T15:36:25.724000Z",
            "length": "36.8",
            "manufacturer": "Corporation " + Math.random().toString(36).substring(7),
            "max_atmosphering_speed": (Math.floor(Math.random()*90) + 10).toString(),
            "model": "model " + Math.random().toString(36).substring(5),
            "name": "name " + Math.random().toString(36).substring(5),
            "passengers": (Math.floor(Math.random()*90) + 10).toString(),
            "pilots": [],
            "films": [
                "https://swapi.py4e.com/api/films/1/"
            ],
            "url": "https://swapi.py4e.com/api/vehicles/4/",
            "vehicle_class": "wheeled"
        };

        const result = await chai.request('https://rmoj9kusdj.execute-api.us-east-1.amazonaws.com/dev')
            .post('/vehicles')
            .send(newVehicle)

        expect(result.statusCode).to.equal(201);
    });

    it('Verifica obtener un vehículo', async () => {

        const result = await chai.request('https://rmoj9kusdj.execute-api.us-east-1.amazonaws.com/dev')
            .get('/vehicles/8ad660a0-7ca7-11eb-ab3e-8fd8049c9b64');

        expect(result.statusCode).to.equal(200);
        expect(result.body).to.be.an('object');
    });

    it('Verifica obtener todos los vehículos', async () => {

        const result = await chai.request('https://rmoj9kusdj.execute-api.us-east-1.amazonaws.com/dev')
            .get('/vehicles/');

        expect(result.statusCode).to.equal(200);
        expect(result.body).to.be.an('array');
    });
});