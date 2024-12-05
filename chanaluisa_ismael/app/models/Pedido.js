const { Model } = require('objection');//llamar al Model de la lib objetcion

class Pedido extends Model{ // crear herencia de modelo
    static get tableName(){
        return 'pedidos';
    }

    static get jsonSchema(){ // especifica la estructura de la tabla
        return{
            type: 'object' , //object para un dato, array para una lista
            required: ['fecha_pedido','total'], //campos requeridos

            properties: {
                id: { type: 'integer' },
                cliente_id: { type: 'integer' },
                fecha_pedido: { type: 'string', format: 'date' },
                total: { type: 'number' },
                created_at: { type: 'string', format: 'date-time' },
                updated_at: { type: 'string', format: 'date-time' },
                detalle: { type: 'string', minLength: 0, nullable: true },
                idproducto: { type: 'integer', nullable: true }
              },
        };

    }

    static async getPedidos() { //metodo para listar clientes 
        return await Pedido.query(); // select ' from clientes

    }

    static async insert(data) { // metodo paraisnertar clientes 
        return await Pedido.query().insert(data); // insert input clientes values .......
    }
    static async update(data, id) { // metodo para editar clientes
        return await Pedido.query().patch(id, data); // update set data where id = 0

    }
    static async delete(id) {
        // Verificar si hay pedidos asociados antes de eliminar el cliente
        const pedidos = await Pedido.query().where('cliente_id', id);
    
        if (pedidos.length > 0) {
          throw new Error('No se puede eliminar el cliente porque tiene pedidos asociados.');
        }
        return await Cliente.query().deleteById(id);
    }
}


module.exports = Pedido;