/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('Cartelera', function(table) {
        table.integer('fkid_pelicula').unsigned().notNullable();//se asigna un nuevo campo para añadir la claves foraneas 
        //Llamamos a la id_pelicula y lo colocamos en el campo creado usando on delete cascada para eliminar y update cascada para actualizar en casacada
        table.foreign('fkid_pelicula').references('id_pelicula').inTable('Peliculas').onDelete('CASCADE').onUpdate('CASCADE');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('Cartelera', function(table) {
        //se borra la clave foranea
        table.dropForeign('fkid_pelicula');
        table.dropColumn('fkid_pelicula');
    });
};
