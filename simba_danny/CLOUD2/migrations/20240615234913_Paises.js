/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("Paises",(table)=>{
    table.increments("id_pais").primary();
    table.string("nombre").notNullable();
    table.string("codigo_iso").notNullable();
    table.string("region").notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("Paises");
};
