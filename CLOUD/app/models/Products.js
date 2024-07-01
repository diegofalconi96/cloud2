const { format } = require('mysql2');
const { Model, mixin } = require('objection');

class Products extends Model {
    static get tableName(){
        return 'products';
    }

    static get jsonSchema(){
        return {
            type: 'object',
            properties: {
                id: { type: 'integer' },
                cantidad: { type: 'integer' },
                estado: { type: 'boolean' },
                date: {type: 'string', format: 'date-time'},
                fkid_suppliers: { type: 'integer' }
            }
        }
    }
    static async getProducts(){
        return await Products.query();
    }
    static async insert(data){
        return await Products.query().insert(data);
    }
    static async update(id,data){
        return await Products.query().patch(id, data);
    }
    static async delete(id){
        return await Products.query().deleteById(id);
    }
}

module.exports = Products;
