const notesRouter = require ('express').Router();
const fs = require('fs');

notesRouter.get('/', (req, res) => {
    console.log('hi')
    //fs.readfile
    fs.readFile('./db/db.json', 'utf-8', (err, data) => {
        if(err){
            console.log(err)
        }else{
            const allNotes = JSON.parse(data)
            res.json(allNotes)
        }
    })
})

notesRouter.post('/', (req, res) => {
    console.log(req.body)
    //fs readfile and writefile
})

module.exports = notesRouter