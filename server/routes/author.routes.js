const AuthorController = require('../controllers/author.controller');  //Import the code from Code Block 1
module.exports = (app) => {
    app.get('/api/authors', AuthorController.findAllAuthors);
    app.get('/api/authors/:id', AuthorController.findOneAuthor);
    app.post('/api/authors', AuthorController.createNewAuthor);
    app.patch('/api/authors/:id', AuthorController.updateExistingAuthor);
    app.delete('/api/authors/:id', AuthorController.deleteAnExistingAuthor);
}
