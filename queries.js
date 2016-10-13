var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var conn = 'postgres://<login>:<password>@localhost:<port>/<database>';
var db = pgp(conn);

// add query functions
function getAllClients(req, res, next) {
  db.any('select nome, bairro, cidade, estado from cliente')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL Clients'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getSingleClient(req, res, next) {
  var pupID = parseInt(req.params.id);
  db.one('select * from cliente where id = $1', pupID)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE cliente'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

module.exports = {
  getAllClients: getAllClients,
  getSingleClient: getSingleClient,
  // createClient: createClient,
  // updateClient: updateClient,
  // removeClient: removeClient
};
