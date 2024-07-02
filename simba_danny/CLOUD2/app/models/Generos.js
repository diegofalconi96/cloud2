const {Model}=require('objection'); //Llamar a Model de la lib objetcion
class Generos extends Model{//creo herencia de model
    static get tableName(){//especificas el nombre de la tabla
        return 'Generos';
    }
    static get jsonSchema(){//especifica la estructura de la tabla
        return{
            type: 'object',//object para un dato, array para una lista
            required:['nombre','descripcion','popularidad'],// campos requeridos
            properties:{ //estructura de los campos

                nombre:{type:'string',minLength:1},
                descripcion:{type:'string',minLength:1},
                popularidad:{type:'integer'}

            }
        }
    }
    static async getGeneros(){//metodo para listar Generos 
        return await Generos.query();//select*from Generos 

    }
    static async insert(data){//metodos para insertar generos
        return await Generos.query().insert(data);//inser into generos values ....
    }
    static async update(data,id){//metodos para editar genero
        return await Generos.query().patchAndFetchById(id,data);//update set data where id=0
    }
    static async delete(id){
        return await Generos.query().deleteById(id);//delete from generos ehere id=0
    }
}
module.exports=Generos;