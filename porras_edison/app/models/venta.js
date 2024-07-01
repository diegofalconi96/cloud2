const { format } = require('mysql2');
const {Model} = require('objection');//Llamar a Model de la lib objection

class Venta extends Model{//Crear herencia de Model
    static get tableName(){//Especificar el nombre de la tabla
        return 'venta';
    }
    static get jsonSchema(){//Especificar la estructura de la tabla
        return{
            type:'object', //object para un dato, array para una lista
            required: ['total_vent','cliente_id','producto_id'], //Especifica los campos que son obligatorios en la BDD 

            properties:{
                id: {type:'integer'},
                cantidad: {type:'integer',},
                total: {type:'number'},
                descuento: {type:'string'},
                cliente_id: {type:'integer'},
                producto_id: {type:'integer'}
            }
        }
    }

    static async getVentas(){//Metodo para listar Ventas
        return await Venta.query(); //select * from Venta
    }

    static async insert(data){//Metodo para insertar Venta
        return await Venta.query().insert(data); //insert into Venta values ('','',...)
    }

    static async update(data,id){//Metodo para actualizar Venta
        return await Venta.query().update(id,data);//update set data where id = 1
    }

    static async delete(id){//Metodo para eliminar un Venta
        return await Venta.query().deleteById(id);//delete from Venta where id = 1
    }

}

module.exports = Venta;