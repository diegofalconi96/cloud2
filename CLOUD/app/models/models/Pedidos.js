const { Model } = require('objection');

class Pedidos extends Model {
    static get tableName() {
        return 'pedidos'; // Nombre de la tabla en la base de datos
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['supplier_name', 'contact_email', 'order_date', 'product_name', 'quantity', 'price'],
            properties: {
                id: { type: 'integer' },
                supplier_name: { type: 'string', minLength: 1 },
                contact_email: { type: 'string', format: 'email' },
                contact_phone: { type: 'string' },
                order_date: { type: 'string', format: 'date' }, // De acuerdo a tu migración, es de tipo 'date'
                product_name: { type: 'string', minLength: 1 },
                quantity: { type: 'integer' },
                price: { type: 'number' },
                correo: {type: 'string' }
            }
        };
    }

    static async getPedidos() {
        return await Pedidos.query(); // SELECT * FROM pedidos
    }

    static async insert(data) {
        return await Pedidos.query().insert(data); // INSERT INTO pedidos VALUES (data)
    }

    static async update(data, id) {
        await Pedidos.query().patch(data).where({ id }); // UPDATE pedidos SET data WHERE id = id
        return await Pedidos.query().findById(id); // Devuelve el pedido actualizado
    }

    static async delete(id) {
        return await Pedidos.query().deleteById(id); // DELETE FROM pedidos WHERE id = id
    }
}

module.exports = Pedidos;
