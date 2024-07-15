const { format } = require('mysql2');
const {Model} = require ('objection'); // llamar al modelo de librerias de objetos
class Customer extends Model {//creo herencia del modelo
    static get tableName(){//especifica el nombre de la tabal
        return 'Customer';
    }
    static get jsonSchema(){//especifica el nombre de la estructura
        return{
            type: 'object',//object para un dato array para una lista 
            required:['name','email'],

            properties:{//estructura de los campos
                id: {type: 'integer'},
                name: {type: 'string',minLength:1},
                email: {type: 'string', format:'email'},
                date: {type: 'string', format: 'date-time'},
                age: { type: 'integer'}
            }
        };
    }
    static async getCustomers(){// metodo para listar clientes
        return await Customer.query();//select * from customer
    }
    static async inser(data){// metodo para insertar clientes
        return await Customer.query().insert(data);// insert into values ...
    }
    static async update(data, id){//metodo para editar cliente
        return await Customer.query().patch(id, data);//update set data where id=0
    }
    static async delete(id){
        return await Customer.query().deleteById(id); //delete from customer where id =0
    }
}
module.exports= Customer;