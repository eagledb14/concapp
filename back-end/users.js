const express = require('express')
const mongoose = require('mongoose')
const argon2 = require('argon2')

const fs = require('fs')
const standsFileName = "./stands.json"
let standsList = require(standsFileName)


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

//update stands list
router.post('/stands/:id', async (req, res) => {
    try {
        const user = await User.findOne({
            _id: req.params.id
        })

        let list = req.body.standsList
        list.sort()

        user.updateOne({
            standsList: list
        })

        res.sendStatus(200, {
            user: user
        })
    }
    catch (e) {
            console.log(e)
            res.status(500).body("user not found")
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
        return res.status(500).send({
            message: "Error: invalid User"
        })
    }
})

//get all users
router.get('/all/:id', async (req, res) => {
    try {
        const admin = await User.findOne({
            _id: req.params.id
        })
        console.log(`user: ${admin.username} has requested the registered users list`)

        if (!admin.admin) {
            return res.send(405, {
                message: 'user not authorized to perform action'
            })
        }

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

router.post('/admin/:id', async (req, res) => {
    try {
        const admin = await User.findById(req.params.id)
        const user = await User.findById(req.body.user);
        const adminStatus = !user.admin

        if (!admin || !admin.admin) {
            return res.status(500).send({
                message: "Error: send valid admin account"
            })
        }

        if (!user) {
            return res.sendStatus(500).send({
                message: "Error: user not found"
            })
        }

        if (adminStatus) {
            console.log(`Admin: ${admin.username} has given user ${user.username} admin access`)
        }
        else if (!adminStatus) {
            console.log(`Admin: ${admin.username} has taken user ${user.username}'s admin access`)
        }
        
        await user.updateOne({
            admin: adminStatus
        });

        // await user.save()

        res.sendStatus(200)
    }
    catch(e) {
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

//get stands list
router.get('/stand', async (req, res) => {
    try {
        standsList = require(standsFileName)
        res.send({
            stands: standsList.standsList            
        })
    }
    catch (e)
    {
        console.log(e)
    }
})

//update users stand list
router.post('/stand', async (req, res) => {
    try {
        const users = req.body.userList;

        for (let i = 0; i < users.length; i++) {
            let user = await User.findById(users[i]._id)

            if (user) {
                await user.updateOne({
                    standsList: users[i].standsList
                })
            }

            await user.save();
        }

        res.sendStatus(200);
    }
    catch (e) {
        console.log(e)
        return res.sendStatus(500);
    }
})

//gets a single users stands
router.get('/stand/:id', async (req, res) => {
    try {
        let user = await User.findById(req.params.id);

        res.status(200).send({
            standsList: user.standsList
        })
    }
    catch (e) {
        console.log(e)
        return res.sendStatus(500);
    }
})

//update control stand list
router.post('/stand/control', async (req, res) => {
    try {
        standsList.standsList = req.body.standsList
        standsList.standsList.sort()
        await fs.writeFile(standsFileName, JSON.stringify(standsList), (e) => {
            if (e) {
                console.log(e)
                return
            }
            console.log(`Updating standsList: ${standsList.standsList}`)
        })
        res.sendStatus(200);

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