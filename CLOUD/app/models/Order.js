const { Model } =require('objection'); //llamar model de la libreria objection (hereda las caracteristica para realizar un modelo)

class Order extends Model { //creo la herencia del modelo
    static get tableName(){ // especifica el nombre de la tabla
        return 'orders';
    }

    static get jsonSchema(){ // especifica la estructura de la tabla
        return {
            type: 'object',//object para un dato,array para una lista
            required: ['deProducts'], // Campos requeridos
            properties: {
                id: { type: 'integer' },
                total_amount: { type: 'number' }, // Tipo 'number' para manejar números decimales
                order_date: { type: 'string', format: 'date-time' }, // Formato de fecha y hora ISO 8601
                shipping_date: { type: ['string', 'null'], format: 'date-time' }, // Formato de fecha y hora ISO 8601 que puede ser nulo
                shipping_address: { type: ['string', 'null'] }, // Tipo 'string' que puede ser nulo
                direccion: {type: 'string'},
                deProducts: { type: 'integer' } // Tipo 'integer' para la clave foránea
                
            }
        };
    }

    static async getOrders(){ // metodo para listar clientes
        return await Order.query(); // select * from customer
    }

    static async insert(data){// metodo para insertar clientes
        return await Order.query()
            .insert(data); //insert into customer values ....
    }

    static async update(data,id){ //metodo para editar cliente
        return await Order.query()
            .patch(id,data); //update set data where id = 0
    }

    static async delete(id){ //metodo para eliminar cliente
        return await Order.query()
            .deleteById(id); //delete from customer where id = 0

    }

}

module.exports = Order;