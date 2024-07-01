/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) 
{
    return knex.schema.createTable('detalle_factura', table =>
        {
            table.increments('id').primary();
            table.integer('cantidad').notNullable();
            table.decimal('precio_unitario', 10, 2).notNullable();
            table.decimal('subtotal', 10, 2).notNullable();
        }
    )
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) 
{
    return knex.schema.dropTable('detalle_factura')
};
