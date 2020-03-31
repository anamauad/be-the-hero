const connection = require('../database/connection');

module.exports = {

  async list(request, response) {
    var { page = 1 } = request.query;
    if (page < 1) {
      page = 1;
    }
    const [countResult] = await connection('incident')
      .count();
    const count = countResult['count(*)'];

    if (page < 1) {
      // min
      page = 1;
    } else if (page * 5 > count) {
      // max
      const toAdd = 5 - (count % 5);
      page = (count + toAdd) / 5;
    }

    const ngos = await connection('incident')
      .join('ngo', 'ngo.id', '=', 'incident.ngo_id')
      .limit(5)
      .offset((page - 1) * 5)
      .select(['incident.*',
        'ngo.name',
        'ngo.email',
        'ngo.whatsapp',
        'ngo.state',
        'ngo.city']);

    response.header('X-Total-Count', count);
    return response.json(ngos);
  },

  async create(request, response) {
    const { title, description, value } = request.body;
    const ngo_id = request.headers.authorization;

    const [id] = await connection('incident').insert({
      title,
      description,
      value,
      ngo_id
    });

    return response.json({ id });
  },

  async delete(request, response) {
    const { id } = request.params;
    const ngo_id = request.headers.authorization;

    const incident = await connection('incident')
      .where('id', id)
      .select('ngo_id')
      .first();

    if (!incident || incident.ngo_id !== ngo_id) {
      return response.status(401).json({ error: 'Operation not allowed' });
    }

    await connection('incident').where('id', id).delete();

    return response.status(204).send();
  }
}