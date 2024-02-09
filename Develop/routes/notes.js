const notesRouter = require ('express').Router();

notesRouter.get('/', (req, res) => {
    console.log('hi')
})

notesRouter.post('/', (req, res) => {
    console.log(req.body)
})

module.exports = notesRouter