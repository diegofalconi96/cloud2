const { format } = require('mysql2');
const { Model, mixin } = require('objection');

class Supplier extends Model {
    static get tableName(){
        return 'suppliers';
    }

    static get jsonSchema(){
        return {
            type: 'object',
            required: ['name', 'lastName'],
            properties: {
                id: { type: 'integer' },
                name: { type: 'string', minLength: 1 },
                direccion: { type: 'string', minLength: 1 },
                telefono: { type:'string', minLength: 1 },
                email: { type:'string', format: 'email'},
                estado: { type: 'boolean' },
                date: {type: 'string', format: 'date-time'},
                age: { type: 'integer' },
                lastName: { type: 'string', minLength:1 }
            }
        }
    }
    static async getSupplier(){
        return await Supplier.query();
    }
    static async insert(data){
        return await Supplier.query().insert(data);
    }
    static async update(id,data){
        return await Supplier.query().patch(id, data);
    }
    static async delete(id){
        return await Supplier.query().deleteById(id);
    }
}

module.exports = Supplier;
