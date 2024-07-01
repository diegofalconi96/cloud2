/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('detalle_factura', function(table) {
        table.integer('id_producto').unsigned().references('id_producto').inTable('producto').onDelete('CASCADE');
        table.integer('id_factura').unsigned().references('id_factura').inTable('factura').onDelete('CASCADE');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('detalle_factura', function(table) {
        table.dropForeign('id_producto');
        table.dropForeign('id_factura');
        table.dropColumn('id_producto');
        table.dropColumn('id_factura');
    });
};
