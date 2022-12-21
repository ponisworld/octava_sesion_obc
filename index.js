function siempreTrue() {
    return true;
}

function asincrona() {
    return new Promise(
        () => { 
            setTimeout(
                    () => { console.log('Hola soy una promesa')},
                    5000
                )
            }
        );
}

asincrona();

function* generarIndices() {
    let indice = 0;
    while (indice < 20) {
        indice = indice + 2;

        yield indice;
    } 
    return indice
}

const gen = generarIndices();


// Generando ids hasta 20
console.log(gen.next())

console.log(gen.next())

console.log(gen.next())

console.log(gen.next())

console.log(gen.next())

console.log(gen.next())

console.log(gen.next())

console.log(gen.next())

console.log(gen.next())

console.log(gen.next())


//Done true, y ya no genera más
console.log(gen.next())

