// models/Product.js
const { Model } = require('objection');

class Product extends Model {
    static get tableName() {
        return 'product';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name', 'email'],
            properties: {
                id: { type: 'integer' },
                name: { type: 'string', minLength: 1 },
                email: { type: 'string', format: 'email' },
                created_at: { type: 'string', format: 'date-time' },
                updated_at: { type: 'string', format: 'date-time' }
            }
        };
    }

    static async getProducts() {
        return await Product.query();
    }

    static async insert(data) {
        return await Product.query().insert(data);
    }

    static async update(id, data) {
        return await Product.query().patchAndFetchById(id, data);
    }

    static async delete(id) {
        return await Product.query().deleteById(id);
    }
}

module.exports = Product;
