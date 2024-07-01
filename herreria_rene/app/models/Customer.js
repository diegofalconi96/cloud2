const { format } = require('mysql2');
const { Model } = require('objection'); // llamar a Model de la libreria objection

class Customer extends Model { // creo herencia de Model
    static get tableName(){ // especifica el nombre de la tabla
        return 'customer';
    }

    static get jsonSchema() { // Especifíca la estructura de la tabla
        return{
            type: 'object', // object para un valor p un dato, array para una lista
            required: ['name', 'apellido'], // Datos obligatorios para enviar a la base de datos
            properties: {
                id: { type: 'integer' },
                name: { type: 'string', minLength: 1 },
                apellido: { type: 'string', minLength:1},
                dia_hora: { type: 'string', format: 'date-time' },
                age: { type: 'string' }
            } // Estructura de los campos - Definir uno por uno
        }
    }

    // GENERAMOS UN CRUD

    static async getCustomers(){ // Método para listar clientes
        return await Customer.query(); // Retorno una espera de consulta (Select *from customer)
    }

    static async insert(data){ // Método para insertar datos (data) --> diccionario de datos
        return await Customer.query().insert(data); // insert into customer values ...
    }

    static async update(data, id) { // Método para editar cliente
        return await Customer.query()
        .patch(id, data); // update set data where id = 0
    }

    static async delete(id) { // Método para eliminar cliente
        return await Customer.query()
        .deleteById(id); // delete from customer where id = 0

    }
}

module.exports = Customer; // Exportar el modulo para llamar a la Clase