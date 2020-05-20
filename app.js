const logger = require('./logger') ;
const path = require('path');
const os = require('os');
const fs = require('fs');

const tp1 = require('./tp1');
//la unica reponsabilidad de app.js es CORRER LA APPLICATION y LLAMAR A LOS DIFERENTES MODULOS que estan defindos dentro de lam isma

let pathObject = path.parse(__filename);
logger.log('path:', pathObject);

let freeMem = os.freemem();
let totalMem = os.totalmem();
logger.log('free Mem:', freeMem);
logger.log('total Mem:',totalMem);

let rootDir = fs.readdirSync('./');
console.log('Sync:', rootDir);

fs.readdir('./', (error, files) => {
    (error) ? console.log(error) : console.log('Asymc',files);
});

console.log('----- TP 1 -------------------------------------------------------- xd');
tp1.ex1('./');
tp1.ex2('./');
tp1.ex3('./');
tp1.ex4('t', './');



