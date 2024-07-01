/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('historialPaciete', table => {
    table.increments('id').primary();
    table.integer('id_paciente').unsigned().notNullable();
    table.integer('id_doctor').unsigned().notNullable();
    table.string('descripcion').notNullable();
    //claves foráneas
    table.foreign('id_paciente').references('id').inTable('paciente').onDelete('CASCADE').onUpdate('CASCADE');
    table.foreign('id_doctor').references('id').inTable('doctor').onDelete('CASCADE').onUpdate('CASCADE');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  //posible error por el nombre de los parámetros al borrar
  return knex.schema.dropTable('historialPaciente');
};
