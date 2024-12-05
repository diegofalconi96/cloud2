/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('invoice', function(table) {
        // Agregar la columna deCustomer
        table.integer('deCustomer').unsigned();
    
        // Configurar la clave foránea
        table.foreign('deCustomer').references('id').inTable('customer');
      });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('invoice', function(table) {
        // Eliminar la clave foránea
        table.dropForeign('deCustomer');
    
        // Eliminar la columna deCustomer
        table.dropColumn('deCustomer');
      });
  
};