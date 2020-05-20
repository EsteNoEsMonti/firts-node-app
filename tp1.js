const path = require('path');
const fs = require('fs');

const ex1 = (direction) => {
    fs.readdir(direction, (error, files) => {
        (error) ? console.log(error) : console.log('- Ex 1: ', files); 
    });
}

const ex2 = (direction) => {
    fs.readdir(direction, (error, files) => {
        (error) ? console.log(error) : console.log(`- Ex 2: ${files}`); 
    });
}

const ex3 = (direction) => {
    // let reverseFiles = fs.readdir(direction).reverse(); //pucha que no me sale
    let reverseFiles = fs.readdirSync(direction).reverse(); //no pregunten solo disfruten
    console.log('- Ex 3 Reverse Files: ', reverseFiles);
}

const ex4 = (char, direction) => {
    let files = fs.readdirSync(direction);
    let count = 0;

    files.map( (file) => {
        if ( file.charAt(0) == char ) {
            count++;
        }
    });

    if (count == 0) {
        console.log('- Ex 4 The route does not have a file with initial char -> ', char);
    } else {
        console.log('- Ex 4 The route has: ', count, ' files with initial char: ',char, ' :D');
    }
}

module.exports.ex1 = ex1;
module.exports.ex2 = ex2;
module.exports.ex3 = ex3;
module.exports.ex4 = ex4;

/*
First Node App
1. Create a method to get all the files inside a given path
2. Create a method to print all the files
3. Create a method to inverse sort and print the files of a given path
4. Create a method to get the amount of files starting with one letter

Quería trabajar todo de forma Async pero soy malardo en esto
*/
