const { format } = require('mysql2');
const { Model, mixin } = require('objection');

class Sales extends Model {
    static get tableName(){
        return 'sales';
    }
 	 	 	 
    static get jsonSchema(){
        return {
            type: 'object',
            required: ['cantidad','totalVenta'],
            properties: {
                id: { type: 'integer' },
                cantidad: { type: 'integer' },
                totalVenta: { type: 'number' },
                fecha: {type: 'string', format: 'date-time'},
                fkid_orders: { type: 'integer' },
                fkid_products: { type: 'integer' }
            }
        }
    }
    static async getSales(){
        return await Sales.query();
    }
    static async insert(data){
        return await Sales.query().insert(data);
    }
    static async update(id, data){
        return await Sales.query().patch(id, data);
    }
    static async delete(id){
        return await Sales.query().deleteById(id);
    }
}

module.exports = Sales;
