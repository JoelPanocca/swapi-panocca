const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const expect = chai.expect;

describe('Test para Lambda: PEOPLE', function () {
    this.timeout(10000);

    it('Debe crear una persona', async () => {

        const newPeople = {
            "name": "People " + Math.random().toString(36).substring(7), 
            "height": "150", 
            "mass": "40", 
            "hair_color": "n/a", 
            "skin_color": "pink", 
            "eye_color": "black", 
            "birth_year": "112BBY", 
            "gender": "m", 
            "homeworld": "https://swapi.py4e.com/api/planets/2/", 
            "films": [
                "https://swapi.py4e.com/api/films/1/", 
                "https://swapi.py4e.com/api/films/2/", 
                "https://swapi.py4e.com/api/films/3/"
            ], 
            "species": [
                "https://swapi.py4e.com/api/species/2/"
            ], 
            "vehicles": [], 
            "starships": [], 
            "created": "2020-12-10T15:10:51.357000Z", 
            "edited": "2020-12-20T21:17:50.309000Z", 
            "url": "https://swapi.py4e.com/api/people/2/"
        };
        const result = await chai.request('https://rmoj9kusdj.execute-api.us-east-1.amazonaws.com/dev')
            .post('/people')
            .send(newPeople)

        expect(result.statusCode).to.equal(201);
    });

    it('Debe obtener una persona', async () => {
        const result = await chai.request('https://rmoj9kusdj.execute-api.us-east-1.amazonaws.com/dev')
            .get('/people/02082da0-7cb4-11eb-9427-c526122e9c19');

        expect(result.statusCode).to.equal(200);
        expect(result.body).to.be.an('object');
    });

    it('Verifica obtener todas las personas', async () => {
        const result = await chai.request('https://rmoj9kusdj.execute-api.us-east-1.amazonaws.com/dev')
            .get('/people/');

        expect(result.statusCode).to.equal(200);
        expect(result.body).to.be.an('array');
    });
});