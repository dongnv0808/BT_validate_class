"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const regexClass_1 = require("./regexClass");
let classRex = new regexClass_1.RegexClass();
let validClass = ['C0318G', 'M0318G', 'P0323A'];
for (let clas of validClass) {
    let isValidate = classRex.validate(clas);
    console.log(`Class: ${clas} | ${isValidate}`);
}
