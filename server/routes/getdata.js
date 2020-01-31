const collections = require('../collections');

module.exports = async function(req, res, next) {
  try {
    const data = await collections.Data.find();
    res.status(200).send({ data });
  } catch (e) {
    res.status(500).send('ERROR WHEN FETCHING DATA', e);
  }
};
