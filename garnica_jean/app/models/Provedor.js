const { format } = require('mysql2');
const { Model } = require('objection'); // llamar el model de la libreria objection

class Provedor extends Model { // crear la hgerencia de Model
    static get tableName(){ // especifica el nombre de la Tabla
        return'provedor';
    }
    static get jsonSchema(){
        return{
            type: 'object', // especifica la estructura de la tabla
            required: ['nombre','empresa'],
            
            properties: { // estructura de los campos
                id: {type: 'integer'},
                nombre: {type: 'string'},
                email: {type: 'string', format: 'email'},
                telefono: {type: 'string'},
                direccion: {type: 'string'},
                empresa: {type: 'string'}
            }

        };
    }

    static async getProvedores(){// metodos para listar clientes
        return await Provedor.query(); //select * from Provedor
    }

    static async insert(data){ // metodo para insertar clientes
        return await Provedor.query().insert(data); // insert into Provedor values ...
    }
   
    static async update(data,id){ // metodo para editar cliente
        return await Provedor.query().patch(id, data); //update set data where id = 0
    }

    static async delete(id){ // metodo para eliminar cliente
        return await Provedor.query().deleteById(id); // delete from Provedor where id = 0
        
    }
}

module.exports = Provedor;