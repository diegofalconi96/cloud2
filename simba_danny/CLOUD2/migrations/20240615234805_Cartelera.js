/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("Cartelera", (table) => {
        table.increments("id_cartelera").primary();
        table.timestamp("fecha_hora").notNullable();
        table.decimal("precio", 10, 2).notNullable();
        table.string("idioma").notNullable();
        table.string("sala").notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("Cartelera");
};
