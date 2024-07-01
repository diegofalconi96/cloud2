const { format } = require('mysql2');
const {Model} = require('objection');//Llamar a Model de la lib objection

class Empleado extends Model{//Crear herencia de Model
    static get tableName(){//Especificar el nombre de la tabla
        return 'empleado';
    }
    static get jsonSchema(){//Especificar la estructura de la tabla
        return{
            type:'object', //object para un dato, array para una lista
            required: ['nombre_emp','email_emp'], //Especifica los campos que son obligatorios en la BDD 

            properties:{
                id: {type:'integer'},
                nombre: {type:'string',minLength:1},
                email: {type:'string',format:'email'},
                direccion: {type: 'string'}
            }
        }
    }

    static async getEmpleados(){//Metodo para listar Empleados
        return await Empleado.query(); //select * from Empleado
    }

    static async insert(data){//Metodo para insertar Empleado
        return await Empleado.query().insert(data); //insert into Empleado values ('','',...)
    }

    static async update(data,id){//Metodo para actualizar Empleado
        return await Empleado.query().update(id,data);//update set data where id = 1
    }

    static async delete(id){//Metodo para eliminar un Empleado
        return await Empleado.query().deleteById(id);//delete from Empleado where id = 1
    }

}

module.exports = Empleado;