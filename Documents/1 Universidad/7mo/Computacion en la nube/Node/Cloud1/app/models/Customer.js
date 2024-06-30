const { Model } = require('objection'); //Llamar a Model de la libreria 

class Customer extends Model { //Creo herencia del modelo
    static get tableName(){
        return 'customer';
    }
    static get jsonSchema(){//Especifica la estructura de la tabla
        return{
            type: 'object',//Object para un valor, array para una lista
            require: ['name', 'email'],//Campos requeridos

            propieties: {//estructura de los campos
                id:{type: 'integer'},
                name:{type: 'string'},
                email:{type: 'string', format: 'email'},
                age: {type: 'integer'}
            }
        };
    }

    static async getAll(){//Metodo para listar clientes
        return await Customer.query();//Select*from Customer
    }

    static async insert(data){//Metodo para insertar clientes
        return await Customer.query().insert(data);
    }

    static async update(data, id){//Metodo para editar cliente
        return await Customer.query().patch(id, data);//Update set data where id=0
    }
    static async delete(id){//Metodo para eliminar cliente
        return await Customer.query().deleteById(id);
    }
}
module.exports = Customer;