const Customer = require('../models/Customer')



const listCustomer = async (req, res) =>{
    try{

        //llamado a la funcion de select
        const customer = await Customer.getCustomer();
        res.json(customer);  //psar a json y retornar la respuesta
    }catch(error)
    {
        res.status(500).json( { error: error.message} );
    }
}

const insertCustomer = async(req, res) =>
    {
        try{
            const customer = await Customer.insert(req.body);
            //201 para crear
            res.status(201).json(customer)
        }catch(error)
        {
            res.status(500).json( { error: error.message} )
        }
    }

    const updateCustomer = async(req, res) =>
        {
            try{
                const customer = await Customer.update(req.body, req.params.id);
                //201 para crear
                res.json(customer)
            }catch(error)
            {
                res.status(500).json( { error: error.message} )
            }
        }

        const deleteCustomer = async(req, res) =>
            {
                try{
                    const customer = await Customer.delete(req.params.id);
                    //201 para crear
                    res.json(customer)
                }catch(error)
                {
                    res.status(500).json( { error: error.message} )
                }
            }

module.exports = {
    listCustomer,
    insertCustomer,
    updateCustomer,
    deleteCustomer,
};