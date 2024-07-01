const { format } = require('mysql2');
const { Model, mixin } = require('objection');

class Orders extends Model {
    static get tableName(){
        return 'orders';
    }

    static get jsonSchema(){
        return {
            type: 'object',
            properties: {
                id: { type: 'integer' },
                date: {type: 'string', format: 'date-time'},
                cantidad: { type: 'integer' },
                estado: { type: 'boolean' },
                fkid_customer: { type: 'integer' },
                fkid_employee: { type: 'integer' }
            }
        }
    }
    static async getOrders(){
        return await Orders.query();
    }
    static async insert(data){
        return await Orders.query().insert(data);
    }
    static async update(id,data){
        return await Orders.query().patch(id, data);
    }
    static async delete(id){
        return await Orders.query().deleteById(id);
    }
}

module.exports = Orders;
