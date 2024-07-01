/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('suppliers', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('direcciom').notNullable();
        table.string('telefono').notNullable();
        table.string('email').notNullable();
        table.boolean('estado').notNullable();
        table.timestamp('date', true);
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('suppliers');
};
