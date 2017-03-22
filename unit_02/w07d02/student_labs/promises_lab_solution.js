'use strict';

const fs = require('fs');

let inFile = process.argv[2];

// fs.readFile(inFile, { encoding: 'utf8' }, (error, content) => {
//   if (error) {
//     console.error(error);
//   }
//
//   // 'Billy\nJames\nNick\n' > ['Billy', 'James', 'Nick']
//
//   let lines = content.split('\n');
//
//   // clean up the array by removing the empty line
//   lines.pop();
//
//   lines.forEach((line) => {
//     console.log('Hello, ' + line + '!');
//   });
// });
//SOLUTION
// create a promise...read the file..resolve the content of the file after...then grab the content of your file (line 29 content is a placeholder)
// fs gives a callback function to let you know it's been read...it passes through the then function...
// split...pop...hello
// We need a Promise cauz reading the file may take a while. Then callback happens (triggers)
let readTheFilePromise = new Promise(function(resolve, reject){
  fs.readFile(inFile, { encoding: 'utf8' }, function(error, content) {
    resolve(content);
    if (error);
    // reject("line 28 error ", error);
  });
});

readTheFilePromise.then(function(result){
  return result;
})
.then(function(result){
  let lines = result.split('\n');
  return lines;
})
.then(function(lines){
  lines.pop();
  return lines;
})
.then(function(lines){
  lines.forEach(function(line){
    console.log('Hello, ' + line + '!');
  });
})
.catch(function(error){
  console.log("an error occured line 49", error);
});
