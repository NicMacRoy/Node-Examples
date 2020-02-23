
const chalk = require('chalk');
const yargs = require('yargs');
const notesUtility = require('./notes.js');

yargs.version('1.1.0');

//Create add command

yargs.command({
    command: 'add',
    desribe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Description',
            demandOption: true,
            type:'string'
        }
    },
    handler: (argv) => {
        notesUtility.addNote(argv.title, argv.body)
    }
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notesUtility.removeNotes(argv.title);
    }
});

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notesUtility.readNote(argv.title);
    }
});

//add, remove, read, list
// Create remove command
yargs.command({
    command: 'list',
    describe: 'listing all note',
    handler: () => {
        notesUtility.listNotes();
    }
});



yargs.parse();