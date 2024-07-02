/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("Peliculas", (table) => {
        table.increments("id_pelicula").primary();
        table.string("titulo").notNullable();
        table.integer("duracion").notNullable();
        table.integer("año").notNullable();
        table.string("descripcion").notNullable();
        table.text("actores").notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("Peliculas")
};
