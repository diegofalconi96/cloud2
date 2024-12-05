/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("Generos", (table) => {
        table.increments("id_genero").primary();
        table.string("nombre").notNullable();
        table.text("descripcion").notNullable();
        table.integer("popularidad").notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("Generos")
};
