const collections = require('../collections');

module.exports = async function(req, res, next) {
  var data = (req.body.date || '').toString();
  console.log(req.body);
  collections.Data.create({
    date:data,
  }).then(okData => {
    console.log(okData);
    res.status(200).send({ ok: true });
  }).catch(err => {
    res.status(500).send('ERROR WHEN CREATING DATA', err);
  });
};
