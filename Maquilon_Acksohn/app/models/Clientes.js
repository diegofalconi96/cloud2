const {Model} = require('objection'); //Llamar a Model de la lib objetcion

class Cliente extends Model { //Creo herencia de Model
    static get tableName() { //especifica el nombre de la tabla
        return 'cliente';
    }

    static get jsonSchema() { //especifica la estructura de la tabla
        return {
            type: 'object', //Object para un dato array para una lista
            required: ['nombre','email'], //campos requeridos

            properties: {   //estructura de los campos
                id:{type: 'integer'},
                nombre:{type: 'string', minLength: 1},
                email: {type: 'string', format: 'email'},
                //date: {type: 'string', format:'date-time'},
                age: {type: 'integer'}
            }
        };
    }

    static async getClientes (){ //metodo para listar Clientes
        return await Cliente.query(); //select * from cliente
    }

    static async insert(data){// Metodo para insertar clientes
        return await Cliente.query().insert(data);// instert into cliente values ...
    }

    static async update(data,id){ //metodo para editar cliente
        return await Cliente.query().patch(id,data);  //update set  data where id =0
    }

    static async delete(id){ //metodo para eliminar cliente
        return await Cliente.query().deleteById(id); //delete from cliente where id = 0
    }
}

module.exports=Cliente; //Para que se pueda llamar de otro lugar