const { format } = require('mysql2');
const { Model } = require('objection'); // Llamar a Model de la lib objection

class DetalleFactura extends Model { // Crear herencia de Model
    static get tableName(){
        return 'detalle_factura';
    }

    static get jsonSchema() { // Especifica la estructura de la tabla
        return {
            type: 'object', // object para un dato, array para una lista
            required: ['cantidad', 'precio_unitario', 'subtotal'], // campos requeridos 

            properties: { // estructura de los campos 
                id: { type: 'integer' },
                cantidad: { type: 'integer' },
                precio_unitario: { type: 'number' },
                subtotal: { type: 'number' }
            }
        };
    }

    static async getDetallesFactura() { // método para listar detalles de factura
        return await DetalleFactura.query(); // select * from detalle_factura
    }

    static async insert(data) { // método para insertar detalles de factura
        return await DetalleFactura.query()
        .insert(data); // insert into detalle_factura values
    }

    static async update(data, id) { // método para editar detalles de factura
        return await DetalleFactura.query()
        .patch({ id: id }, data); // update set data where id = 0
    }

    static async delete(id) { // método para eliminar detalle de factura
        return DetalleFactura.query()
        .deleteById(id); // delete from detalle_factura where id = 0
    }
}

module.exports = DetalleFactura;

