const express = require('express')
const mongoose = require('mongoose')
const argon2 = require('argon2')
const { application } = require('express')

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
const User = mongoose.model('User', userSchema)

//salting and hashing passwords when creating new user
userSchema.pre('save', async (next) => {
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
userSchema.methods.comparePassword = async (password) => {
    try {
        const isSame = await argon2.verify(this.password, password)
        return isSame
    }
    catch(e) {
        return false
    }
}

//delete user's password before being changed to JSON
userSchema.methods.toJSON = () => {
    let userObj = this.toObject()
    delete userObj.password
    return userObj
}

userSchema.methods.toJSON = function() {
    var obj = this.toObject();
    delete obj.password;
    console.log('deleting password')
    return obj;
}

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

        console.log(`registered ${req.body.firstName}`)
        return res.send({
            user: user
        })
    }
    catch(e) {
        console.log(error)
        res.sendStatus(500)
    }
})


//try and refactor later to have a better hierarchy and database functionality


module.exports = {
    routes: router,
    model: URLSearchParams,
    valid: validUser
}