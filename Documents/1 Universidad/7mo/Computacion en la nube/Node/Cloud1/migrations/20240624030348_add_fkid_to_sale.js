/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('sale', function(table){
        table.integer('fkid_product').unsigned().notNullable();
        table.foreign('fkid_product').references('id_product').inTable('product').onDelete('CASCADE').onUpdate('CASCADE');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('sale', function(table){
        // Drop foreign key constraint first
        table.dropForeign([], 'sale_fkid_product_foreign'); // Replace 'sale_fkid_product_foreign' with the actual constraint name

        // Then drop the column
        table.dropColumn('fkid_product');
    });
};