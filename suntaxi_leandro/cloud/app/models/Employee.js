// models/Employee.js
const { Model } = require('objection');

class Employee extends Model {
    static get tableName() {
        return 'employee';
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

    static async getEmployees() {
        return await Employee.query();
    }

    static async insert(data) {
        return await Employee.query().insert(data);
    }

    static async update(id, data) {
        return await Employee.query().patchAndFetchById(id, data);
    }

    static async delete(id) {
        return await Employee.query().deleteById(id);
    }
}

module.exports = Employee;
