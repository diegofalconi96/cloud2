/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {

    return knex.schema.table('productos', function(table){

        table.integer('cliente_id').unsigned().notNullable();
        table.foreign('cliente_id').references('registro.id');
    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {

    return knex.schema.table('productos', function(table){

        // Eliminar Columna

        table.dropColumn('cliente_id');

        // Eliminar Clave Foranea

        table.dropForeign('cliente_id');

    });
  
};
