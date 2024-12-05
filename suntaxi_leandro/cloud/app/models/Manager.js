// models/Manager.js
const { Model } = require('objection');

class Manager extends Model {
    static get tableName() {
        return 'manager';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['first_name', 'last_name', 'email'],
            properties: {
                id: { type: 'integer' },
                first_name: { type: 'string', minLength: 1 },
                last_name: { type: 'string', minLength: 1 },
                email: { type: 'string', format: 'email' },
                created_at: { type: 'string', format: 'date-time' },
                updated_at: { type: 'string', format: 'date-time' }
            }
        };
    }

    static async getManagers() {
        return await Manager.query();
    }

    static async insert(data) {
        return await Manager.query().insert(data);
    }

    static async update(id, data) {
        return await Manager.query().patchAndFetchById(id, data);
    }

    static async delete(id) {
        return await Manager.query().deleteById(id);
    }
}

module.exports = Manager;
