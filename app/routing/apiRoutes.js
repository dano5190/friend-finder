
var tableData = require('../data/friends.js');


module.exports = function(app){
    app.get("/api/friends", function(req, res){

        res.json(tableData);
    });

    app.post("/api/friends", function(req, res) {
 
        var newuser = req.body;
      
        console.log(newuser);

        var totalDifference = 0;
        var closest = 40;
        var bestMatch;
        
        for(var i = 0; i < tableData.length; i++){
            for(var j = 0; j < tableData[i].scores.length; j++){
                totalDifference += Math.abs(parseInt(newuser.scores[j]) - parseInt(tableData[i].scores[j]));
            };
            if(totalDifference <= closest){
                bestMatch = tableData[i];
                closest = totalDifference;
            };
            totalDifference = 0;
        };


      
        tableData.push(newuser);
      res.send(bestMatch);
      });
};

