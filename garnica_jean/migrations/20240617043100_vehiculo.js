/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('vehiculo', table => {
        table.increments('id').primary();
        table.string('marca').notNullable();
        table.string('modelo').notNullable();
        table.date('año').notNullable();
        table.string('color').notNullable();
        table.enu('estado', ['activo', 'inactivo', 'reparacion']).defaultTo('activo');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('vehiculo');
};
