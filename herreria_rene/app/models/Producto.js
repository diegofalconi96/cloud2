const { format } = require('mysql2');
const { Model } = require('objection'); // llamar a Model de la libreria objection

class Producto extends Model { // creo herencia de Model
    static get tableName(){ // especifica el nombre de la tabla
        return 'productos';
    }

    static get jsonSchema() { // Especifíca la estructura de la tabla
        return{
            type: 'object', // object para un valor p un dato, array para una lista
            required: ['nombre', 'precio'], // Datos obligatorios para enviar a la base de datos
            properties: {
                id: { type: 'integer' },
                nombre: { type: 'string', minLength: 3, maxLength: 255},
                precio: { type: 'number' },
                estado: { type: 'string' },
                descripcion: { type: 'text' },
                cliente_id: { type: 'integer' }

            } // Estructura de los campos - Definir uno por uno
        }
    }

    // GENERAMOS UN CRUD

    static async getProductos(){ // Método para listar producto
        return await Producto.query(); // Retorno una espera de consulta (Select *from producto)
    }

    static async insert(data){ // Método para insertar datos (data) --> diccionario de datos
        return await Producto.query().insert(data); // insert into producto values ...
    }

    static async update(data, id) { // Método para editar producto
        return await Producto.query()
        .patch(id, data); // update set data where id = 0
    }

    static async delete(id) { // Método para eliminar producto
        return await Producto.query()
        .deleteById(id); // delete from producto where id = 0

    }
}

module.exports = Producto; // Exportar el modulo para llamar a la Clase