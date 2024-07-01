/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('venta',table =>{
        table.integer('producto_id').unsigned().notNullable()
        .references('id_prod').inTable('producto')
        .onDelete('CASCADE').onUpdate('CASCADE');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('venta',table =>{
        table.dropColumn('producto_id');
    });
};
