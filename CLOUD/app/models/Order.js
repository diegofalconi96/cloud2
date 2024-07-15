const { Model } = require('objection');

class Order extends Model {
    static get tableName() {
        return 'orders';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['order_date'],
            properties: {
                id: { type: 'integer' },
                order_date: { type: 'string', format: 'date' },
                created_at: { type: 'string', format: 'date-time' },
                updated_at: { type: 'string', format: 'date-time' }
            }
        };
    }

    static async getOrders() {
        return await Order.query();
    }

    static async insert(data) {
        return await Order.query().insert(data);
    }

    static async update(data, id) {
        return await Order.query().patchAndFetchById(id, data);
    }

    static async delete(id) {
        return await Order.query().deleteById(id);
    }
}

module.exports = Order;
