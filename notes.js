const { Module } = require("module");
const fs = require('fs')


function getNotes() {
    return "Your Name";
}


const readNote =(title)=> {
    const notes = loadNotes();
    const askingnote = notes.find(note => note.title === title);
    if (!askingnote) {
        console.log("Note is not available");
    } else {
        console.log(askingnote.body);
    }
}


const addNote = function (title, body) {
    const notes = loadNotes();
    // const duplicateNotes = notes.filter(function (note) {
    //     //if this return value is true note will be added in the duplicatenotes array
    //     return note.title === title;
    // });
    const duplicateNote =notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log('New Note Added');
    } else {
        console.log("Note title taken");
    }


    
}

const listNotes = () => {
    const notes = loadNotes();

    notes.forEach( note=> {
        console.log(note.title);
    });
}


const saveNotes = function (notes) {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        const data = JSON.parse(dataJSON);
        return data;
     }
    catch (e) {
        return [];
    }
}


const removeNote=function (title){
    const notes = loadNotes();
    const remainingNotes = notes.filter(function (note) {
        ///return note.title!==title;
        if (note.title === title) return false;
        return true;
    });
    if (notes.length === remainingNotes.length) {
        console.log("Title not found");
    } else {
        saveNotes(remainingNotes);
        console.log(`successfully removed title: ${title} from note list.`);
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};