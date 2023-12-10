const express = require('express');
const cors = require('cors')

const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
  });

app.get('/search', (req, res) => {
const { getJson } = require("serpapi");

const { query, location, google_domain } = req.query;

getJson({
    q: query,
    location: location,
    hl: 'en',
    gl: 'us',
    google_domain: google_domain,
    api_key: "1aebc1865d99c9118f7a07dc6844c5913b025df9606228075561800aaecab491"
}, (json) => {
    res.send(json);
});
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });