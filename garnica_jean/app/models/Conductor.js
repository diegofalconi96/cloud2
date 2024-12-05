const { format } = require('mysql2');
const { Model } = require('objection'); // llamar el model de la libreria objection

class Conductor extends Model { // crear la hgerencia de Model
    static get tableName(){ // especifica el nombre de la Tabla
        return'conductor';
    }
    static get jsonSchema(){
        return{
            type: 'object', // especifica la estructura de la tabla
            required: ['nombre','email'],
            
            properties: { // estructura de los campos
                id: {type: 'integer'},
                nombre: {type: 'string'},
                email: {type: 'string', format: 'email'},
                empresa: {type: 'string'},
                cedula: {type: 'string'}
            }

        };
    }

    static async getConductores(){// metodos para listar clientes
        return await Conductor.query(); //select * from Conductor
    }

    static async insert(data){ // metodo para insertar clientes
        return await Conductor.query().insert(data); // insert into Conductor values ...
    }
   
    static async update(data,id){ // metodo para editar cliente
        return await Conductor.query().patch(id, data); //update set data where id = 0
    }

    static async delete(id){ // metodo para eliminar cliente
        return await Conductor.query().deleteById(id); // delete from Conductor where id = 0
        
    }
}

module.exports = Conductor;