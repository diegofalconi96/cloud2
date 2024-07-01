const { format } = require('mysql2');
const { Model } = require('objection'); // Llamar a Model de la lib objection

class Producto extends Model { // Crear herencia de Model
    static get tableName(){
        return 'producto';
    }

    static get jsonSchema() { // Especifica la estructura de la tabla
        return {
            type: 'object', // object para un dato, array para una lista
            required: ['nombre', 'precio'], // campos requeridos 

            properties: { // estructura de los campos 
                id_producto: { type: 'integer' },
                nombre: { type: 'string', minLength: 1 },
                descripcion: { type: 'string' },
                categoria: { type: 'string' },
                precio: { type: 'number' },
                cantidad_ninventario: { type: 'integer' },
                fecha_adquisicion: { type: 'string', format: 'date' },
                id_proveedor: { type: 'integer' }, 
            }
        };
    }

    static async getProducto(){ 
        return await Producto.query(); 
    }

    static async insert(data) { // método para insertar productos
        return await Producto.query()
        .insert(data); // insert into producto values
    }

    static async update(data, id_producto) { // método para editar productos
        return await Producto.query()
        .patch({ id_producto: id_producto }, data); // update set data where id_producto = 0
    }

    static async delete(id_producto) { // método para eliminar producto
        return Producto.query()
        .deleteById(id_producto); // delete from producto where id_producto = 0
    }
}

module.exports = Producto;
