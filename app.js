const express = require("express");
const bodyParser = require("body-parser");
const { append } = require("express/lib/response");
const https = require('https');
const request = require('request');
const cors = require('cors');
const path = require('path');
require("dotenv").config();

const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("static"));
app.use(express.json());

app.use(cors());

//static files
app.use(express.static(path.join(__dirname, '../client/build/static')));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

app.get('/', function (req, res) {
    res.redirect("http://localhost:3001");
})

app.post("/api/form", function (req, res) {
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

    const url = process.env.POSTURL;
    const options = {
        method: 'POST',
        auth: process.env.AUTH_KEY
    }
    try {
        const request = https.request(url, options, function (response) {
            console.log(response.statusCode);


            if (response.statusCode == 200) {
                console.log("Success");
                res.json({ redirectUrl: 'http://localhost:3001/success' });
            } else {
                console.log("Fail");
                res.json({ redirectUrl: 'http://localhost:3001/failure' });
            }

            response.on('data', function (data) {
                console.log(JSON.parse(data));
            });

        }).on("error", (err) => {
            console.log(err);
            res.json({ redirectUrl: 'http://localhost:3001/failure' });
        })
        request.write(jsonData);
        request.end();

    } catch (error) {
        console.log(error);
        res.json({ redirectUrl: 'http://localhost:3001/failure' });
    }


})

app.post("/failure", function (req, res) {
    res.redirect('/');
})

app.listen(port, function () {
    console.log(`Server has started on port:${port}`);
})