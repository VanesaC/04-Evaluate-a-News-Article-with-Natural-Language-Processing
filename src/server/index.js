let projectUrl = {};
var path = require('path');
const express = require('express');
// const mockAPIResponse = require('./mockAPI.js');

const dotenv = require('dotenv');
dotenv.config();
const FormData = require('form-data');

const fetch = require('node-fetch');

const app = express();
app.use(express.static('dist'));

// Cors for cross origin allowance
const cors = require('cors');
const { sendFile } = require('express/lib/response');
app.use(cors());
app.use(express.json());
console.log(__dirname);

app.post('/datax', function (req, res) {
  // console.log(req.body);

  projectUrl = req.body.link;

  // console.log('Asa arata ce primeste: ' + projectUrl);
});
app.get('/all', sendData);

function sendData(req, res) {
  //---------------------------GET request to the MeaningCloud API
  const APIKEY = process.env.API_KEY;
  const formdata = new FormData();
  formdata.append('key', APIKEY);
  formdata.append('url', projectUrl);
  formdata.append('lang', 'en'); // 2-letter code, like en es fr ...

  const requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow',
  };

  const response = fetch(
    'https://api.meaningcloud.com/sentiment-2.1',
    requestOptions
  )
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);

      res.send(data);
    })

    .catch((error) => console.log('error', error));
}

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log('Example app listening on port 8081!');
});
