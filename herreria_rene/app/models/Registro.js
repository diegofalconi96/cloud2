const { Model } = require('objection'); // llamar a Model de la libreria objection

class Registro extends Model { // creo herencia de Model
    static get tableName(){ // especifica el nombre de la tabla
        return 'registro';
    }

    static get jsonSchema() { // Especifíca la estructura de la tabla
        return{
            type: 'object', // object para un valor p un dato, array para una lista
            required: ['name', 'apellido', 'edad'], // Datos obligatorios para enviar a la base de datos
            properties: {
                id: { type: 'integer' },
                name: { type: 'string', minLength: 1 },
                apellido: { type: 'string', minLength:1},
                edad: { type: 'integer' },
                email: { type: 'string' },
                dia_hora: { type: 'string', format: 'date-time' },
                estado: { type: 'string' }
            } // Estructura de los campos - Definir uno por uno
        }
    }

    // GENERAMOS UN CRUD

    static async getRegistros(){ // Método para listar registro
        return await Registro.query(); // Retorno una espera de consulta (Select *from registro)
    }

    static async insert(data){ // Método para insertar datos (data) --> diccionario de datos
        return await Registro.query().insert(data); // insert into customer values ...
    }

    static async update(data, id) { // Método para editar registro
        return await Registro.query()
        .patch(id, data); // update set data where id = 0
    }

    static async delete(id) { // Método para eliminar registro
        return await Registro.query()
        .deleteById(id); // delete from registro where id = 0

    }
}

module.exports = Registro; // Exportar el modulo para llamar a la Clase