const express = require("express");
const app = express();

const port = process.env.PORT || 8080;

const publicDir = __dirname;

app.use(express.static('public'));


app.get("/", (req, res) => {
    res.sendFile(publicDir + "/public/index.html");
});

app.get("/get_started", (req, res) => {
    res.sendFile(publicDir + "/public/get_started.html");
});

app.get("/crud", (req, res) => {
    res.sendFile(publicDir + "/public/crud.html");
});

app.get("/serving_files", (req, res) => {
    res.sendFile(publicDir + "/public/serving_files.html");
});


app.get("/nodemon", (req, res) => {
    res.sendFile(publicDir + "/public/nodemon.html");
});

app.get("/postman", (req, res) => {
    res.sendFile(publicDir + "/public/postman.html");
});

app.get("/jquery", (req, res) => {
    res.sendFile(publicDir + "/public/jquery.html");
});

app.get("/javascript", (req, res) => {
    res.sendFile(publicDir + "/public/javascript.html");
});


app.listen(port, () => {
    console.log("Server is running on", port);
});