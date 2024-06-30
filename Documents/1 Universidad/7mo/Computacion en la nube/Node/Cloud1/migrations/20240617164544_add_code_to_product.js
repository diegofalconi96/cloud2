/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
//Agregar una columna
exports.up = function(knex) {
    return knex.schema.table('product', function(table){
      //Definir un campo para agregarlo
      table.integer('code');
  
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  //Eliminar una columna
  exports.down = function(knex) {
    return knex.schema.table('product', function(table){
      table.dropColumn('code');
    });
  };
  