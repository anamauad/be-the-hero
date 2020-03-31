const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
  async create(request, response) {
    // TODO website, zipcode, phone
    const { name, email, whatsapp, state, city } = request.body;

    // geracao do id
    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ngo').insert({
      id,
      name,
      email,
      whatsapp,
      state,
      city
    });

    return response.json({ id });
  },

  async list(request, response) {
    // params? request.query
    // TODO use params as filter: by state, by city, by zipcode, by name

    const ngos = await connection('ngo').select('*');
    return response.json(ngos);
  }
}