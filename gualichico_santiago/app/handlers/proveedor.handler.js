const Proveedor = require('../models/Proveedor')



const listProveedor = async (req, res) =>{
    try{

        const proveedor = await Proveedor.getProveedor();
        res.json(proveedor); 
    }catch(error)
    {
        res.status(500).json( { error: error.message} );
    }
}

const insertProveedor = async(req, res) =>
    {
        try{
            const proveedor = await Proveedor.insert(req.body);
            //201 para crear
            res.status(201).json(proveedor)
        }catch(error)
        {
            res.status(500).json( { error: error.message} )
        }
    }

    const updateProveedor = async(req, res) =>
        {
            try{
                const proveedor = await Proveedor.update(req.body, req.params.id);
                //201 para crear
                res.json(proveedor)
            }catch(error)
            {
                res.status(500).json( { error: error.message} )
            }
        }

        const deleteProveedor = async(req, res) =>
            {
                try{
                    const proveedor = await Proveedor.delete(req.params.id);
                    //201 para crear
                    res.json(proveedor)
                }catch(error)
                {
                    res.status(500).json( { error: error.message} )
                }
            }

module.exports = {
    listProveedor,
    insertProveedor,
    updateProveedor,
    deleteProveedor,
};