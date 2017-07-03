console.log("this is the app");

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];
// console.log('PROCESS ', process.argv);
console.log('YARGS ', argv);

if(command === 'add') {
  notes.addNote(argv.title, argv.body)
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.readNote(argv.title);
} else if (command === 'remove') {
  notes.removeNote(argv.title);
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
