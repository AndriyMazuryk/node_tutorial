const path = require('path');

// system specific separator ('/'(unix-like) or '\'(Windows)
console.log(path.sep);

// normalizes separators (remove unnecessary separators)
const filePath = path.join('/content/', 'subfolder', 'test.txt');
console.log(filePath);

// filename
const base = path.basename(filePath);
console.log(base);

// absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);
