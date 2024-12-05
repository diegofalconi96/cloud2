/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('detalle_venta', table => {
        // Agregar la nueva columna cliente_id como clave foránea
        table.integer('producto_id').unsigned().notNullable()
            .references('id').inTable('producto').onDelete('CASCADE');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('detalle_venta', table => {
        // Deshacer los cambios: eliminar la columna cliente_id
        table.dropColumn('producto_id');
    });
};
