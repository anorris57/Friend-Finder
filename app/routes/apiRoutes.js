var friendData = require('../data/friends.js');

module.exports = function (app) {

  app.get('/api/friends', function (req, res) {
    res.json(friendData);
  })

  app.post('/api/friends', function (req, res) {
    //console.log(req.body);
    var newfriend = req.body;
    friendData.push(newfriend);
    res.json(newfriend);
  });
}