const {Model}=require('objection'); //Llamar a Model de la lib objetcion
class Directores extends Model{//creo herencia de model
    static get tableName(){//especificas el nombre de la tabla
        return 'Directores';
    }
    static get jsonSchema(){//especifica la estructura de la tabla
        return{
            type: 'object',//object para un dato, array para una lista
            required:['nombre','apellido','origen','edad'],// campos requeridos
            properties:{ //estructura de los campos
                
                nombre:{type:'string',minLength:1},
                apellido:{type:'string',minLength:1},
                origen:{type:'string',minLength:1},
                edad:{type:'integer'}

            }
        }
    }
    static async getDirectores(){//metodo para listar Directores 
        return await Directores.query();//select*from Directores 

    }
    static async insert(data){//metodos para insertar Directores
        return await Directores.query().insert(data);//inser into Directores values ....
    }
    static async update(data,id){//metodos para editar genero
        return await Directores.query().patchAndFetchById(id,data);//update set data where id=0
    }
    static async delete(id){
        return await Directores.query().deleteById(id);//delete from Directores ehere id=0
    }
}
module.exports=Directores;