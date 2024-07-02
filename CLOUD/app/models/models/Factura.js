const { Model } = require('objection');

class Factura extends Model {
    static get tableName() {
        return 'factura'; // Nombre de la tabla en la base de datos
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['numero_factura', 'fecha_emision', 'cliente_nombre', 'monto_total', 'tipo_pago'],
            properties: {
                id: { type: 'integer' },
                numero_factura: { type: 'string', minLength: 1 },
                fecha_emision: { type: 'string', format: 'date' },
                cliente_nombre: { type: 'string', minLength: 1 },
                monto_total: { type: 'number' },
                tipo_pago: { type: 'string', minLength: 1 },
                cliente_apellido: { type: 'string' } // Si deseas incluir el campo 'cliente_apellido'
            }
        };
    }

    static async getFactura() {
        return await Factura.query(); // SELECT * FROM factura
    }

    static async insert(data) {
        return await Factura.query().insert(data); // INSERT INTO factura VALUES (data)
    }

    static async update(data, id) {
        await Factura.query().patch(data).where({ id }); // UPDATE factura SET data WHERE id = id
        return await Factura.query().findById(id); // Devuelve la factura actualizada
    }

    static async delete(id) {
        return await Factura.query().deleteById(id); // DELETE FROM factura WHERE id = id
    }
}

module.exports = Factura;

