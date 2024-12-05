/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('products',table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.decimal('price', 8, 2).notNullable();
        table.integer('stock').notNullable().defaultTo(0);
        table.boolean('active').notNullable().defaultTo(true);
        table.text('description').nullable();
        table.date('release_date').nullable(); /**fecha de lanzamiento */
        table.timestamps(true, true);
        
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('products')
};