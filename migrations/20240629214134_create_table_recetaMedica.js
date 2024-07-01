/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('recetaMedica', table => {
        table.increments('id').primary();
        table.integer('id_paciente').unsigned().notNullable();
        table.integer('id_doctor').unsigned().notNullable();
        table.date('fecha_receta').notNullable();
        table.string('medicamento').notNullable();
        table.string('dosis').notNullable();
        table.string('indicaciones').notNullable();
        
        // Claves foráneas
        table.foreign('id_paciente').references('id').inTable('paciente').onDelete('CASCADE').onUpdate('CASCADE');
        table.foreign('id_doctor').references('id').inTable('doctor').onDelete('CASCADE').onUpdate('CASCADE');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('recetaMedica');
};
