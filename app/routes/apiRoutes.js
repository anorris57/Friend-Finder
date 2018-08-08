var friendData = require('../data/friends.js');

module.exports = function (app) {

  app.get('/api/friends', function (req, res) {
    res.json(friendData);
  })

  app.post('/api/friends', function (req, res) {
    //console.log(req.body);
    var newfriend = req.body;
    friendData.push(newfriend);

    var newFriendScores = newfriend.scores;
    console.log(newFriendScores);
    var total = 0;
    for (var i = 0; i < newFriendScores.length; i++){
      total += parseInt(newFriendScores[i]);
      
    } 
    console.log(total);
    
    res.json(newfriend);
  });
}