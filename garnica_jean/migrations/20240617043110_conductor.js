/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('conductor', table => {
        table.increments('id').primary();
        table.string('nombre').notNullable();
        table.string('email').notNullable().unique();
        table.string('empresa').notNullable().unique();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('conductor');
};
