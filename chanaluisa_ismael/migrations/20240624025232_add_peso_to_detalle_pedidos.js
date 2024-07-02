/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    //crear nueva columna
    return knex.schema.table('detalle_pedidos', function(table){
    table.string('peso');
  });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
        return knex.schema.table('detalle_pedidos',function(table){
        table.dropColumn('peso');
    });
  
};
