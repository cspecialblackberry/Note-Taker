const notesRouter = require('express').Router();
const fs = require('fs');

notesRouter.get('/', (req, res) => {
    fs.readFile('./db/db.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
        } else {
            const allNotes = JSON.parse(data)
            res.json(allNotes)
        }
    })
})

notesRouter.post('/', (req, res) => {
    console.log(req.body)
    const { title, text, id } = req.body

    fs.readFile('./db/db.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
        } else {
            const allNotes = JSON.parse(data)
            const newNote = {
                title,
                text,
                id
            }
            allNotes.push(newNote)
            fs.writeFile('./db/db.json', JSON.stringify(allNotes), (err) => {
                if (err) {
                    console.log(err)
                }
            })
            res
        }
    })
})

module.exports = notesRouter