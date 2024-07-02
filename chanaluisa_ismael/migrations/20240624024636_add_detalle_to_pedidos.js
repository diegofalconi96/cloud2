/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    //crear nueva columna
    return knex.schema.table('pedidos', function(table){
    table.string('detalle');
  });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
        return knex.schema.table('pedidos',function(table){
        table.dropColumn('detalle');
    });
  
};
