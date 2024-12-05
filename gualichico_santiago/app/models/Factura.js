const { format } = require('mysql2');
const { Model } = require('objection');

class Factura extends Model {
    static get tableName() {
        return 'factura';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['fecha_emision', 'monto_total'],

            properties: {
                id_factura: { type: 'integer' },
                fecha_emision: { type: 'string', format: 'date' },
                monto_total: { type: 'number' }
            }
        };
    }

  
    static async getFactura() {
        return await Factura.query();
    }


    static async insert(data) {
        return await Factura.query().insert(data);
    }


    static async update(data, id) {
        return await Factura.query()
            .patch(id, data); 
    }

    static async delete(id){
        return Factura.query()
        .deleteById(id); 

    }
}

module.exports = Factura;