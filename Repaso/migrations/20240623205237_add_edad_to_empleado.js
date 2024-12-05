const { Model } = require('objection');

class Empleado extends Model {
    static get tableName() {
        return 'empleado'; // Nombre de la tabla en la base de datos
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['nombreem', 'apellido', 'fecha_nacimiento', 'email', 'salario'],
            properties: {
                id: { type: 'integer' },
                nombreem: { type: 'string', minLength: 1 },
                apellido: { type: 'string', minLength: 1 },
                fecha_nacimiento: { type: 'string', format: 'date' },
                direccion: { type: 'string' },
                telefono: { type: 'string' },
                email: { type: 'string', format: 'email', unique: true },
                salario: { type: 'number' },
                edad: { type: 'integer' }
            }
        };
    }

    static get relationMappings() {
        // Importar aquí si existen relaciones con otras tablas
        return {};
    }

    // Métodos estáticos para consultar, insertar, actualizar y eliminar empleados
    static async getEmpleados() {
        return await Empleado.query(); // SELECT * FROM empleado
    }

    static async insert(data) {
        return await Empleado.query().insert(data); // INSERT INTO empleado VALUES (data)
    }

    static async update(data, id) {
        await Empleado.query().patch(data).where({ id }); // UPDATE empleado SET data WHERE id = id
        return await Empleado.query().findById(id); // Devuelve el empleado actualizado
    }

    static async delete(id) {
        return await Empleado.query().deleteById(id); // DELETE FROM empleado WHERE id = id
    }
}

module.exports = Empleado;
