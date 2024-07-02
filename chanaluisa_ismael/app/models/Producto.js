const { Model } = require('objection');//llamar al Model de la lib objetcion

class Producto extends Model{ // crear herencia de modelo
    static get tableName(){
        return 'producto';
    }

    static get jsonSchema(){ // especifica la estructura de la tabla
        return{
            type: 'object' , //object para un dato, array para una lista
            required: ['nombre','precio'], //campos requeridos

            properties: {
                id: { type: 'integer' },
                nombre: { type: 'string', minLength: 1 },
                precio: { type: 'number' },
                categoria: { type: 'string', minLength: 1 },
                disponibilidad: { type: 'string', minLength: 1 },
                estado: { type: 'string', minLength:1 }
              },
        };

    }

    static async getProductos() { //metodo para listar clientes 
        return await Producto.query(); // select ' from clientes

    }

    static async insert(data) { // metodo paraisnertar clientes 
        return await Producto.query().insert(data); // insert input clientes values .......
    }
    static async update(data, id) { // metodo para editar clientes
        return await Producto.query().patch(id, data); // update set data where id = 0

    }
    static async delete(id) { // metodo para borrar clientes 
        return await Producto.query().deleteById(id); // delete from customer where id = 0

    }

}
module.exports = Producto;