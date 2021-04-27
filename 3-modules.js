// CommonJs, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
//const names = require('./4-names.js');
const { john, peter } = require('./4-names.js');
const sayHi = require('./5-utils.js');
const data = require('./6-alternative-flavor.js');
//console.log(data);
require('./7-mind-grenade');

/*sayHi('susan');
//sayHi(names.john);
//sayHi(names.peter);
sayHi(john);
sayHi(peter);*/
