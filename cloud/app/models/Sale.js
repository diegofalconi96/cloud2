const { Model } =require('objection'); //llamar model de la libreria objection (hereda las caracteristica para realizar un modelo)

class Sale extends Model { //creo la herencia del modelo
    static get tableName(){ // especifica el nombre de la tabla
        return 'sales';
    }

    static get jsonSchema(){ // especifica la estructura de la tabla
        return {
            type: 'object',//object para un dato,array para una lista
            required: ['deOrders'],//campos requeridos
            properties: { // estructura de los campos
                id: { type: 'integer' },
                total_amount: { type: 'number' }, // Campo total_amount como número
                sale_date: { type: 'string', format: 'date-time' }, // Campo sale_date como fecha y hora
                active: { type: 'boolean' }, // Campo active como booleano
                deOrders: { type: 'integer' }, // Clave foránea de Orders como entero
                fecha: { type: 'string', format: 'date-time' } // Campo fecha como fecha y hora
            }
        };
    }

    static async getSales(){ // metodo para listar clientes
        return await Sale.query(); // select * from customer
    }

    static async insert(data){// metodo para insertar clientes
        return await Sale.query()
            .insert(data); //insert into customer values ....
    }

    static async update(data,id){ //metodo para editar cliente
        return await Sale.query()
            .patch(id,data); //update set data where id = 0
    }

    static async delete(id){ //metodo para eliminar cliente
        return await Sale.query()
            .deleteById(id); //delete from customer where id = 0

    }

}

module.exports = Sale;