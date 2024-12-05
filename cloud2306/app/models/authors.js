//llamar a la libreria objection
const { format } = require('mysql');
const {Model} = require ('objection');

class Authors extends Model{ //creo herencia de model
    static get tableName(){ //especifica el nombre de la tabla
        return 'authors' 
    }

    static get jsonSchema(){
        return{
            type: 'object',
            required: ['name', 'email'],
            properties: { //estructura de los campos
                id: {type: 'integer'},
                name: {type: 'string', minLength: 1 },
                email: {type: 'string', minLength: 1 }                                
            }
        };
    }

    static async getAuthors(){ //metodo para listar generos
        return await Authors.query(); //select * from genres
    }

    static async insert(data){ //metodo para insertar generos
        return await Authors.query()
        .insert(data); //insert into genres values...
    }

    static async update(id, data){ // el orden de los parámetros debe ser id primero y luego data
        return await Authors.query().patchAndFetchById(id, data); // actualiza y retorna el objeto actualizado
    }

    static async delete(id){ //metodo para eliminar un genero
        return await Authors.query().deleteById(id); //delete from customer where id=?
    }
}

//exportar la clase genres para ocuparlo desde otro lugar
module.exports = Authors;