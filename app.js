const logger = require('./logger') ;
const path = require('path');
const os = require('os');
const fs = require('fs');

//la unica reponsabilidad de app.js es CORRER LA APPLICATION y LLAMAR A LOS DIFERENTES MODULOS que estan defindos dentro de lam isma

let pathObject = path.parse(__filename);
logger.log('path:', pathObject);

let freeMem = os.freemem();
let totalMem = os.totalmem();
logger.log('free Mem:', freeMem);
logger.log('total Mem:',totalMem);

let rootDir = fs.readdirSync('./');
console.log(rootDir);

fs.readdir('./', (error, files) => {
    (error) ? console.log(error) : console.log(files);
});