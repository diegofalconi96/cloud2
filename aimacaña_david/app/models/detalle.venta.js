const { Model } = require('objection');

class DetalleVenta extends Model {
    static get tableName() {
        return 'detalle_venta';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['venta_id', 'producto_id', 'cantidad', 'precio_unitario', 'subtotal'],
            properties: {
                id: { type: 'integer' },
                venta_id: { type: 'integer' },
                producto_id: { type: 'integer' },
                cantidad: { type: 'integer' },
                precio_unitario: { type: 'number' },
                subtotal: { type: 'number' },
            }
        };
    }
    static async getDetalles(){ // metodo listar  Clientes
        return await DetalleVenta.query(); // es un select*from Customer
    }
    static async insert(data){ //metodo para insertar clientes
        return await DetalleVenta.query().insert(data); // es un insert into Customeer
    }
    static async update(data, id){//metodo para actualizar
        return await DetalleVenta.query().patch(id,data); //update set data where id=0
    }
    static async delete(id){
        return await DetalleVenta.query().deleteById(id)// delete from customer where id = 0
    }
}

module.exports = DetalleVenta;