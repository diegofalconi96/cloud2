const { Model } =require('objection'); //llamar model de la libreria objection (hereda las caracteristica para realizar un modelo)

class Product extends Model { //creo la herencia del modelo
    static get tableName(){ // especifica el nombre de la tabla
        return 'products';
    }

    static get jsonSchema(){ // especifica la estructura de la tabla
        return {
            type: 'object',//object para un dato,array para una lista
            required: ['name','price'],//campos requeridos
            properties: { // estructura de los campos
                id: {type: 'integer'},
                name: {type: 'string', minLength: 1},
                price: { type: 'number' }, // Usamos 'number' para representar números decimales
                stock: { type: 'integer', minimum: 0, default: 0 },
                active: { type: 'boolean', default: true },
                description: { type: ['string', 'null'] },
                release_date: { type: ['string', 'null'], format: 'date' },
                categoria: {type: 'string' , minLength: 1 }       

            }
        };
    }

    static async getProducts(){ // metodo para listar 
        return await Product.query(); // select * from customer
    }

    static async insert(data){// metodo para insertar 
        return await Product.query()
            .insert(data); //insert into customer values ....
    }

    static async update(data,id){ //metodo para editar 
        return await Product.query()
            .patch(id,data); //update set data where id = 0
    }

    static async delete(id){ //metodo para eliminar 
        return await Product.query()
            .deleteById(id); //delete from customer where id = 0

    }

}

module.exports = Product;