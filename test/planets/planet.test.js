const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const expect = chai.expect;

describe('Test para Lambda: PLANETAS', function () {
    this.timeout(10000);

    it('Verifica obtener un PLANETA desde SWAPI con AXIOS', async () => {

        const result = await chai.request('https://rmoj9kusdj.execute-api.us-east-1.amazonaws.com/dev')
            .get('/planet/2');

        expect(result.statusCode).to.equal(200);
        expect(result.body).to.be.an('object');
    });

    it('Debe fallar al obtener PLANETAS desde SWAPI con AXIOS', async () => {

        const result = await chai.request('https://rmoj9kusdj.execute-api.us-east-1.amazonaws.com/dev')
            .get('/planet/');

        expect(result.statusCode).to.equal(403);
        expect(result.body).to.be.an('object');
    });
});