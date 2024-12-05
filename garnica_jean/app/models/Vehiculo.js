const { format } = require('mysql2');
const { Model } = require('objection'); // llamar el model de la libreria objection

class Vehiculo extends Model { // crear la hgerencia de Model
    static get tableName(){ // especifica el nombre de la Tabla
        return'vehiculo';
    }
    static get jsonSchema(){
        return{
            type: 'object', // especifica la estructura de la tabla
            required: ['marca','modelo','color','placa'],
            
            properties: { // estructura de los campos
                id: {type: 'integer'},
                marca: {type: 'string'},
                modelo: {type: 'string'},
                año: {type: 'string',format:'date'},
                color: {type: 'string'},
                estado: {type: 'string'},
                placa: {type: 'string'},
                conductor_id: {type: 'number'}
            }

        };
    }

    static async getVehiculos(){// metodos para listar clientes
        return await Vehiculo.query(); //select * from Vehiculo
    }

    static async insert(data){ // metodo para insertar clientes
        return await Vehiculo.query().insert(data); // insert into Vehiculo values ...
    }
   
    static async update(data,id){ // metodo para editar cliente
        return await Vehiculo.query().patch(id, data); //update set data where id = 0
    }

    static async delete(id){ // metodo para eliminar cliente
        return await Vehiculo.query().deleteById(id); // delete from Vehiculo where id = 0
        
    }
}

module.exports = Vehiculo;