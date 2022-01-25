const express = require('express')
const mongoose = require('mongoose')
const argon2 = require('argon2')


const router = express.Router()


const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    password: String,
    standsList: [String],
    admin: {
        type: Boolean,
        default: false
    }
})

//salting and hashing passwords when creating new user
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next()
    }

    try {
        const hash = await argon2.hash(this.password)
        this.password = hash
        next()
    }
    catch (e) {
        console.log(e)
        next(e)
    }
})

//comparing hashed passwords
userSchema.methods.comparePassword = async function(password) {
    try {
      const isMatch = await argon2.verify(this.password, password);
      return isMatch;
    } catch (error) {
      return false;
    }
  };

//delete user's password before being changed to JSON
userSchema.methods.toJSON = function() {
    let userObj = this.toObject()
    delete userObj.password
    return userObj
}

userSchema.methods.toJSON = function() {
    var obj = this.toObject();
    delete obj.password;
    return obj;
}

const User = mongoose.model('User', userSchema)

//middleware 


//checking if user is logged in and a valid user
const validUser = async (req, res, next) => {
    if (!req.session.userID){
        return res.status(403).send({
            message: "not logged in"
        })
    }

    try {
        const user = await User.findOne({
            _id: req.session.userID
        })

        if (!user) {
            return res.status(403).send({
                message: "not logged in"
            })
        }

        req.user = user
    }
    catch(e) {
        return res.status(403).send({
            message: "not logged in"
        })
    }

    next();
}


//CRUD user api

//create new user test
router.post('/test', async (req, res) => {
    console.log(req.body)
})

//create new user
router.post('/', async (req, res) => {

    //checking if all the required data was sent to the server, returns if something is missing
    if (!req.body.firstName || !req.body.lastName || !req.body.username || !req.body.password) {
        return res.status(400).send({
            message: "first name, last name, username and password are required"
        })
    }

    try {
        //checking is there is already an existing user
        const existingUser = await User.findOne({
            username: req.body.username
        })

        if (existingUser) {
            return res.status(403).send({
                message: "username already exists"
            })
        }

        //create mongoose user object and save to database
        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            password: req.body.password
        })
        await user.save()


        //set cookie session ID
        req.session.userID = user._id

        console.log(`registered ${req.body.firstName}`) //change to the logging library when available

        return res.send({
            user: user
        })
    }
    catch(e) {
        console.log(error)
        res.sendStatus(500)
    }
})

//login existing user
router.post('/login', async (req, res) => {

    //username and password required
    if (!req.body.username || !req.body.password) {
        return res.status(400).send({
            message: "username and password are required"
        })
    }

    try {
        //checking if the user exists
        const user = await User.findOne({
            username: req.body.username
        })

        //returns if user doesn't exist
        if (!user) {
            return res.status(400).send({
                message: "incorrect username or password"
            })
        }

        //compares password with the one in the database
        if (!await user.comparePassword(req.body.password))
            return res.status(403).send({
                message: "incorrect username or password"
        })

        console.log(`user: ${user.username} has logged in`) //change to the logging library when available

        req.session.userID = user._id
        return res.send({
            user: user
        })
    }
    catch (e) {
        console.log(e)
        return res.sendStatus(500)
    }
})


//get logged in user
router.get('/', validUser, async (req, res) => {
    try {
        res.send({
            user: req.user
        })
    }
    catch (e) {
        console.log(e)
        return res.sendStatus(500)
    }
})


//get all users
router.get('/all', async (req, res) => {
    try {
        const users = await User.find()
        res.send({
            users: users
        })
    }
    catch (e) {
        console.log(e)
        res.sendStatus(500)
    }
})


//logout
router.delete('/', validUser, async (req, res) => {
    try {
        req.session = null
        res.sendStatus(200)
    }
    catch (e) {
        console.log(e)
        return res.sendStatus(500)
    }
})


//try and refactor later to have a better hierarchy and database functionality


module.exports = {
    routes: router,
    model: URLSearchParams,
    valid: validUser
}