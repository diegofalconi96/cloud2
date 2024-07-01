const {Model}=require('objection'); //Llamar a Model de la lib objetcion
class Carteleras extends Model{//creo herencia de model
    static get tableName(){//especificas el nombre de la tabla
        return 'Cartelera';
    }
    static get jsonSchema() {
        return {
            type: 'object', 
            required: ['fecha_hora', 'precio', 'idioma', 'sala','clasificacion','fkid_pelicula'], // campos requeridos
            properties: { // estructura de los campos
               
                fecha_hora: { type: 'string', format: 'date' }, // ISO 8601 format
                precio: { type: 'number' }, // Using 'number' for decimal values
                idioma: { type: 'string', minLength: 1 },
                sala: { type: 'string', minLength: 1 },
                clasificacion: { type: 'string', minLength: 1 },
                fkid_pelicula: { type: 'integer' } 
            }
        };
    }
    
    static async getCarteleras(){//metodo para listar Carteleras 
        return await Carteleras.query();//select*from Carteleras 

    }
    static async insert(data){//metodos para insertar Carteleras
        return await Carteleras.query().insert(data);//inser into Carteleras values ....
    }
    static async update(data,id){//metodos para editar Cartelera
        return await Carteleras.query().patchAndFetchById(id,data);//update set data where id=0
    }
    static async delete(id){
        return await Carteleras.query().deleteById(id);//delete from Carteleras ehere id=0
    }
}
module.exports=Carteleras;