//llamar a la libreria objection
const { format } = require('mysql');
const {Model} = require ('objection');

class Genres extends Model{ //creo herencia de model
    static get tableName(){ //especifica el nombre de la tabla
        return 'genres' 
    }

    static get jsonSchema(){
        return{
            type: 'object',
            required: ['name', 'description'],
            properties: { //estructura de los campos
                id: {type: 'integer'},
                name: {type: 'string', minLength: 1 },
                description: {type: 'string', minLength: 1 }                                
            }
        };
    }

    static async getGenres(){ //metodo para listar generos
        return await Genres.query(); //select * from genres
    }

    static async insert(data){ //metodo para insertar generos
        return await Genres.query()
        .insert(data); //insert into genres values...
    }

    static async update(id, data){ // el orden de los parámetros debe ser id primero y luego data
        return await Genres.query().patchAndFetchById(id, data); // actualiza y retorna el objeto actualizado
    }

    static async delete(id){ //metodo para eliminar un genero
        return await Genres.query().deleteById(id); //delete from customer where id=?
    }
}

//exportar la clase genres para ocuparlo desde otro lugar
module.exports = Genres;