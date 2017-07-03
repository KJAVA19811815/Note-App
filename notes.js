console.log('start');

var addNote = (title, body) => {
  console.log('adding note', title, body);
};

var getAll = () => {
  console.log('getting all notes');
};

var readNote = (title) => {
  console.log('read note ', title);
}

var removeNote = (title) => {
  console.log('remove note ', title);
}

module.exports = {
  addNote,
  getAll,
  readNote,
  removeNote
};




// console.log(module);

  // module.exports.add = function(a,b) {
    // return a + b;
  // }
