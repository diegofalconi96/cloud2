/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('proveedor', table => {
        table.increments('id_prov').primary();
        table.string('nombre_prov').notNullable();
        table.string('email_prov').notNullable().unique();
        table.string('empresa_prov').notNullable();
        table.timestamps(true, true);
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('proveedor');
};
