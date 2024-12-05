const Producto = require('../models/Producto')



const listProducto = async (req, res) =>{
    try{

        const producto = await Producto.getProducto();
        res.json(producto); 
    }catch(error)
    {
        res.status(500).json( { error: error.message} );
    }
}

const insertProducto = async(req, res) =>
    {
        try{
            const producto = await Producto.insert(req.body);
            //201 para crear
            res.status(201).json(producto)
        }catch(error)
        {
            res.status(500).json( { error: error.message} )
        }
    }

    const updateProducto = async(req, res) =>
        {
            try{
                const producto = await Producto.update(req.body, req.params.id);
                //201 para crear
                res.json(producto)
            }catch(error)
            {
                res.status(500).json( { error: error.message} )
            }
        }

        const deleteProducto = async(req, res) =>
            {
                try{
                    const producto = await Producto.delete(req.params.id);
                    //201 para crear
                    res.json(producto)
                }catch(error)
                {
                    res.status(500).json( { error: error.message} )
                }
            }

module.exports = {
    listProducto,
    insertProducto,
    updateProducto,
    deleteProducto,
};