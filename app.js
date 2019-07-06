const os = require('os');
const fs = require('fs');

let cpu = os.cpus();
// console.log(cpu);
let sistema  = os.platform();
// console.log(sistema);
let usuario = os.hostname();
// console.log(usuario);

fs.appendFile('mitocode.txt', `Primer codigo  ${JSON.stringify(cpu)}`, (error) => {
    if(error){
        console.log("error en mi archivo");
    }
})