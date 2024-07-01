const { Model } =require('objection'); //llamar model de la libreria objection (hereda las caracteristica para realizar un modelo)

class Invoice extends Model { //creo la herencia del modelo
    static get tableName(){ // especifica el nombre de la tabla
        return 'invoice';
    }

    static get jsonSchema(){ // especifica la estructura de la tabla
        return {
            type: 'object',//object para un dato,array para una lista
            required: ['dePaymentMethods','deSales','deCustomer'],//campos requeridos
            properties: { // estructura de los campos
                id: {type: 'integer'},
                invoice_number: { type: 'string' }, // Campo invoice_number como cadena
                total_amount: { type: 'number' }, // Campo total_amount como número
                fecha: {type: ['string', 'null'], format: 'date'},
                deSales: { type: 'integer' }, // Clave foránea de Sales como entero
                dePaymentMethods: { type: 'integer' }, // Clave foránea de PaymentMethods como entero
                deCustomer: { type: 'integer' } 
                    

            }
        };
    }

    static async getInvoices(){ // metodo para listar clientes
        return await Invoice.query(); // select * from customer
    }

    static async insert(data){// metodo para insertar clientes
        return await Invoice.query()
            .insert(data); //insert into customer values ....
    }

    static async update(data,id){ //metodo para editar cliente
        return await Invoice.query()
            .patch(id,data); //update set data where id = 0
    }

    static async delete(id){ //metodo para eliminar cliente
        return await Invoice.query()
            .deleteById(id); //delete from customer where id = 0

    }

}

module.exports = Invoice;