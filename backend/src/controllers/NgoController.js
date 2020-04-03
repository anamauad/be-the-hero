const connection = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {
  async create(request, response) {
    // TODO website, zipcode, phone
    const { name, email, whatsapp, state, city } = request.body;

    // geracao do id
    const id = generateUniqueId();

    await connection('ngo').insert({
      id,
      name,
      email,
      whatsapp,
      state,
      city
    });
    console.log(`created NGOs with id ${id}`);

    return response.json({ id });
  },

  async list(request, response) {
    // params? request.query
    // TODO use params as filter: by state, by city, by zipcode, by name

    const ngos = await connection('ngo').select('*');
    console.log(`listing NGOs`);
    return response.json(ngos);
  }
}