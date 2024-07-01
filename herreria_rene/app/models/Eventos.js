const { Model } = require('objection'); // llamar a Model de la libreria objection

class Eventos extends Model { // creo herencia de Model
    static get tableName(){ // especifica el nombre de la tabla
        return 'eventos';
    }

    static get jsonSchema() { // Especifíca la estructura de la tabla
        return{
            type: 'object', // object para un valor p un dato, array para una lista
            required: ['titulo', 'descripcion'], // Datos obligatorios para enviar a la base de datos
            properties: {
                id: { type: 'integer' },
                titulo: { type: 'string' },
                ubicacion: { type: 'string' },
                fecha: { type: 'string', format: 'date' },
                hora: { type: 'string', format: 'time' },
                descripcion: { type: 'string' }

            } // Estructura de los campos - Definir uno por uno
        }
    }

    // GENERAMOS UN CRUD

    static async getEventos(){ // Método para listar eventos
        return await Eventos.query(); // Retorno una espera de consulta (Select *from eventos)
    }

    static async insert(data){ // Método para insertar datos (data) --> diccionario de datos
        return await Eventos.query().insert(data); // insert into eventos values ...
    }

    static async update(data, id) { // Método para editar eventos
        return await Eventos.query()
        .patch(id, data); // update set data where id = 0
    }

    static async delete(id) { // Método para eliminar eventos
        return await Eventos.query()
        .deleteById(id); // delete from eventos where id = 0

    }
}

module.exports = Eventos; // Exportar el modulo para llamar a la Clase