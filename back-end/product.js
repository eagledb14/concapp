const express = require('express')
const mongoose = require('mongoose')

const router = express.Router()

const productSchema = new mongoose.Schema({
    user: String,
    stand: String,
    productName: [String],
    current: [String],
    requested: [String],
    date: String
})

const Product = mongoose.model('Product', productSchema);


Date.prototype.getDateAsString = function() {
    var mm = (this.getMonth() + 1).toString(); 
    var dd = this.getDate().toString();
  
    return [this.getFullYear(), '/', mm.length===2 ? '' : '0', mm, '/', dd.length===2 ? '' : '0', dd].join('');
}

// creating or updating new product list for the date
router.put('/', async (req, res) => {
    if (!req.body.user) {
        return res.status(400).send({
            message: "Error with user info"
        })
    }
    else if (!req.body.stand) {
        return res.status(400).send({
            message: "Error: product name not included"
        })
    }

    try {
        await updateIfExistsOrCreate(req.body, res);
        res.sendStatus(200)
    }
    catch (e) {
        console.log(e)
    }
})

//update product if exists, else create a new one
async function updateIfExistsOrCreate(body) {

    let products = await Product.findOne({
        stand: body.stand
    })

    if (products) {
        console.log(products)
        await products.updateOne({
            productName: body.products,
            current: body.current,
            requested: body.requested,
        })
        console.log(`user: ${body.user} has updated stand ${body.stand}`)
    }
    else {
        products = await createProduct(body)
    }

    await products.save()
}

//creates a new product
async function createProduct(body) {
    let date = new Date;
    let todayString = date.getDateAsString();

    let products = await new Product({
        user: body.user,
        stand: body.stand,
        productName: body.products,
        current: body.current,
        requested: body.requested,
        date: todayString
    })
    console.log(`user: ${body.user} has added an entry for stand ${body.stand} on ${todayString}`)
    return products
}

// getting stand products list, if they exist
router.post('/', async (req, res) => {
    if (!req.body.user) {
        return res.status(400).send({
            message: "Error with user info"
        })
    }
    else if (!req.body.stand) {
        return res.status(400).send({
            message: "Error: product name not included"
        })
    }

    console.log(`user: ${req.body.user} has requested stand ${req.body.stand}`)

    let date = new Date;
    let todayString = date.getDateAsString();

    try {
        // const products = await Product.findById(req.body.id)
        const products = await Product.findOne({
            stand: req.body.stand
        })

        if (products) {
            return res.send({
                productName: products.productName,
                current: products.current,
                requested: products.requested,
            })
        }
        else {
            res.sendStatus(201)
        }        
    }
    catch (e) {
        console.log(e)
    }
})

//get all stand information
router.get('/:admin', async (req, res) => {
    console.log("Stands information requested")
    if (req.params.admin == false) {
        res.send("Error, user not admin status")
    }

    const products = await Product.find()

    products.sort((a, b) => a.stand - b.stand)

    res.send({
        products: products
    })

    // console.log(products)
})

module.exports = {
    routes: router,
    mode: URLSearchParams
}