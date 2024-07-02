const {Model}=require('objection'); //Llamar a Model de la lib objetcion
class Peliculas extends Model{//creo herencia de model
    static get tableName(){//especificas el nombre de la tabla
        return 'Peliculas';
    }
    static get jsonSchema(){//especifica la estructura de la tabla
        return{
            type: 'object',//object para un dato, array para una lista
            required:['titulo','duracion','año','actores'],// campos requeridos
            properties:{ //estructura de los campos
                
                titulo:{type:'string',minLength:1},
                duracion:{type:'integer'},
                año:{type:'integer'},
                descripcion:{type:'string',minLength:1},
                actores:{type:'string',minLength:1}
            }
        }
    }
    static async getPeliculas(){//metodo para listar Peliculas 
        return await Peliculas.query();//select*from Peliculas 

    }
    static async insert(data){//metodos para insertar Peliculas
        return await Peliculas.query().insert(data);//inser into Peliculas values ....
    }
    static async update(data,id){//metodos para editar genero
        return await Peliculas.query().patchAndFetchById(id,data);//update set data where id=0
    }
    static async delete(id){
        return await Peliculas.query().deleteById(id);//delete from Peliculas ehere id=0
    }
}
module.exports=Peliculas;