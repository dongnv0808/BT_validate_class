import { RegexClass } from "./regexClass";

let classRex = new RegexClass();
let validClass: string[] = ['C0318G', 'M0318G', 'P0323A'];
for(let clas of validClass){
    let isValidate: boolean = classRex.validate(clas);
    console.log(`Class: ${clas} | ${isValidate}`)
}