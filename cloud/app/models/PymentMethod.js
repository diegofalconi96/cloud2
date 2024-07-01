const { Model } =require('objection'); //llamar model de la libreria objection (hereda las caracteristica para realizar un modelo)

class PymentMethod extends Model { //creo la herencia del modelo
    static get tableName(){ // especifica el nombre de la tabla
        return 'paymentMethods';
    }

    static get jsonSchema(){ // especifica la estructura de la tabla
        return {
            type: 'object',//object para un dato,array para una lista
            required: ['name','type'],//campos requeridos
            properties: { // estructura de los campos
                id: {type: 'integer'},
                name: {type: 'string', minLength: 1},
                type: {type: 'string', minLength: 1},
                card_number: { type: ['string', 'null'] }, // Número de tarjeta (puede ser nulo)
                expiry_date: { type: ['string', 'null'] }, // Fecha de caducidad (puede ser nulo)
                monto: {type: 'number'}

            }
        };
    }

    static async getPymentMethods(){ // metodo para listar clientes
        return await PymentMethod.query(); // select * from customer
    }

    static async insert(data){// metodo para insertar clientes
        return await PymentMethod.query()
            .insert(data); //insert into customer values ....
    }

    static async update(data,id){ //metodo para editar cliente
        return await PymentMethod.query()
            .patch(id,data); //update set data where id = 0
    }

    static async delete(id){ //metodo para eliminar cliente
        return await PymentMethod.query()
            .deleteById(id); //delete from customer where id = 0

    }

}

module.exports = PymentMethod;