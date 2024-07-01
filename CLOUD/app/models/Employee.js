const { format } = require('mysql2');
const { Model, mixin } = require('objection');

class Employee extends Model {
    static get tableName(){
        return 'employee';
    }

    static get jsonSchema(){
        return {
            type: 'object',
            required: ['name', 'lastName'],
            properties: {
                id: { type: 'integer' },
                name: {type: 'string', minLength: 1},
                rol: {type: 'string', minLength: 1},
                salario: {type:'number'},
                estado: {type: 'boolean'},
                age: { type: 'integer' },
                lastName: {type: 'string', minLength:1}
            }
        }
    }
    static async getEmployee(){
        return await Employee.query();
    }
    static async insert(data){
        return await Employee.query().insert(data);
    }
    static async update(id,data){
        return await Employee.query().patch(id, data);
    }
    static async delete(id){
        return await Employee.query().deleteById(id);
    }
}

module.exports = Employee;