const { Model } = require('objection');

class Venta extends Model {
    static get tableName() {
        return 'venta';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['cliente_id', 'vendedor_id', 'fecha'],
            properties: {
                id: { type: 'integer' },
                cliente_id: { type: 'integer' },
                vendedor_id: { type: 'integer' },
                fecha: { type: 'string', format: 'date' },
                total: { type: 'number' },
            }
        };
    }
    static async getVentas(){ // metodo listar  Clientes
        return await Venta.query(); // es un select*from Customer
    }
    static async insert(data){ //metodo para insertar clientes
        return await Venta.query().insert(data); // es un insert into Customeer
    }
    static async update(data, id){//metodo para actualizar
        return await Venta.query().patch(id,data); //update set data where id=0
    }
    static async delete(id){
        return await Venta.query().deleteById(id)// delete from customer where id = 0
    }
}

module.exports = Venta;