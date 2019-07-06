const _ = require("lodash");

let x = {"nombre" : "jaime"};
let y = {"apodo" : "mitocode"};
let z = [
    {"nombre" : "jaime", "apellido" :  "medina", "edad" : 20},
    {"nombre" : "luis", "apellido" :  "peña", "edad" : 25},
];

console.log(_.assign(x,y));