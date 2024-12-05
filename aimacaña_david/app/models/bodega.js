const { Model } = require('objection');

class Bodega extends Model {
    static get tableName() {
        return 'bodega';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['nombre', 'ubicacion'],
            properties: {
                id: { type: 'integer' },
                nombre: { type: 'string', minLength: 1 },
                ubicacion: { type: 'string', minLength: 1 },
                descripcion: { type: 'string' },
            }
        };
    }
    static async getBodegas(){ // metodo listar  Clientes
        return await Bodega.query(); // es un select*from Customer
    }
    static async insert(data){ //metodo para insertar clientes
        return await Bodega.query().insert(data); // es un insert into Customeer
    }
    static async update(data, id){//metodo para actualizar
        return await Bodega.query().patch(id,data); //update set data where id=0
    }
    static async delete(id){
        return await Bodega.query().deleteById(id)// delete from customer where id = 0
    }
}

module.exports = Bodega;