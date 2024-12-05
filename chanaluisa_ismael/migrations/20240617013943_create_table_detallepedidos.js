/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('detalle_pedidos',function(table){
        table.increments('id').primary();
        table.integer('pedido_id').unsigned().notNullable().references('id').inTable('pedidos').onDelete('CASCADE');
        table.integer('producto_id').unsigned().notNullable().references('id').inTable('producto').onDelete('CASCADE');
        table.integer('cantidad').notNullable();
        table.decimal('precio', 10, 2).notNullable();
        table.timestamps(true, true);
      });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('detallepedidos');
  
};
