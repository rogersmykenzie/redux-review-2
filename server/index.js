const express = require('express');


const app = express();

const products = [
    {
        "name": "Shoes",
        "size": 10,
        "id": 1
    },
    {
        "name": "Shirt",
        "size": "L",
        "id": 2
    },
    {
        "name": "Pants",
        "size": 32,
        "id": 3
    },
    {
        "name": "hat",
        "size": "any",
        "id": 4
    }
]

app.get('/api/products', (req, res) => {
    res.status(200).json(products);
})
app.get('/api/product/:id', (req, res) => {
    let index = products.findIndex(val => val.id == req.params.id)
    res.status(200).json(products[index]);
})

app.listen(5050, () => console.log('Listening on Port 5050'));