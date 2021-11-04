const fs = require("fs");
const express = require("express");
const app = express();

app.get("/", function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    let params = request.url.substring(2).split("&");

    if (params[0] == "task=1") {
        let group = params[1].substring("group=".length);
        if (!fs.existsSync("./students/" + group + ".txt")) {
            response.end("Групи " + group + " не існує!");
            return;
        }
        let contents = fs.readFileSync("./students/" + group + ".txt");
        response.write("Группа " + group + "<br/>")
        response.end(contents.toString().replace(/\n/g, "<br/>"));
    }
    else {
        let contents = fs.readFileSync("./index.html");
        response.end(contents);
    }
});
app.listen(3000);
