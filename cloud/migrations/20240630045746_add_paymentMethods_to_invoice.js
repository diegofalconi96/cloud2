/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('invoice', function(table) {
        // Agregar la columna 
        table.integer('dePaymentMethods').unsigned();
    
        // Configurar la clave foránea
        table.foreign('dePaymentMethods').references('id').inTable('paymentMethods');
      });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('invoice', function(table) {
        // Eliminar la clave foránea
        table.dropForeign('dePaymentMethods');
    
        // Eliminar la columna 
        table.dropColumn('dePaymentMethods');
      });
  
};
