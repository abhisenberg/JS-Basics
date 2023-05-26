function printName(name){
    console.log(`Hello, ${name}!`);
}

printName();

function add(a, b) {
    return a+b;
}

let res = add(1,2);
if(typeof res === 'number'){
    console.log('num type');
}