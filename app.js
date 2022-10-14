const express = require("express");
const { STATUS_CODES } = require("http");
const https = require("https");
const app = express();

app.get('/', function (req, res) {

    const url = "https://api.nasa.gov/planetary/apod?api_key=B3BsKuJsJuCfYOD6NZRvtmFP6eQtqbflkkjyfRc4"
    https.get(url, function (response) {

        console.log(response.statusCode);

        response.on('data', function (data) {

            const j = JSON.parse(data);
            const object = {
                name: "varun",
                favFood: "chicken"
            }
            stng = JSON.stringify(object);
            const title = data.title;

            console.log(j);
            console.log(stng);
            console.log(title);

            res.send("<h1>this is how we send the data to the client server</h1>" + stng);
        })
    })
})






app.listen(3000, function () {
    console.log("server running at port 3000");
})
