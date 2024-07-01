const Books = require('../models/books');

// Crear una función para listar los libros
const listBook = async (req, res) => {
    try {
        const books = await Books.getBooks(); // Llamado a la función para listar libros
        res.json(books); // Parsear a JSON y retornar la respuesta
    } catch (error) {
        res.status(500).json({ error: error.message }); // Manejar cualquier error y devolver un mensaje de error
    }
};

// Crear una función para insertar un libro
const insertBook = async (req, res) => {
    try {
        const book = await Books.insert(req.body); // Insertar el nuevo libro y obtener el resultado
        res.status(201).json(book); // Devolver el libro insertado con el estado 201 (Created)
    } catch (error) {
        res.status(500).json({ error: error.message }); // Manejar cualquier error y devolver un mensaje de error
    }
};

// Crear una función para actualizar un libro
const updateBook = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const data = req.body;

        if (Array.isArray(data)) {
            throw new Error('Expected an object but received an array.');
        }

        const book = await Books.update(id, data); // Actualizar el libro y obtener el resultado
        res.json(book); // Devolver el libro actualizado
    } catch (error) {
        console.log('Error:', error);
        res.status(500).json({ error: error.message }); // Manejar cualquier error y devolver un mensaje de error
    }
};

// Crear una función para eliminar un libro
const deleteBook = async (req, res) => {
    try {
        const book = await Books.delete(req.params.id); // Eliminar el libro
        res.json(book); // Devolver el libro eliminado
    } catch (error) {
        res.status(500).json({ error: error.message }); // Manejar cualquier error y devolver un mensaje de error
    }
}

module.exports = {
    listBook,
    insertBook,
    updateBook,
    deleteBook,
};
