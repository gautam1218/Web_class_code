const express = require("express");
const app = express();
const fs = require("fs");


const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("home page route");
});

app.post("/register", (req, res) => {
    console.log("IP:", req.ip);
    console.log("BODY:", req.body);

    fs.appendFileSync(
        "data.json",
        JSON.stringify(req.body) + "\n",
        "utf-8"
    );

    res.send("registration completed...");
});

app.listen(port, () => {
    console.log(`server is running at ${port}`);
});