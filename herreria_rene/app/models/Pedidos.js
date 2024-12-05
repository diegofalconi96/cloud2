const { Model } = require('objection'); // llamar a Model de la libreria objection

class Pedidos extends Model { // creo herencia de Model
    static get tableName(){ // especifica el nombre de la tabla
        return 'pedidos';
    }

    static get jsonSchema() { // Especifíca la estructura de la tabla
        return{
            type: 'object', // object para un valor p un dato, array para una lista
            required: ['fecha', 'estado'], // Datos obligatorios para enviar a la base de datos
            properties: {
                id: { type: 'integer' },
                fecha: { type: 'string', format: 'date' },
                estado: { type: 'string' },
                total: { type: 'number' },
                producto_id: { type: 'integer' }

            } // Estructura de los campos - Definir uno por uno
        }
    }

    // GENERAMOS UN CRUD

    static async getPedidos(){ // Método para listar pedidos
        return await Pedidos.query(); // Retorno una espera de consulta (Select *from pedidos)
    }

    static async insert(data){ // Método para insertar datos (data) --> diccionario de datos
        return await Pedidos.query().insert(data); // insert into pedidos values ...
    }

    static async update(data, id) { // Método para editar pedidos
        return await Pedidos.query()
        .patch(id, data); // update set data where id = 0
    }

    static async delete(id) { // Método para eliminar cliente
        return await Pedidos.query()
        .deleteById(id); // delete from pedidos where id = 0

    }
}

module.exports = Pedidos; // Exportar el modulo para llamar a la Clase