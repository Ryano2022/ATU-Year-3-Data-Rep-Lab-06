const express = require('express')
const app = express()
const port = 4000; // Port to listen to.

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Allow requests from other URLs.
const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/api/book', (req, res) => {
  console.log(req.body);
  res.send("Data received. ");
})


// Receive data through the body of the HTTP request.
app.post(
  '/name', (req, res) => {
    res.send('Hello ' + req.body.fname + " " + req.body.lname);
  }
)

// Receive data through the URL.
app.get(
  '/name', (req, res) => {
    res.send('Hello ' + req.query.fname + " " + req.query.lname);
  }
)

// Test
app.get(
  '/test', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  }
)

// API to use.
app.get(
  '/api/books', (req, res) => {
    const data = [
      {
        "title": "Learn Git in a Month of Lunches",
        "isbn": "1617292419",
        "pageCount": 0,
        "thumbnailUrl":
          "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
        "status": "MEAP",
        "authors": ["Rick Umali"],
        "categories": []
      },
      {
        "title": "MongoDB in Action, Second Edition",
        "isbn": "1617291609",
        "pageCount": 0,
        "thumbnailUrl":
          "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
        "status": "MEAP",
        "authors": [
          "Kyle Banker",
          "Peter Bakkum",
          "Tim Hawkins",
          "Shaun Verch",
          "Douglas Garrett"
        ],
        "categories": []
      },
      {
        "title": "Getting MEAN with Mongo, Express, Angular, and Node",
        "isbn": "1617292036",
        "pageCount": 0,
        "thumbnailUrl":
          "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
        "status": "MEAP",
        "authors": ["Simon Holmes"],
        "categories": []
      }
    ]
    res.json(
      {
        martin_books: data, "Message": "Hello from server.js!"
      }
    );
  }
)

// The slashes are URLs.
app.get(
  '/', (req, res) => {
    res.send('Hello World!');
  }
)

// Test
app.get(
  '/whatever', (req, res) => {
    res.send('Good Bye!');
  }
)

app.get(
  '/datarep', (req, res) => {
    res.send('Welcome to Data Representation & Querying');
  }
)

// Anything can go where :name is on the address bar on the browser.
app.get(
  '/hello/:name', (req, res) => {
    res.send('HELLO' + req.params.name);
  }
)

app.listen(
  port, () => {
    console.log(`Example app listening on port ${port}`);
  }
)