const express = require('express')
const mongoose = require('mongoose')

const router = express.Router()


const productSchema = new mongoose.Schema({
    user: String,
    stand: String,
    productName: [String],
    before: [String],
    in: [String],
    out: [String],
    final: [String],
    date: String
})

const Product = mongoose.model('Product', productSchema);


Date.prototype.getDateAsString = function() {
    var mm = (this.getMonth() + 1).toString(); 
    var dd = this.getDate().toString();
  
    return [this.getFullYear(), '/', mm.length===2 ? '' : '0', mm, '/', dd.length===2 ? '' : '0', dd].join('');
};

//create new product

async function createProductEntries(body) {

    let date = new Date;
    let todayString = date.getDateAsString();

    let products = await Product.findById(body._id);

    if (products) {
        await products.updateOne({
            productName: body.products,
            before: body.before,
            in: body.in,
            out: body.out,
            final: body.final,
        })
        console.log(`user: ${body.user} has updated stand ${body.stand}`)
    }
    else {
        products = await new Product({
            user: body.user,
            stand: body.stand,
            productName: body.products,
            before: body.before,
            in: body.in,
            out: body.out,
            final: body.final,
            date: todayString
        })
        console.log(`user: ${body.user} has added an entry for stand ${body.stand} on ${todayString}`)
    }

    await products.save();
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
        await createProductEntries(req.body, res);
        res.sendStatus(200)
    }
    catch (e) {
        console.log(e)
    }
})

// getting stand products list, if the exist
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
        const products = await Product.findOne({
            user: req.body.user,
            stand: req.body.stand,
            date: todayString
        })

        if (products) {
            return res.send({
                productName: products.productName,
                before: products.before,
                in: products.in,
                out: products.out,
                final: products.final,
            })
        }
        else {
            res.sendStatus(201);
        }        
    }
    catch (e) {
        console.log(e)
    }
})

module.exports = {
    routes: router,
    mode: URLSearchParams
}