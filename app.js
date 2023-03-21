// TODO: Enable strict mode
"use strict";
// TODO: Fix the following parameter list
function parseToJSON(data) {
  // TODO: Add a try/catch block to
  // attempt to convert 'data' to JSON
  try {
    return JSON.parse(data); 
  } catch (err) {
    console.error(err);
    return null;
    // TODO: if an exception is raised
    // print the error to the console
    // and return null
  }
}

let failData = "<h1>Hello World!</h1>";
let correctedData = '{"sentence" : "Hello World!"}';
let passData = JSON.stringify({ success: true });

console.log(parseToJSON(failData));
console.log(parseToJSON(correctedData));
console.log(parseToJSON(test));
console.log(parseToJSON(passData));
