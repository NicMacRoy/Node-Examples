const fs = require('fs');

fs.writeFileSync('notes.txt', 'My name is Nick');
fs.appendFileSync('notes.txt',' and I enjoy Node.JS')