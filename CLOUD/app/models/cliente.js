const { format } = require('mysql2');
const {Model} = require('objection');//Llamar a Model de la lib objection

class Cliente extends Model{//Crear herencia de Model
    static get tableName(){//Especificar el nombre de la tabla
        return 'cliente';
    }

    static get jsonSchema(){//Especificar la estructura de la tabla
        return{
            type:'object', //object para un dato, array para una lista
            required: ['nombre','email'], //Especifica los campos que son obligatorios en la BDD 

            properties:{
                id: {type:'integer'},
                nombre: {type:'string',minLength:1},
                email: {type:'string',format:'email'},
                edad: {type: 'integer'},
                fecha: {type:'string',format:'date-time'}
            }
        }
    }

    static async getClientes(){//Metodo para listar clientes
        return await Cliente.query(); //select * from cliente
    }

    static async insert(data){//Metodo para insertar cliente
        return await Cliente.query().insert(data); //insert into cliente values ('','',...)
    }

    static async update(data,id){//Metodo para actualizar cliente
        return await Cliente.query().update(id,data);//update set data where id = 1
    }

    static async delete(id){//Metodo para eliminar un cliente
        return await Cliente.query().deleteById(id);//delete from cliente where id = 1
    }
}

module.exports = Cliente;