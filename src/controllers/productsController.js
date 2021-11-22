const productsModel = require('../models/productsModel');

module.exports ={
    async getProducts(req, res){
        try {
            const products = await productsModel.find(req.params.id);
            res.json(products);
        } catch (error) {
            res.json({
                success: false
                ,message: 'No se pudieron obtener los productos'
            });
        }
    },
    async getProduct(req, res){
        try {
            const product = await productsModel.findById(req.params.id);
            res.json(product);
        } catch (error) {
            res.json({
                success: false
                ,message: 'No se pudo obtener el producto'
            });
        }

    },
    async createProduct (req, res){
        const {nombre, precio, stock} = req.body;

        if (!nombre) {
            return res.json({
                success:false
                ,message: 'El nombre no puede venir vacío'
            });
        }

        if (!precio) {
            return res.json({
                success:false
                ,message: 'El precio no puede venir vacío'
            });
        }

        if (!stock) {
            return res.json({
                success:false
                ,message: 'El stock no puede venir vacío'
            });
        }

        try {
            const newProduct = new productsModel({
                nombre
                ,precio
                ,stock
            });

            await newProduct.save();
            res.json({
                succes: true
                ,message: 'Producto creado'
            })
        } catch (error) {
            res.json({
                succes: true
                ,message: 'No se pudo crear el producto'
            })
        }
    },
    async updateProduct(req, res){
       try {
            await productsModel.findByIdAndUpdate({_id: req.params.id}, req.body);
            res.json({
                success: true
                ,message: 'Producto actualizado correctamente'
            })
       } catch (error) {
           res.json({
               success: true
               ,message: 'No se pudo actualizar el producto'
           })
       } 

    },
    async deleteProduct(req, res){
        try {
            await productsModel.findByIdAndDelete(req.params.id);
            res.json({
                success: true
                ,message: 'Producto eliminado'
            })
       } catch (error) {
           res.json({
               success: true
               ,message: 'No se pudo eliminar el producto'
           })
       }

    }
}