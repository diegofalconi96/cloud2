/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('producto', function(table) {
        table.integer('id_proveedor').unsigned().references('id_proveedor').inTable('proveedor').onDelete('CASCADE');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('producto', function(table) {
        table.dropForeign('id_proveedor'); // Eliminar la restricción de clave foránea
        table.dropColumn('id_proveedor');  
    });
};
