/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('venta',table =>{
        table.integer('cliente_id').unsigned().notNullable()
        .references('id').inTable('cliente')
        .onDelete('CASCADE').onUpdate('CASCADE');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('venta',table =>{
        table.dropColumn('cliente_id');
    });
};
