const { format } = require('mysql');
const { Model } = require('objection');  //Llamar a Model de la libreria objetion


class Customer extends Model {  //creo herencia model
    static get tableName() { //especifica el nombre de la tabla
        return 'customer';
    }

    static get jsonSchema() { //Especifica la estructura de la tabla
        return{
            type: 'object', //object para un dato, array para una lista
            required: ['name', 'email'], //campos requeridos
            
            properties: {// estructura de los campos
                id: { type: 'integer' },
                name: { type: 'string', minLength: 1 },
                email: {type: 'string', format: 'email'},
                date: {type: 'string', format: 'date-time'},
                age: { type: 'integer'}

            }
        };

    }

    static async getCustomers(){ //metodo para listar clientes
        return await Customer.query(); // este comando es como si se realizara un----->  Select * from customer
    }

    static async insert(data){ //metodo para insertar clientes
        return await Customer.query() // todos comienzan con este comando 
        .insert(data);// insert into customer values ...
    }

    static async update(data, id){ //metodo para editar cliente
        return await Customer.query().patch(id, data); //update set data where id = 0
    }

    static async delete(data, id){ //metodo para eliminar cliente
        return await Customer.query().deleteById(id); //delete from customer where id = 0 
    }

}


module.exports = Customer;