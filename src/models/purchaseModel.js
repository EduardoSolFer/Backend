const{Schema, model, SchemaTypes} = require('mongoose');

const CompraSchema = newSchema({
    producto:{
        type: SchemaTypes.ObjectId
        ,ref: 'Product'
        ,aoutopopulate: true
    },
    cantidad:{
        type: Number
        ,required: true
    },
    monto:{
        type: Number
        ,required: true
    },
    fechadeCompra: {
        type: Number
        ,required: true
    } 
},
{
    timestamps: false
});

CompraSchema.plugin(require('mongoose=autopopulate'));
module.exports = model('Compra', CompraSchema);