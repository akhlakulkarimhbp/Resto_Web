const mongoose = require('mongoose')

const prices = new mongoose.Schema({
    small: Number,
    medium: Number,
    large: Number,
})

const Product = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    varients:{
        type: Array,
        default: [],
    },
    prices:[prices],
    category:{
        type: String,
        required: true
    },
    image:{
        type:String,
        require: true
    }
   
});
const ProductModel = mongoose.model('Products', Product);
module.exports = ProductModel