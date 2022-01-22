const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')

const port = 3000

const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}));

// connect to the mongodb database
mongoose.connect('mongodb://localhost:27017/conc', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

app.use(cookieParser())
app.use(cookieSession({
    name: 'sessions',
    keys: [
        'secretValue'
    ],
    cookie: {
        maxAge: 24 * 60 * 60 * 1000 //24 hours
    }
}))

//testing is the client can connect to the server
app.get("/api/", (req, res) => {
    console.log("received")
    res.send("received")
});


const users = require("./users.js")
app.use("/api/users", users.routes)


app.listen(port, () => console.log(`Listening on port ${port}`))