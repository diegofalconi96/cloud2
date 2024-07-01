    const { Model } = require('objection');

    class Customer extends Model{
        static get tableName(){
            return 'customer';
        }

        static get jsonSchema(){
            return{
                type: 'object',
                required: ['name', 'email'],

                propierties: {
                    id: { type: 'integer' },
                    name: { type: 'string', minLength: 1 },
                    email: { type: 'string', format: 'email' },
                    date: { type: 'string', format: 'date-time'},
                    age: { type: 'integer'}
                }
            };
        }

        static async getCustomer(){
            return await Customer.query();
        }

        static async insert(data){
            return await Customer.query()
            .insert(data);
        }

        static async update(data, id){
            return await Customer.query()
            .patch(id, data);

        }

        static async delete(id){
            return await Customer.query()
            deleteById(id);
        }
    }

module.exports = Customer;