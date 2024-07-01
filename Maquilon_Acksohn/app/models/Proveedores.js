const { format } = require('mysql2');
const {Model} = require('objection'); 

class Proveedor extends Model { 
    static get tableName() { 
        return 'proveedor';
    }

    static get jsonSchema() { 
        return {
            type: 'object', 
            required: ['nombre_prov','email_prov'], 

            properties: {   
                id_prov:{type: 'integer'},
                nombre_prov:{type: 'string'},
                email_prov:{type: 'string'},
                empresa_prov:{type: 'string'},
                vehiculo:{type: 'string'}
            }
        };
    }

    static async getProveedores (){ 
        return await Proveedor.query(); 
    }

    static async insert(data){
        return await Proveedor.query().insert(data);
    }

    static async update(data,id_prov){ 
        return await Proveedor.query().patch(id_prov,data);  
    }

    static async delete(id_prov){ 
        return await Proveedor.query().deleteById(id_prov); 
    }
}

module.exports=Proveedor; 