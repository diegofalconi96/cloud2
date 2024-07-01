const Authors = require('../models/authors');
//crear una funcion para llamado a select del modelo
const listAuthor = async (req, res) => {
    try {
        //llamado a funcion de select
        const author = await Authors.getAuthors();
        res.json(author); //parsea a json y retorna la respuesta
    } catch (error) {
        res.status(500).json( {error: error.message});
    }
}

const insertAuthor = async (req, res) => {
    try {
        const author = await Authors.insert(req.body); // Inserta el nuevo género y obtén el resultado
        res.status(201).json(author); // Devuelve el género insertado con el estado 201 (Created)
    } catch (error) {
        res.status(500).json({ error: error.message }); // Maneja cualquier error y devuelve un mensaje de error
    }
};

const updateAuthor = async (req, res) => {
    try {
        const author = await Authors.update(req.params.id, req.body); // el id primero y luego el data
        res.json(author);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteAuthor = async(req, res) => {
    try {
        const author = await Authors.delete(req.params.id);
        //200 por dafault
        res.json(author);
    } catch (error) {
        res.status(500).json( {error: error.message});
    }
}

module.exports = {
    listAuthor,
    insertAuthor,
    updateAuthor,
    deleteAuthor,
};