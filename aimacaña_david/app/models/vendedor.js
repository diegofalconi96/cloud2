const { Model } = require('objection');

class Vendedor extends Model {
    static get tableName() {
        return 'vendedor';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['nombres', 'apellidos', 'email'],
            properties: {
                id: { type: 'integer' },
                nombres: { type: 'string', minLength: 1 },
                apellidos: { type: 'string', minLength: 1 },
                celular: { type: 'string' },
                email: { type: 'string', format: 'email' }, 
                activo: { type: 'boolean' },
            }
        };
    }
    static async getVendedores(){ // metodo listar  Clientes
        return await Vendedor.query(); // es un select*from Customer
    }
    static async insert(data){ //metodo para insertar clientes
        return await Vendedor.query().insert(data); // es un insert into Customeer
    }
    static async update(data, id){//metodo para actualizar
        return await Vendedor.query().patch(id,data); //update set data where id=0
    }
    static async delete(id){
        return await Vendedor.query().deleteById(id)// delete from customer where id = 0
    }
}
module.exports=Vendedor;