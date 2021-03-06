const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
    const { id } = request.body;

    const ngo = await connection('ngo')
      .where('id', id)
      .select('name')
      .first();

    if (!ngo) {
      console.error(`NGO not found: ${id}`)
      return response.status(400).json({ error: 'NGO not found', id })
    }
    return response.json(ngo);
  }
}