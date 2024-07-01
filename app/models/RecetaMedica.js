//llama a la lib OBJECTION
const {Model} = require('objection'); 
//creo una herencia de Model
class RecetaMedica extends Model{
    static get tableName(){
        //con este metodo puedo saber a que tabla estoy apuntando
        return 'recetaMedica';
    } 
    static get jsonSchema(){
        //especifica la estructura de la tabla
        return{
            type: 'object',  //esto es un array (listar) algún dato
            required: ['medicamento'], //campos requeridos
            properties: { //estructura de los campos
                id: {type: 'integer'},
                id_paciente: {type: 'integer'},
                id_doctor: {type: 'integer'},
                fecha_receta: {type: 'string', format: 'date-time'},
                medicamento: {type: 'string'},
                dosis: { type: 'string'},
                indicaciones: { type: 'string'}
            }
        };
    }
    //metodo para listar Pacientes
    static async getRecetasMedicas(){
        return await RecetaMedica.query(); //esta se convertiria en un select * from paciente
    }
    //metodo para insertar pacientes
    static async insert(data){
        return await RecetaMedica.query().insert(data); //insert into paciente values ..... (ESTOY INSERTANDO DATOS)
    }
    //metodo para editar pacientes
    static async update(data, id){ //los parametros son por los datos y el id
        return await RecetaMedica.query().patch(id, data); //update set data where id = 0
    }
    //metodo para eliminar PAciente
    static async delete(id){
        return await RecetaMedica.query().deleteById(id); //delete from paciente where id = 0
    }
}
//exportar la clase PAciente para ocuparlo dese otro lugar
module.exports = RecetaMedica;