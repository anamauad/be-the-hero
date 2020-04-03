const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

app.listen(4444);
console.log('Running on http://localhost:4444');

describe('NGO', () => {

  // executar as migracoes para criar as tabelas
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });


  it('should be able to create a new NGO', async () => {
    const response = await request(app)
      .post('/ngos')
      .send({
        name: "Pequeno Cotolengo",
        email: "contato@pequenocotolengo.org.br",
        phone: "4133141900",
        whatsapp: "41985163362",
        state: "PR",
        city: "Curitiba",
        website: "https://www.pequenocotolengo.org.br/",
        zipcode: 81220210
      });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});