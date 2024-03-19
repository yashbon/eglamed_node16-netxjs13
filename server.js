var express = require("express"),
    app = express(),
    port = process.env.PORT || 4000;

app.use(express.static("out"));

var routes = require("./api/routes");
routes(app);

if (!module.parent) {
    app.listen(port);
}

module.exports = app;

console.log("Server running on port " + port);
