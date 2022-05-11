//send a file, then returns, then adds the new file stuff to the stands.json file
const express = require('express')
const multer = require('multer')
let xlsx = require("xlsx")
const fs = require('fs')

const standsFileName = "./stands.json"

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

router.post('/', async (req, res) => {
    await create(req.body.path)
    res.status(200)
})

async function create(path) {
    let sheet = xlsx.readFile(path)

    let list = []
    for (j of sheet.SheetNames) {

        const data = xlsx.utils.sheet_to_json(sheet.Sheets[j], {
            header: 1,
            blankrows: false
            })

            
        const stand = {
            name: j,
            available: true,
            items: [],
            units: []
        }
        for (let i = 2; i < data.length; i++) {
            if (data[i][1] !== 'Unit' && data[i][1] !== null) {
                stand.items.push(data[i][0])
                stand.units.push(data[i][1])
            }
        }
        list.push(stand)
    }

    try {
        fs.unlinkSync(path)
    }
    catch(e) {
        console.log("Error: file not deleted")
    }

    await writeToFile(list)
}

async function writeToFile(list) {
    let standsList = require(standsFileName)

    for (item of list) {
        if (!standsList.indexOf(item)) {
            standsList.add(item)
            console.log("added")
        }
    }

    await fs.writeFile(standsFileName, JSON.stringify(list, null, 4), (e) => {
        if (e) {
            console.log(e)
            return
        }
        console.log(`StandsList updated`)
    })
}

module.exports = {
    routes: router,
    mode: URLSearchParams
}