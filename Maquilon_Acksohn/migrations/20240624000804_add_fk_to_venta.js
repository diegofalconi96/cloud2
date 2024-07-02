/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('venta', function(table){
        table.integer('cliente_id').unsigned();
        table.integer('producto_id').unsigned();
        table.foreign('cliente_id').references('id').inTable('cliente');
        table.foreign('producto_id').references('id_prod').inTable('producto');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('venta', function(table){
        table.dropForeign('cliente_id');
        table.dropForeign('producto_id');
        table.dropColumn('cliente_id');
        table.dropColumn('producto_id');
    });
};
