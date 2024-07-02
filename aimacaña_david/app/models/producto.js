const { Model } = require('objection');

class Producto extends Model {
    static get tableName() {
        return 'producto';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['nombre', 'precio', 'stock', 'bodega_id'],
            properties: {
                id: { type: 'integer' },
                nombre: { type: 'string', minLength: 1 },
                descripcion: { type: 'string' },
                precio: { type: 'number' },
                stock: { type: 'integer' },
                bodega_id: { type: 'integer' },
            }
        };
    }
    static async getProductos(){ // metodo listar  Clientes
        return await Producto.query(); // es un select*from Customer
    }
    static async insert(data){ //metodo para insertar clientes
        return await Producto.query().insert(data); // es un insert into Customeer
    }
    static async update(data, id){//metodo para actualizar
        return await Producto.query().patch(id,data); //update set data where id=0
    }
    static async delete(id){
        return await Producto.query().deleteById(id)// delete from customer where id = 0
    }
}

module.exports = Producto;