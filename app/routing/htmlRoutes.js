var path = require("path");

function htmlExpressify(app){
	app.get("/survey", function(req, res){
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	})

	app.get("*", function(req, res){
		res.sendFile(path.join(__dirname, "../public/home.html"));
	})

}

module.exports = htmlExpressify;