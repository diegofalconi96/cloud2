const { format } = require('mysql2');
const {Model} = require('objection');//Llamar a Model de la lib objection

class Producto extends Model{//Crear herencia de Model
    static get tableName(){//Especificar el nombre de la tabla
        return 'producto';
    }
    static get jsonSchema(){//Especificar la estructura de la tabla
        return{
            type:'object', //object para un dato, array para una lista
            required: ['nombre_prod','precio_prod','stock_prod'], //Especifica los campos que son obligatorios en la BDD 

            properties:{
                id: {type:'integer'},
                nombre: {type:'string',minLength:1},
                precio: {type:'number'},
                stock: {type:'integer'}
            }
        }
    }

    static async getProductores(){//Metodo para listar Productores
        return await Producto.query(); //select * from Proveedor
    }

    static async insert(data){//Metodo para insertar Productor
        return await Producto.query().insert(data); //insert into Productor values ('','',...)
    }

    static async update(data,id){//Metodo para actualizar Productor
        return await Producto.query().update(id,data);//update set data where id = 1
    }

    static async delete(id){//Metodo para eliminar un Productor
        return await Producto.query().deleteById(id);//delete from Productor where id = 1
    }

}

module.exports = Producto;