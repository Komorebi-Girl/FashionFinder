var totalDifference = 0;

function apiExpressify(app){
	var profiles = require("../data/profiles.js")

	app.get("/api/profiles", function(req, res){
		res.json(profiles);
	})

	app.post("/api/profiles", function(req, res){
	  var newProfile = req.body;
	  var enteries = newProfile.scores.map(Number);
	  console.log(newProfile);


	  for (var i = 0; i < profiles.length; i++) {
	   console.log("profile" + i)
	   diffChecker(enteries, profiles[i].scores);
	  }

	  
	  profiles.push(newProfile);
	  res.json(newProfile);
		})

}

function diffChecker (userScores, storeScores) {
	for (var i = 0; i < storeScores.length; i++) {
		var difference = Math.abs(userScores[i]-storeScores[i]);
		totalDifference = totalDifference + difference;
	}

	console.log("The total difference is: " + totalDifference);
}

module.exports = apiExpressify;


