/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {

    return knex.schema.table('pedidos', function(table){

        table.integer('producto_id').unsigned().notNullable();
        table.foreign('producto_id').references('productos.id');
    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {

    return knex.schema.table('pedidos', function(table){

        // Eliminar Columna

        table.dropColumn('producto_id');

        // Eliminar Clave Foranea

        table.dropForeign('producto_id');

    });
  
};
