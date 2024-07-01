const { format } = require('mysql2');
const {Model} = require('objection');//Llamar a Model de la lib objection

class Proveedor extends Model{//Crear herencia de Model
    static get tableName(){//Especificar el nombre de la tabla
        return 'proveedor';
    }
    static get jsonSchema(){//Especificar la estructura de la tabla
        return{
            type:'object', //object para un dato, array para una lista
            required: ['nombre_prov','email_prov','empresa_prov'], //Especifica los campos que son obligatorios en la BDD 

            properties:{
                id: {type:'integer'},
                nombre: {type:'string',minLength:1},
                email: {type:'string',format:'email'},
                empresa: {type:'string',minLength:1},
                direccion: {type: 'string'}
            }
        }
    }

    static async getProveedores(){//Metodo para listar Proveedores
        return await Proveedor.query(); //select * from Proveedor
    }

    static async insert(data){//Metodo para insertar Proveedor
        return await Proveedor.query().insert(data); //insert into Proveedor values ('','',...)
    }

    static async update(data,id){//Metodo para actualizar Proveedor
        return await Proveedor.query().update(id,data);//update set data where id = 1
    }

    static async delete(id){//Metodo para eliminar un Proveedor
        return await Proveedor.query().deleteById(id);//delete from Proveedor where id = 1
    }

}

module.exports = Proveedor;