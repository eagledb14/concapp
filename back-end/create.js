//send a file, then returns, then adds the new file stuff to the stands.json file
const express = require('express')
const multer = require('multer')
let xlsx = require("xlsx")
const fs = require('fs')

const standsFileName = "./stands.json"
let standsList = require(standsFileName)

// let sheet = xlsx.readFile("MP Non-Countable Inventory Request Sheet.xlsx")


const router = express.Router()

const upload = multer({
    dest: './files/',
    limits: {
        fileSize: 10000000
    }
})


router.post('/file', upload.single('standSheet'), async (req, res) => {
    console.log('new file added')
    res.status(200).send({
        path: './files/' + req.file.filename
    })
})

router.post('/', (req, res) => {
    console.log(req.path)
    res.status(200)
})

module.exports = {
    routes: router,
    mode: URLSearchParams
}