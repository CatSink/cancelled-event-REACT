const cors = require("cors");
const express = require("express");
const stripe = require("stripe")("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");
const uuid = require("uuid");
const dotenv = require("dotenv");
const app = express();

//middleware
app.use(express.json());
app.use(cors());


//routes
app.get("/", (req, res) => {
    res.send("it works!")
})

app.post("/payment", (req, res) => {
    
    
    const {product, token} = req.body;
    console.log("Product", product);
    console.log("Price", product.price);
    const idempotencyKey = uuid()

    return stripe.customers.create({
        email:token.email,
        source: token.id
    }).then(customer => {
        stripe.charges.create({
            amount: product.price * 100,
            currency: 'USD',
            customer: customer.id,
            recipient_email: token.email,
            description: `purchase of ${product.name}`
        }, {idempotencyKey})
    })
    .then(result => res.status(200).json(result))
    .catch(err => console.log(err))
})

//listen

app.listen(8282, () => console.log("Listening at port 8282"))