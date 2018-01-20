

function apiExpressify(app) {
	var profiles = require("../data/profiles.js");


	app.get("/api/profiles", function(req, res) {
		res.json(profiles);
	});

	app.post("/api/profiles", function(req, res) {
		var newProfile = req.body;
		var enteries = newProfile.scores.map(Number);
		console.log(newProfile);
		var smallest = 10000000;

		for (var i = 0; i < profiles.length; i++) {
			profiles[i].diff = diffChecker(enteries, profiles[i].scores);
			console.log("Profile"+i+"'s total difference is: " + profiles[i].diff);


			if (profiles[i].diff < smallest) {
				smallest = profiles[i].diff;
				console.log(smallest)
				var yourMatch = profiles[i];
			}

			console.log("Your matching store is: "+ yourMatch.name)

		}


		profiles.push(newProfile);
		res.json(newProfile);
	});
}

function diffChecker(userScores, storeScores) {
	var totalDifference = 0; 
	for (var i = 0; i < storeScores.length; i++) {
		var difference = Math.abs(userScores[i] - storeScores[i]);
		totalDifference = totalDifference + difference;
	}

	return totalDifference;
}

module.exports = apiExpressify;
