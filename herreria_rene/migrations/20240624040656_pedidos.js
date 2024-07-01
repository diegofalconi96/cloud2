/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {

    return knex.schema.createTable('pedidos', table => {
        table.increments('id').primary(); 
        table.date('fecha').notNullable();
        table.string('estado').defaultTo('pendiente');
        table.decimal('total', 10, 2).notNullable();
    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {

    return knex.schema.dropTable('pedidos')
  
};
