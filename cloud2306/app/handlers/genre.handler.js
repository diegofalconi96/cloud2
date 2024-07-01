const Genres = require('../models/genres');
//crear una funcion para llamado a select del modelo
const listGenre = async (req, res) => {
    try {
        //llamado a funcion de select
        const genre = await Genres.getGenres();
        res.json(genre); //parsea a json y retorna la respuesta
    } catch (error) {
        res.status(500).json( {error: error.message});
    }
}

const insertGenre = async (req, res) => {
    try {
        const genre = await Genres.insert(req.body); // Inserta el nuevo género y obtén el resultado
        res.status(201).json(genre); // Devuelve el género insertado con el estado 201 (Created)
    } catch (error) {
        res.status(500).json({ error: error.message }); // Maneja cualquier error y devuelve un mensaje de error
    }
};

const updateGenre = async (req, res) => {
    try {
        const genre = await Genres.update(req.params.id, req.body); // el id primero y luego el data
        res.json(genre);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteGenre = async(req, res) => {
    try {
        const genre = await Genres.delete(req.params.id);
        //200 por dafault
        res.json(genre);
    } catch (error) {
        res.status(500).json( {error: error.message});
    }
}

module.exports = {
    listGenre,
    insertGenre,
    updateGenre,
    deleteGenre,
};