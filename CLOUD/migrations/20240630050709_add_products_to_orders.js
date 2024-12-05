/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('orders', function(table) {
        // Agregar la columna 
        table.integer('deProducts').unsigned();
    
        // Configurar la clave foránea
        table.foreign('deProducts').references('id').inTable('products');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('orders', function(table) {
        // Eliminar la clave foránea
        table.dropForeign('deProducts');
    
        // Eliminar la columna 
        table.dropColumn('deProducts');
    });
  
};
