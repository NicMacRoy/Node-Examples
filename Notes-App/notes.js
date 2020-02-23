const fs = require('fs');
const chalk = require('chalk');
const getNotes = () => {
    return "Your notes....";
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);

    if(note){
        console.log(chalk.inverse.bold.red(note.title))
        console.log(note.body)
    }else{
        console.log("No note found!")
    }
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes);
    } else {
        console.log("Note title taken!")
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

const listNotes = () => {
    const notes = loadNotes();
    notes.forEach(note => {
        console.log("Title: " + note.title + " Body: " + note.body)
    });
}

const removeNotes = (title) => {
    try {
        const notes = loadNotes();
        const newNotes = notes.filter((note) => {
            return title !== note.title;
        });
        if (notes.length == newNotes.length) {
            console.log('No note found!');
        } else {
            console.log('Note removed!');
            saveNotes(newNotes);
        }
    } catch (e) {

    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote: readNote
}