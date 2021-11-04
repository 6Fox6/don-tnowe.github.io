const fs = require("fs");
const express = require("express");
const app = express();

app.get("/", function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    let task = request.query.task;

    if (task == undefined) {
        let contents = fs.readFileSync("./index.html");
        response.end(contents);
        return;
    }
    if (task == "1") {
        if (request.query.group == undefined) {
            let contents = fs.readFileSync("./students.html").toString();
            response.end(contents.replace("%groups%", returnArr = fs.readdirSync("./students").reduce(
                (prev, cur) => {
                    if (prev != "")
                        prev += ", ";

                    return prev + cur.substring(0, cur.length - 4);
                },
                "")
            ));
            return;
        }
        let group = request.query.group;
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
