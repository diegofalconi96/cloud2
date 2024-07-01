const { Model } = require('objection'); // llamar a Model de la libreria objection

class Reserva extends Model { // creo herencia de Model
    static get tableName(){ // especifica el nombre de la tabla
        return 'reserva';
    }

    static get jsonSchema() { // Especifíca la estructura de la tabla
        return{
            type: 'object', // object para un valor p un dato, array para una lista
            required: ['cliente_id', 'fecha'], // Datos obligatorios para enviar a la base de datos
            properties: {
                id: { type: 'integer' },
                cliente_id: { type: 'integer' },
                fecha: { type: 'string', format: 'date' },
                estado: { type: 'string' },
                dia: { type: 'string', format: 'date' }
            } // Estructura de los campos - Definir uno por uno
        }
    }

    // GENERAMOS UN CRUD

    static async getReservas(){ // Método para listar reserva
        return await Reserva.query(); // Retorno una espera de consulta (Select *from reserva)
    }

    static async insert(data){ // Método para insertar datos (data) --> diccionario de datos
        return await Reserva.query().insert(data); // insert into reserva values ...
    }

    static async update(data, id) { // Método para editar reserva
        return await Reserva.query()
        .patch(id, data); // update set data where id = 0
    }

    static async delete(id) { // Método para eliminar reserva
        return await Reserva.query()
        .deleteById(id); // delete from reserva where id = 0

    }
}

module.exports = Reserva; // Exportar el modulo para llamar a la Clase