const { format } = require('mysql2');
const { Model } = require('objection'); // llamar el model de la libreria objection

class Customer extends Model { // crear la hgerencia de Model
    static get tableName(){ // especifica el nombre de la Tabla
        return'customer';
    }
    static get jsonSchema(){
        return{
            type: 'object', // especifica la estructura de la tabla
            required: ['name','email'],
            
            properties: { // estructura de los campos
                id: {type: 'integer'},
                name: {type: 'string', minLength: 1},
                email: {type: 'string', format: 'email'},
                date: {type: 'string', format: 'date-time'},
                edad: {type: 'integer'}
            }

        };
    }

    static async getCustomers(){// metodos para listar clientes
        return await Customer.query(); //select * from customer
    }

    static async insert(data){ // metodo para insertar clientes
        return await Customer.query().insert(data); // insert into customer values ...
    }
   
    static async update(data,id){ // metodo para editar cliente
        return await Customer.query().patch(id, data); //update set data where id = 0
    }

    static async delete(id){ // metodo para eliminar cliente
        return await Customer.query().deleteById(id); // delete from customer where id = 0
        
    }
}

module.exports = Customer;