/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('pedidos', function(table){
        table.increments('id').primary();
        table.integer('cliente_id').unsigned().notNullable().references('id').inTable('clientes').onDelete('CASCADE');
        table.date('fecha_pedido').notNullable();
        table.decimal('total', 10, 2).notNullable();
        table.timestamps(true, true);
      });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('pedidos');
  
};
