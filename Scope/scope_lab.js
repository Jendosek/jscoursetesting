// Глобальна область
var globalVar = "Я глобальна змінна";
let globalLet = "Я також глобальна, але з областю видимості let";
const globalConst = "Я глобальна константа";

{
    // Блокова область
    var blockVar = "Я змінна з блочною областю видимості";
    let blockLet = "Я let з блочною областю видимості";
    const blockConst = "Я const з блочною областю видимості";
}

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

1
2
3
//Block Scope
// console.log(blockVar);
// console.log(blockLet);

function show(){
    var functionVar = "Я змінна з блоковою областю видимості";
    let functionLet = "Я let з блоковою областю видимості";
    const functionConst = "Я const з блоковою областю видимості";
    }
    show();
    
    console.log(functionVar); // Генерує ReferenceError
    console.log(functionLet); // Генерує ReferenceError
    console.log(functionConst); // Генерує ReferenceError