/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('invoice', function(table) {
        // Agregar la columna 
        table.integer('deSales').unsigned();
    
        // Configurar la clave foránea
        table.foreign('deSales').references('id').inTable('sales');
      });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('invoice', function(table) {
        // Eliminar la clave foránea
        table.dropForeign('deSales');
    
        // Eliminar la columna 
        table.dropColumn('deSales');
      });
  
};