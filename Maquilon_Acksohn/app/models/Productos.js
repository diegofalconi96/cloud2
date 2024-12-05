const { format } = require('mysql2');
const {Model} = require('objection'); 

class Producto extends Model { 
    static get tableName() { 
        return 'producto';
    }

    static get jsonSchema() { 
        return {
            type: 'object', 
            required: ['nombre_prod','precio_prod'], 

            properties: {   
                id_prod:{type: 'integer'},
                nombre_prod:{type: 'string'},
                precio_prod:{type: 'number'},
                stock_prod:{type: 'integer'}
            }
        };
    }

    static async getProductos (){ 
        return await Producto.query(); 
    }

    static async insert(data){
        return await Producto.query().insert(data);
    }

    static async update(data,id_prod){ 
        return await Producto.query().patch(id_prod,data);  
    }

    static async delete(id_prod){ 
        return await Producto.query().deleteById(id_prod); 
    }
}

module.exports=Producto; 