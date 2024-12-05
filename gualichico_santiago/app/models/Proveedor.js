const { format } = require('mysql2');
const { Model } = require('objection'); //llamar a Model de la lob objection

class Proveedor extends Model { //creo herencia de Model
    static get tableName(){
        return 'proveedor';
    }

    static get jsonSchema() { // Especifica la estructura de la tabla
        return {
            type: 'object', // object para un daroa, array para una lista
            required: ['nombre', 'telefono'], // campos requeridos 

            properties: {// estructura de los campos 
                id_proveedor: { type: 'integer'},
                nombre: {type: 'string', minLength: 1},
                contacto: {type: 'string'},
                telefono: {type: 'string', minLength: 1},
                direccion: {type: 'string', minLength: 1},
                mail: {type: 'string', minLength: 1},
            }
        };
    }

    static async getProveedor(){ 
        return await Proveedor.query(); 
    }

    static async insert(data){ 
        return await Proveedor.query()
        .insert(data);  
    }

    static async update(data, id){
        return await Proveedor.query()
        .patch(id, data); 
    }

    static async delete(id){
        return Proveedor.query()
        .deleteById(id); 

    }

}

module.exports = Proveedor;