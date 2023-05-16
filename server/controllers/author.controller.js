const Author = require('../models/author.model');    /* this is new */
module.exports = {
    findAllAuthors : (req, res) => {
        Author.find()
            .then((allAuthors) =>  res.json(allAuthors))
            .catch((err) => res.json({ message: 'Something went wrong', error: err }));
    }, 
     
    findOneAuthor : (req, res) => {
        Author.findOne({ _id: req.params.id })
            .then(oneAuthor =>  res.json(oneAuthor))
            .catch((err) => res.json({ message: 'Something went wrong', error: err }));
    },
     
    createNewAuthor : (req, res) => {
        Author.create(req.body)
            .then(newAuthor =>res.json(newAuthor))
            .catch((err) => res.json({ message: 'Something went wrong', error: err }));
    },
    updateExistingAuthor : (req, res) => {
        Author.findOneAndUpdate({ _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then(updatedAuthor => res.json(updatedAuthor))
            .catch((err) => res.json({ message: 'Something went wrong', error: err }));
    },
    deleteAnExistingAuthor : (req, res) => {
        Author.deleteOne({ _id: req.params.id })
            .then(result => res.json(result))
            .catch((err) => res.json({ message: 'Something went wrong', error: err }));
    }
}


