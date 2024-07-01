const {Model}=require('objection'); //Llamar a Model de la lib objetcion
class Paises extends Model{//creo herencia de model
    static get tableName(){//especificas el nombre de la tabla
        return 'Paises';
    }
    static get jsonSchema(){//especifica la estructura de la tabla
        return{
            type: 'object',//object para un dato, array para una lista
            required:['nombre','codigo_iso','region'],// campos requeridos
            properties:{ //estructura de los campos
                
                nombre:{type:'string',minLength:1},
                codigo_iso:{type:'string',minLength:1},
                region:{type:'string',minLength:1}

            }
        }
    }
    static async getPaises(){//metodo para listar Paises 
        return await Paises.query();//select*from Paises 

    }
    static async insert(data){//metodos para insertar Paises
        return await Paises.query().insert(data);//inser into Paises values ....
    }
    static async update(data,id){//metodos para editar genero
        return await Paises.query().patchAndFetchById(id,data);//update set data where id=0
    }
    static async delete(id){
        return await Paises.query().deleteById(id);//delete from Paises ehere id=0
    }
}
module.exports=Paises;