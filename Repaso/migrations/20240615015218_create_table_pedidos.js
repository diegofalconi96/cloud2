/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('pedidos', table => {
        table.increments('id').primary();
        table.string('supplier_name').notNullable();
        table.string('contact_email').notNullable();
        table.string('contact_phone');
        table.date('order_date').notNullable();
        table.string('product_name').notNullable();
        table.integer('quantity').notNullable();
        table.decimal('price', 10, 2).notNullable();
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('pedidos');
};

