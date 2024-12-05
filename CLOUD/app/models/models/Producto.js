const { format } = require('mysql');
const { Model } = require('objection');

class Producto extends Model {
    static get tableName() {
        return 'producto';
    }

    static get jsonSchema() {
        return {
          type: 'object',
          required: ['name', 'price'],
          properties: {
            id: { type: 'integer' },
            name: { type: 'string', minLength: 1 },
            price: { type: 'number' },
            category_id: { type: 'integer' },
            dateexpiration: { type: 'string', format: 'date' }
          }
        };
      }
    

    static async getProductos() {
        return await Producto.query(); // SELECT * FROM producto
    }

    static async insert(data) {
        return await Producto.query().insert(data); // INSERT INTO producto VALUES (data)
    }

    static async update(data, id) {
        await Producto.query().patch(data).where({ id }); // UPDATE producto SET data WHERE id = id
        return await Producto.query().findById(id); // Devuelve el producto actualizado
    }

    static async delete(id) {
        return await Producto.query().deleteById(id); // DELETE FROM producto WHERE id = id
    }
}

module.exports = Producto;
