const { Model } = require('objection');

class Proveedor extends Model {
    static get tableName() {
        return 'proveedor';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['nombre'],
            properties: {
                id_proveedor: { type: 'integer' },
                nombre: { type: 'string', minLength: 1 },
                apellido: { type: 'string' },
                telefono: { type: 'string' },
                direccion: { type: 'string' },
                mail: { type: 'string', format: 'email' }
            }
        };
    }

    static async getProveedores() {
        return await Proveedor.query();
    }

    static async insert(data) {
        return await Proveedor.query().insert(data);
    }

    static async update(data, id_proveedor) {
        return await Proveedor.query().patch({ id_proveedor: id_proveedor }, data);
    }

    static async delete(id_proveedor) {
        return await Proveedor.query().deleteById(id_proveedor);
    }
}

module.exports = Proveedor;
