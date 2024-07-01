//llama a la lib OBJECTION
const {Model} = require('objection'); 
//creo una herencia de Model
class Cita extends Model{
    static get tableName(){
        //con este metodo puedo saber a que tabla estoy apuntando
        return 'cita';
    } 
    static get jsonSchema(){
        //especifica la estructura de la tabla
        return{
            type: 'object',  //esto es un array (listar) algún dato
            required: ['motivo_consulta'], //campos requeridos
            properties: { //estructura de los campos
                id: {type: 'integer'},
                id_paciente: {type: 'integer'},
                id_docto: {type: 'integer'},
                fecha_cita: {type: 'string', format: 'date-time'},
                hora_cita: { type: 'string', pattern: '^([01]?[0-9]|2[0-3]):[0-5][0-9]$' }, // formato HH:mm
                motivo_consulta: {type: 'string'},
            }
        };
    }
    //metodo para listar Pacientes
    static async getCitas(){
        return await Cita.query(); //esta se convertiria en un select * from paciente
    }
    //metodo para insertar pacientes
    static async insert(data){
        return await Cita.query().insert(data); //insert into paciente values ..... (ESTOY INSERTANDO DATOS)
    }
    //metodo para editar pacientes
    static async update(data, id){ //los parametros son por los datos y el id
        return await Cita.query().patch(id, data); //update set data where id = 0
    }
    //metodo para eliminar PAciente
    static async delete(id){
        return await Cita.query().deleteById(id); //delete from paciente where id = 0
    }
}
//exportar la clase PAciente para ocuparlo dese otro lugar
module.exports = Cita;