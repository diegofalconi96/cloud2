const { format } = require('mysql2');
const {Model} = require('objection'); 

class Venta extends Model { 
    static get tableName() { 
        return 'venta';
    }

    static get jsonSchema() { 
        return {
            type: 'object', 
            required: ['cantidad_vent','total'], 

            properties: {   
                id_vent:{type: 'integer'},
                cantidad_vent:{type: 'integer'},
                total:{type: 'number'},
                cliente_id:{type: 'integer'},
                producto_id:{type: 'integer'}
            }
        };
    }

    static async getVentas (){ 
        return await Venta.query(); 
    }

    static async insert(data){
        return await Venta.query().insert(data);
    }

    static async update(data,id_vent){ 
        return await Venta.query().patch(id_vent,data);  
    }

    static async delete(id_vent){ 
        return await Venta.query().deleteById(id_vent); 
    }
}

module.exports=Venta; 