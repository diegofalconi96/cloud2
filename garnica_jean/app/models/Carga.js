const { format } = require('mysql2');
const { Model } = require('objection'); // llamar el model de la libreria objection

class Carga extends Model { // crear la hgerencia de Model
    static get tableName(){ // especifica el nombre de la Tabla
        return'carga';
    }
    static get jsonSchema(){
        return{
            type: 'object', // especifica la estructura de la tabla
            required: ['propietario','origen','destino'],
            
            properties: { // estructura de los campos
                id: {type: 'integer'},
                desccripcion: {type: 'string'},
                peso_kg: {type: 'number'},
                origen: {type: 'string'},
                destino: {type: 'string'},
                fecha_entrega: {type: 'string',format:'date'},
                propietario: {type: 'string'}
            }

        };
    }

    static async getCargas(){// metodos para listar clientes
        return await Carga.query(); //select * from carga
    }

    static async insert(data){ // metodo para insertar clientes
        return await Carga.query().insert(data); // insert into carga values ...
    }
   
    static async update(data,id){ // metodo para editar cliente
        return await Carga.query().patch(id, data); //update set data where id = 0
    }

    static async delete(id){ // metodo para eliminar cliente
        return await Carga.query().deleteById(id); // delete from carga where id = 0
        
    }
}

module.exports = Carga;