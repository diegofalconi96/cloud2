const { format } = require('mysql2');
const { Model } = require('objection'); 

class Producto extends Model { 
    static get tableName(){
        return 'producto';
    }

    static get jsonSchema() { 
        return {
            type: 'object', 
            required: ['nombre', 'precio'], 

            properties: {
                id_producto: { type: 'integer' },
                nombre: { type: 'string', minLength: 1 },
                descripcion: { type: 'string' },
                categoria: { type: 'string', minLength: 1 },
                precio: { type: 'number' }, 
                cantidad_inventario: { type: 'integer' },
                fecha_adquisicion: { type: 'string', format: 'date' }, 
                id_proveedor: { type: 'integer' }, 

            }
        };
    }

    static async getProducto(){ 
        return await Producto.query(); 
    }

    static async insert(data){ 
        return await Producto.query()
        .insert(data);  
    }

    static async update(data, id){
        return await Producto.query()
        .patch(id, data); 
    }

    static async delete(id){
        return Producto.query()
        .deleteById(id); 

    }

}

module.exports = Producto;