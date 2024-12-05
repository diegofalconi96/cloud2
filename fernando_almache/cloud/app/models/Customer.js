const { Model } = require('objection');

class Customer extends Model {
    static get tableName() {
        return 'customer';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['nombre', 'apellido', 'cargo', 'correo', 'direccion'],

            properties: {
                id: { type: 'integer' },
                nombre: { type: 'string', minLength: 1 },
                apellido: { type: 'string', minLength: 1 },
                cargo: { type: 'string', minLength: 1 },
                correo: { type: 'string', minLength: 1 },
                direccion: { type: 'string', minLength: 1 },
                created_at: { type: 'string', format: 'date-time' },
                updated_at: { type: 'string', format: 'date-time' },
                age: { type: 'integer' }
            }
        };
    }

    static async getCustomers() {
        return await Customer.query();
    }

    static async insert(data) {
        return await Customer.query().insert(data);
    }

    static async update(data, id) {
        return await Customer.query().patchAndFetchById(id, data);
    }

    static async delete(id) {
        return await Customer.query().deleteById(id);
    }
}

module.exports = Customer;
