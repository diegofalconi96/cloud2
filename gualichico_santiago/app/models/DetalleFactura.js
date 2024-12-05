const { format } = require('mysql2');
const { Model } = require('objection'); 

class DetalleFactura extends Model {
    static get tableName() {
        return 'detalle_factura';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['cantidad', 'precio_unitario', 'subtotal', 'id_factura'],
            properties: {
                id: { type: 'integer' },
                cantidad: { type: 'integer' },
                precio_unitario: { type: 'number' },
                subtotal: { type: 'number' },
                id_producto: { type: 'integer' },
                id_factura: { type: 'integer' }
            }
        };
    }

    static async getDetalleFactura(){ 
        return await DetalleFactura.query(); 
    }

    static async insert(data){ 
        return await DetalleFactura.query()
        .insert(data);  
    }

    static async update(data, id){
        return await DetalleFactura.query()
        .patch(id, data); 
    }

    static async delete(id){
        return DetalleFactura.query()
        .deleteById(id); 

    }

}

module.exports = DetalleFactura;