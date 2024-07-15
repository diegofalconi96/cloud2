const { Model } = require('objection');

class Category extends Model {
    static get tableName() {
        return 'categorias';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name'],
            properties: {
                id: { type: 'integer' },
                name: { type: 'string', minLength: 1 },
                created_at: { type: 'string', format: 'date-time' },
                updated_at: { type: 'string', format: 'date-time' }
            }
        };
    }

    static async getCategories() {
        return await Category.query();
    }

    static async insert(data) {
        return await Category.query().insert(data);
    }

    static async update(data, id) {
        return await Category.query().patchAndFetchById(id, data);
    }

    static async delete(id) {
        return await Category.query().deleteById(id);
    }
}

module.exports = Category;
