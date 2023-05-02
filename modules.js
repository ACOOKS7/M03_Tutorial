// When require a file it auto runs that file
const {people, ages}= require('./people')


console.log(people,ages);

const os = require('os');

//win32 C:\Users\areia
console.log(os.platform(),os.homedir())

