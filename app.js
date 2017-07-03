console.log("this is the app");

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];

if(command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if(note) {
    console.log("note created");
    console.log('title ' +  note.title);
    console.log(`body: ${note.body}`);


  } else {
    console.log("note title taken");
  }
} else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`printitng ${allNotes.length} note(s).`)
  allNotes.forEach((note) => {
    console.log('title ' +  note.title);
    console.log(`body: ${note.body}`);

  });
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if(note){
    console.log('note found');
    console.log('title ' +  note.title);
    console.log(`body: ${note.body}`);
  } else {
    console.log('note not found');

  }
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
} else {
  console.log('command note recoganised');
}

// var res = notes.addNote();
// console.log(res);

// var add = notes.add(123,6);
// console.log(add);

// var user = os.userInfo();

// fs.appendFile('greetings.txt', 'hello ' + user.username + '!');

// fs.appendFile('greetings.txt', `hello ${user.username} your are ${notes.age}`);
