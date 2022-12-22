const express = require("express");
const bodyParser = require("body-parser");
const { append } = require("express/lib/response");
const https = require('https');
const request = require('request');
require("dotenv").config();
const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("static"));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/static/signup.html");
})

app.post("/", function (req, res) {
    console.log(req.body);
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    const new_members = {
        members: [{
            "email_address": email,
            "status": "subscribed",
            "merge_fields": {
                "FNAME": firstName,
                "LNAME": lastName
            }
        }]
    }

    const jsonData = JSON.stringify(new_members);

    console.log("\nthis is sick<___>", jsonData, "\n");

    console.log(process.env.POSTURL + "\n" + process.env.AUTH_KEY);

    const url = process.env.POSTURL;
    const options = {
        method: 'POST',
        auth: process.env.AUTH_KEY
    }

    const request = https.request(url, options, function (response) {
        console.log(response.statusCode);


        if (response.statusCode == 200) {
            res.sendFile(__dirname + '/static/success.html')
        } else {
            res.sendFile(__dirname + "/static/Failure.html")
        }

        response.on('data', function (data) {
            console.log(JSON.parse(data));
        });
    })
    // console.log("what::", request);
    console.log("what the fuck::", request.write(jsonData));
    // request.write(jsonData);
    request.end();
})

app.post("/failure", function (req, res) {
    res.redirect('/');
})

app.listen(port, function () {
    console.log(`Server has started on port:${port}`);
})