/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('carga', table => {
        table.increments('id').primary();
        table.string('descripcion').notNullable();
        table.float('peso_kg').notNullable();
        table.string('origen').notNullable();
        table.string('destino').notNullable();
        table.timestamp('fecha_entrega').notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('carga');
};
