/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) 
{
    return knex.schema.createTable('factura', table =>
        {
            table.increments('id_factura').primary();
            table.date('fecha_emision').notNullable();
            table.decimal('monto_total', 10, 2).notNullable();
        }
    )
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) 
{
    return knex.schema.dropTable('factura')
};
