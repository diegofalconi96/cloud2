const { format } = require('mysql2');
const {Model}=require('objection'); //llamar a model de laa libreria 

class Cliente extends Model { //creo la herencai de model
    // funcion para establecer los get y seter
    static get tableName(){ //especifica el nombre de la tabla
        return 'cliente';
    }
    static get jsonSchema(){ //especifica la estructura de una tabla
        return{
            type: 'object', //object pra un dato,  array pra una lista
            required:['nombres','apellidos','email'],
            properties:{
                id:{type:'integer'},
                nombres:{type:'string',minLength:1},
                apellidos:{type:'string',minLength:1},
                celular:{type: 'string'},
                email:{type:'string',format:'email'},
                
                
                
            }

        };
    }
    static async getClientes(){ // metodo listar  Clientes
        return await Cliente.query(); // es un select*from Customer
    }
    static async insert(data){ //metodo para insertar clientes
        return await Cliente.query().insert(data); // es un insert into Customeer
    }
    static async update(data, id){//metodo para actualizar
        return await Cliente.query().patch(id,data); //update set data where id=0
    }
    static async delete(id){
        return await Cliente.query().deleteById(id)// delete from customer where id = 0
    }
}
module.exports = Cliente;