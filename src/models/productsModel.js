const {Schema, model} = require('mongoose');

const ProductsSchema = new Schema({
    nombre  : {
        type: String
        ,required: true
        ,uppercase: true
    },
    precio: {
        type: Number
        ,required: true
    },
    stock:{
        type: Number
        ,required: true
    }
}, {
        timestamp: false
});

module.exports = model('Product', ProductsSchema);