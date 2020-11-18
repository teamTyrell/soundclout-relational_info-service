const db = require('./../database/models/index.js');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/../public'));

app.get('/api/songs', function(req, res) {
  db.Songs.findAll({
    attributes: {
      exclude: ['createdAt', 'updatedAt']
    }
  })
  .then(data => {
    res.status(200);
    res.json(data);
  })
  .catch(error => {
    res.status(404);
    res.send(error);
  });
});


app.get('/api/users', function(req, res) {
  db.Users.findAll({
    attributes: {
      exclude: ['createdAt', 'updatedAt']
    }
  })
  .then(data => {
    res.status(200);
    res.send(data);
  })
  .catch(error => {
    res.status(404);
    res.send(error);
  });
});


let port = 3003;
app.listen(port, function() {
  console.log(`listening on port${port}`);
});

module.exports = {app};