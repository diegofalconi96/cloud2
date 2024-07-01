/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('employee', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('rol').notNullable();
        table.decimal('salario').notNullable();
        table.boolean('estado').notNullable();
        table.timestamp('date', true);
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('employee');
};
