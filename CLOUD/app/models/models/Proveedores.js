const { format } = require('mysql');
const { Model } = require('objection');

class Proveedores extends Model {
  static get tableName() {
    return 'proveedores'; // Nombre de la tabla en la base de datos
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'edad'], // Campos requeridos en el esquema JSON
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1 },
        email: { type: 'string', format: 'email' },
        phone: { type: 'string' },
        edad: { type: 'integer' }
      }
    };
  }

  static async getProveedores() {
    return await Proveedores.query(); // SELECT * FROM proveedores usando el modelo Proveedores
  }

  static async insert(data) {
    return await Proveedores.query().insert(data); // INSERT INTO proveedores VALUES (data) usando el modelo Proveedores
  }

  static async update(data, id) {
    return await Proveedores.query().patch(data).where({ id }); // UPDATE proveedores SET data WHERE id = id usando el modelo Proveedores
  }

  static async delete(id) {
    return await Proveedores.query().deleteById(id); // DELETE FROM proveedores WHERE id = id usando el modelo Proveedores
  }
}

module.exports = Proveedores;
