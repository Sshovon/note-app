const { demandOption } = require('yargs');
const yargs = require('yargs');

const noteUtilites = require('./notes.js')


yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note details',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        noteUtilites.addNote(argv.title, argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note from the list',
    builder: {
        title: {
            describe: 'title of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        noteUtilites.removeNote(argv.title); 
    }
})

yargs.command({
    command: 'list',
    describe: 'List all your notes',
    handler() {
        noteUtilites.listNotes();
    }
})

yargs.command({
    command: 'read',
    describe: 'read a specific note',
    builder: {
        title: {
            describe: 'find note using existing title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        noteUtilites.readNote(argv.title);
    }
})


yargs.parse();