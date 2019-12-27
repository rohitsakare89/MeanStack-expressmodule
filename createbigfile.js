const fs = require('fs');
const file = fs.createWriteStream('./big.file');

for(let i=0; i<= 100000; i++) {
  file.write("Watch for changes on filename. The callback listener will be called each time the file  is accessed. Second argument is optional by default it is { persistent: true, interval:  5007 }. The listener gets two arguments the current stat object and the previous stat  object\n");
}
file.write("Reached to end of file");
file.end();
