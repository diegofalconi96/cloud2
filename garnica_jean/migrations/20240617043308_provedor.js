/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('provedor', table => {
        table.increments('id').primary();
        table.string('nombre').notNullable();
        table.string('email').notNullable().unique();
        table.string('telefono').notNullable();
        table.string('direccion').notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('provedor');
};
