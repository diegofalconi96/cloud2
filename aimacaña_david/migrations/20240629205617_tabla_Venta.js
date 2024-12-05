/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('venta',table => {
        table.increments('id').primary();
        table.integer('cliente_id').unsigned().notNullable().references('id').inTable('cliente').onDelete('CASCADE');
        table.integer('vendedor_id').unsigned().notNullable().references('id').inTable('vendedor').onDelete('CASCADE');
        table.date('fecha').notNullable();
        table.decimal('total',10,2).notNullable();    
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('venta');
};
