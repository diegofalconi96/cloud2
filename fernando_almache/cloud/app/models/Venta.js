const { Model } = require('objection');

class Venta extends Model {
    static get tableName() {
        return 'ventas';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['metodopago', 'estado', 'detalles', 'fecha', 'cantidad'],

            properties: {
                id: { type: 'integer' },
                metodopago: { type: 'string', minLength: 1 },
                estado: { type: 'string', minLength: 1 },
                detalle: { type: 'string', minLength: 1 },
                fecha: { type: 'string', minLength: 1 },
                cantidad: { type: 'string', minLength: 1 }
            }
        };
    }

    static async getVentas() {
        return await Venta.query();
    }

    static async insert(data) {
        return await Venta.query().insert(data);
    }

    static async update(data, id) {
        return await Venta.query().patchAndFetchById(id, data);
    }

    static async delete(id) {
        return await Venta.query().deleteById(id);
    }
}

module.exports = Venta;
