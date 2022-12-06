const express = require("express");
const mongoose = require("mongoose");
const hostname = "0.0.0.0";

const dbUrl = "mongodb+srv://amanpanchalmongo:amanpanchalmongo@cluster0.a7hehwz.mongodb.net/?retryWrites=true&w=majority";
const ConnectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(dbUrl, ConnectionParams).then(() => {
    console.log("Connected to db successfully");
}).catch((e) => {
    console.log("Error is : ", e);
})

const app = express();
const port = 300;
const path = require("path");
const bodyParser = require("body-parser");
const url = __dirname + path.join("/public/index.html");
const data = require("./models/db.js");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.get("/", (req, res) => {
    res.sendFile(url);

})
app.post("/", (req, res) => {
    var x = req.body.name;
    var y = req.body.email;
    var z = req.body.text;
    var channelSchema = new data();
    channelSchema.name = x;
    channelSchema.email = y;
    channelSchema.text = z;
    channelSchema.save((err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Data is saved successfully");
        }
    })

    res.send("Done")
})
app.listen(port,hostname, () => {
    console.log(`App is running succsessfully at port ${port}`)
})