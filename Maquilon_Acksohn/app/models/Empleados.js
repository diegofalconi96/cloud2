const { format } = require('mysql2');
const {Model} = require('objection'); 

class Empleado extends Model { 
    static get tableName() { 
        return 'empleado';
    }

    static get jsonSchema() { 
        return {
            type: 'object', 
            required: ['nombre_emp','email_emp'], 

            properties: {   
                id_emp:{type: 'integer'},
                nombre_emp:{type: 'string'},
                email_emp:{type: 'string'},
                telefono:{type: 'string'}
            }
        };
    }

    static async getEmpleados (){ 
        return await Empleado.query(); 
    }

    static async insert(data){
        return await Empleado.query().insert(data);
    }

    static async update(data,id_emp){ 
        return await Empleado.query().patch(id_emp,data);  
    }

    static async delete(id_emp){ 
        return await Empleado.query().deleteById(id_emp); 
    }
}

module.exports=Empleado; 