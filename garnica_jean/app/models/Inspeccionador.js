const { format } = require('mysql2');
const { Model } = require('objection'); // llamar el model de la libreria objection

class Inspeccionador extends Model { // crear la hgerencia de Model
    static get tableName(){ // especifica el nombre de la Tabla
        return'inspeccionador';
    }
    static get jsonSchema(){
        return{
            type: 'object', // especifica la estructura de la tabla
            required: ['nombre','cedula'],
            
            properties: { // estructura de los campos
                id: {type: 'integer'},
                nombre: {type: 'string'},
                email: {type: 'string', format: 'email'},
                cargo: {type: 'string'},
                cedula: {type: 'string'}
            }

        };
    }

    static async getInspeccionadores(){// metodos para listar clientes
        return await Inspeccionador.query(); //select * from Inspeccionador
    }

    static async insert(data){ // metodo para insertar clientes
        return await Inspeccionador.query().insert(data); // insert into Inspeccionador values ...
    }
   
    static async update(data,id){ // metodo para editar cliente
        return await Inspeccionador.query().patch(id, data); //update set data where id = 0
    }

    static async delete(id){ // metodo para eliminar cliente
        return await Inspeccionador.query().deleteById(id); // delete from Inspeccionador where id = 0
        
    }
}

module.exports = Inspeccionador;