//llama a la lib OBJECTION
const {Model} = require('objection'); 
//creo una herencia de Model
class Doctor extends Model{
    static get tableName(){
        //con este metodo puedo saber a que tabla estoy apuntando
        return 'doctor';
    } 
    static get jsonSchema(){
        //especifica la estructura de la tabla
        return{
            type: 'object',  //esto es un array (listar) algún dato
            required: ['nombre','apellido'], //campos requeridos
            properties: { //estructura de los campos
                id: {type: 'integer'},
                nombre: {type: 'string'},
                apellido: {type: 'string'},
                especialidad: {type: 'string'},
                direccion: { type: 'string'},
                telefono: { type: 'string'},
                correo_electronico: { type: 'string', format: 'email'}
            }
        };
    }
    //metodo para listar Pacientes
    static async getDoctores(){
        return await Doctor.query(); //esta se convertiria en un select * from paciente
    }
    //metodo para insertar pacientes
    static async insert(data){
        return await Doctor.query().insert(data); //insert into paciente values ..... (ESTOY INSERTANDO DATOS)
    }
    //metodo para editar pacientes
    static async update(data, id){ //los parametros son por los datos y el id
        return await Doctor.query().patch(id, data); //update set data where id = 0
    }
    //metodo para eliminar PAciente
    static async delete(id){
        return await Doctor.query().deleteById(id); //delete from paciente where id = 0
    }
}
//exportar la clase PAciente para ocuparlo dese otro lugar
module.exports = Doctor;