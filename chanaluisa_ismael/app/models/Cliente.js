const { Model } = require('objection');

class Cliente extends Model {
    static get tableName() {
        return 'clientes';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['nombre', 'email', 'telefono'], // Corregido: campos requeridos correctamente
            properties: {
                id: { type: 'integer' },
                nombre: { type: 'string', minLength: 1 },
                email: { type: 'string', format: 'email' },
                telefono: { type: 'string', minLength: 1 },
                edad: { type: 'integer' } // Asumiendo que 'edad' es opcional y no requerido
            }
        };
    }

    static async getClientes() {
        return await Cliente.query();
    }

    static async insert(data) {
        return await Cliente.query().insert(data);
    }

    static async update(data, id) {
        return await Cliente.query().patchAndFetchById(id, data); // Uso de patchAndFetchById para actualizar y devolver el cliente actualizado
    }

    static async delete(id) {
        return await Cliente.query().deleteById(id);
    }
}

module.exports = Cliente;
