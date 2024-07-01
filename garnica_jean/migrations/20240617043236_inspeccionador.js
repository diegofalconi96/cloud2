/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('inspeccionador', table => {
        table.increments('id').primary();
        table.string('nombre').notNullable();
        table.string('email').notNullable().unique();
        table.enu('cargo', ['supervisor', 'ayudante', 'jefe']).defaultTo('ayudante');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('inspeccionador');
};
