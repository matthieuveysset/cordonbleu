const collections = require('../collections');

module.exports = async function(req, res, next) {
  var name = (req.body.name || '');
  var gps = (req.body.gps || '');
  var description = (req.body.description || '');

  console.log(req.body);
  collections.Hebergement.create({
    name:name,
    gps:gps,
    description:description,
  }).then(okHebergement => {
    console.log(okHebergement);
    res.status(200).send({ ok: true });
  }).catch(err => {
    res.status(500).send('ERROR WHEN CREATING DATA', err);
  });
};
