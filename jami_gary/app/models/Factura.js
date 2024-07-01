const { format } = require('mysql2');
const { Model } = require('objection'); // Llamar a Model de la lib objection

class Factura extends Model { // Crear herencia de Model
    static get tableName(){
        return 'factura';
    }

    static get jsonSchema() { // Especifica la estructura de la tabla
        return {
            type: 'object', // object para un dato, array para una lista
            required: ['fecha_emision', 'monto_total'], // campos requeridos 

            properties: { // estructura de los campos 
                id_factura: { type: 'integer' },
                fecha_emision: { type: 'string', format: 'date' },
                monto_total: { type: 'number' }
            }
        };
    }

    static async getFacturas() { // método para listar facturas
        return await Factura.query(); // select * from factura
    }

    static async insert(data) { // método para insertar facturas
        return await Factura.query()
        .insert(data); // insert into factura values
    }

    static async update(data, id_factura) { // método para editar facturas
        return await Factura.query()
        .patch({ id_factura: id_factura }, data); // update set data where id_factura = 0
    }

    static async delete(id_factura) { // método para eliminar factura
        return Factura.query()
        .deleteById(id_factura); // delete from factura where id_factura = 0
    }
}

module.exports = Factura;
