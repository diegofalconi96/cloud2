// models/Location.js
const { Model } = require('objection');

class Location extends Model {
    static get tableName() {
        return 'location';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['address', 'city', 'state', 'zip_code'],
            properties: {
                id: { type: 'integer' },
                address: { type: 'string', minLength: 1 },
                city: { type: 'string', minLength: 1 },
                state: { type: 'string', minLength: 1 },
                zip_code: { type: 'string', minLength: 1 },
                created_at: { type: 'string', format: 'date-time' },
                updated_at: { type: 'string', format: 'date-time' }
            }
        };
    }

    static async getLocations() {
        return await Location.query();
    }

    static async insert(data) {
        return await Location.query().insert(data);
    }

    static async update(id, data) {
        return await Location.query().patchAndFetchById(id, data);
    }

    static async delete(id) {
        return await Location.query().deleteById(id);
    }
}

module.exports = Location;
