/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {

    // Escojemos la tabla del customero

    return knex.schema.table('registro', function(table){
        table.string('estado');
    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {

    return knex.schema.table('registro', function(table){
        table.dropColumn('estado');
    });
  
};
