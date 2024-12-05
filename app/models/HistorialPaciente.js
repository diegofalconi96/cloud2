//llama a la lib OBJECTION
const {Model} = require('objection'); 
//creo una herencia de Model
class historialPaciente extends Model{
    static get tableName(){
        //con este metodo puedo saber a que tabla estoy apuntando
        return 'historialPaciete';
    } 
    static get jsonSchema(){
        //especifica la estructura de la tabla
        return{
            type: 'object',  //esto es un array (listar) algún dato
            required: ['descripcion'], //campos requeridos
            properties: { //estructura de los campos
                id: {type: 'integer'},
                id_paciente: {type: 'integer'},
                id_doctor: {type: 'integer'},
                descripcion: {type: 'string'},
            }
        };
    }
    //metodo para listar Pacientes
    static async getHistorialPacientes(){
        return await historialPaciente.query(); //esta se convertiria en un select * from paciente
    }
    //metodo para insertar pacientes
    static async insert(data){
        return await historialPaciente.query().insert(data); //insert into paciente values ..... (ESTOY INSERTANDO DATOS)
    }
    //metodo para editar pacientes
    static async update(data, id){ //los parametros son por los datos y el id
        return await historialPaciente.query().patch(id, data); //update set data where id = 0
    }
    //metodo para eliminar PAciente
    static async delete(id){
        return await historialPaciente.query().deleteById(id); //delete from paciente where id = 0
    }
}
//exportar la clase PAciente para ocuparlo dese otro lugar
module.exports = historialPaciente;