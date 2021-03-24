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


app.get("/tools", (req, res) => {
    res.sendFile(publicDir + "/public/tools.html");
});

// app.get();

// app.post();

// app.put();

// app.patch();

// app.delete();

app.listen(port, () => {
    console.log("Server is running on", port);
});