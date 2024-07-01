const { format } = require('mysql2');
const { Model, mixin } = require('objection'); //llamar a Model de la lib objection

class Customer extends Model {//herencia de modelo
    static get tableName(){ //Especifica el nombre de la tabla
        return 'customer';
    }

    static get jsonSchema(){ //Especifica la estructura de la tabla
        return{
            type: 'object', //object para un dato, array para una lista
            required: ['name','email'],//campos requeridos
            properties: {
                id: { type: 'integer'},
                name: { type: 'string', minLength: 1},
                estado: { type: 'boolean'},
                email: { type: 'string', format:'email'},
                date: { type: 'string', format: 'date-time'},
                age: { type: 'integer'},
                lastName: { type: 'string'}
            }
        };
    }
    static async getCustomers(){ //Metodo para listar clientes
        return await Customer.query(); //Select * from customer
    }

    static async insert(data){// insrertar clientes
        return await Customer.query().insert(data);//insert into customer values(...)
    }

    static async update(data, id){//metodo para editar
        return await Customer.query().patch(id,data);// update customer set data where id=0
    }
    
    static async delete(id){
        return await Customer.query().deleteById(id); //delete from Customer wheere id=0
    }
}

module.exports = Customer;