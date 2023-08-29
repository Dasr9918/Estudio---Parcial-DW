//ctrl+p - En la terminal colocar >Quokka.js Start on Current File
//Ctrl+k para correr el Quokka.js

//REPASO PARCIAL 1 DW

// <Var - Let - Const>
/*
var nombre = 'Daniel'
const apellido = 'Santana'
let edad = 34

if ( 1 == 1) {
    var nombre = 'Carlos'
    const apellido = 'Salamanca'
    let edad = 10
    console.log(nombre, apellido, edad)
}

console.log(nombre, apellido, edad)
*/

//<Template Strings>
//Se busca como backtick ( `)
/*
const myString =  `
    Hello
    World
`
console.log( myString)

const collegeType = 'Universidad'
const collegeName = 'Autonoma'

console.log(  `${ collegeType} ${ collegeName} `)
*/

//<Objects>
//Es una coleccion de propiedades.
//Una propiedad es una asociacion entre un nombre (o clave) y un valor.
//Forma 1 de crear un objeto:
/*
const myCar = new Object(); //Creacion del objeto.
myCar.make = 'Ford'; //Atributos del objeto
myCar.model = 'Mustang';
myCar.year = 1969;
*/
//Forma 2 de crear un objeto
/*
const myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: '1969',
    city: {
        name: 'Colombia',
        latLng: {
            lat: 123,
            lng: 456
        }
    }
};
*/

//<Shallow copy vs deep copy>
//Realizar una copia al arreglo.
/*
const myArray = [1, 2, 3, 4];
myArray.push(5)

const mySecondArray = myArray;
mySecondArray.push(6)

console.log(myArray, mySecondArray)
*/

//<Arrays>
/*
const myArray = [1, 2, 3, 4];
myArray.push(5)

const mySecondArray = myArray;
mySecondArray.push(6)

console.log(myArray, mySecondArray)
*/

//<Arrays Functions>
//Estan en Github

//<Spread Operator>
//Se usa para crear copias profundas.
/*
const myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: '1969',
    city: {
        name: 'Colombia',
        latLng: {
            lat: 123,
            lng: 456
        }
    }
};

const mySecondCar = { ...myCar};
mySecondCar.make = 'Toyota'

console.log(myCar, mySecondCar)
*/

//<Destructuring Assignment>
//Se usa para desempacar propiedades de un objeto.
/*
const [a, b] = [10, 20]

const {name: university, city} = {name: 'Autonoma',city: 'Cali'}

console.log(a)
console.log(university)
*/

//<Functions>
//Conjunto de declaraciones que realizan una tarea o calcula una valor.
//Deben tener una entrada y una salida que tengan relacion con la tarea.
//Forma 1:
/*
function oldRegularFunction (a, b) {
    return a + b
}
//Forma 2:
const newRegularFunction = function (a ,b) {
    return a + b
}
//Forma 3:
const arrowFunction = (a ,b) => {
    return a + b
}

console.log( oldRegularFunction(2, 3))
console.log( newRegularFunction(2, 3))
console.log( arrowFunction(2, 3))
*/

//<Imports and Exports>
//Import: se usa para importar enlaces activos de solo lectura a otro modulo.
//Se denominan vinculaciones activas.
/*
import { animals } from "./animals";

console.log( animals )
*/
//Export: se utiliza para exportar valores desde un modulo
//animals.js (partiendo del archivo)
/*
export const animals = [
    {
        breed: 'Canine',
        name: 'Angel'
    },
    {
        breed: 'Canine',
        name: 'Angel'
    },
    {
        breed: 'Feline',
        name: 'Orion'
    },
    {
        breed: 'Feline',
        name: 'Luna'
    },
    {
        breed: 'Bird',
        name: 'Chicken'
    },
    {
        breed: 'Bird',
        name: 'Tucan'
    },
]
*/

//<Promises>
//Representa la falla eventual de una operacion asincronica(no ocurren al mismo tiempo).
//1.
/*
const promesa = new Promise ( (resolve, reject) => {
    //TODO
    resolve(); //Si la promesa se cumple
    reject(); //Si la promesa no se cumple
});

promesa.then( (data) => {
    //TODO
    console.log(data)
}).catch ( err => {
    console.log( err )
})
*/
//2.
/*
const getPromesa = () => {
    return new Promise( (resolve, reject) => {
        resolve('Hello World');
    })    
}

getPromesa()
.then( data => {
    console.log(data)
})
.catch( error => {
    console.error( error)
});
*/
//3.
/*
const getPromesa = () => {
    return new Promise( (resolve, reject) => {
        reject('Internal Error');
    })    
}

getPromesa()
.then( data => {
    console.log(data)
})
.catch( error => {
    console.error( error)
});
*/

//<Async-Await>
//Habilitar la asincronia en el comportamiento basado en promesas
/*
const getImagen = async () => {
    try {
        const apikey = 'Ns4NdhIX2lHEqu9xdgsozNuiNyuy937q';
        const resp = await fetch( `http://api.giphy.com/v1/gifs/random?api_key=${ apikey }`);
        const { data } = await resp.json();
        return data
    } catch(error) {
        console.error( error )
    }
}

getImagen();
*/

//<Selective Structures>
//Se usan para decisiones logicas.
//Una condicion es eveluada y dependiendo de su resultado se genera otra.
//1.
/*
switch ( condition ) {
    case vaue1:
        //TODO
        breack;
    case vaue2:
        //TODO
        breack;
    default:
        //TODO
        break;
}
*/
//2.
/*
if ( condition ) {
    //TODO
}
*/
//3.
/*
if ( condition ) {
    //TODO
} else {
    //TODO
}
*/

//<Null Check Ternary>
//Es una forma eficiente de verificar si una variable o expresion es nula.
//Se usa al momento de tomar una decision.
/*
const myObject = {
    key: "first"
}

let result = false;
if ( myObject.key2 ) {
    result = true;
}

result= myObject.key2 ? true : false;

const result2 = myObject.key2 || 'Nothin';

const result3 = myObject.latLng?.lat || 'Empty';

console.log(result, result2, result3)
*/

//<Loop>
//Se utiliza para repetir lo mismo, hasta que se cumple con la condicion asignada.
//1.
/*
do {
    //TODO
} while( condition )
*/
//2.
/*
while( condition ) {
    //TODO
} 
*/
//3.
/*
const myObject = {a: 1, b: 2, c: 3 };

for (const key in object) {
    console.log(`${ key } : ${ myObject[key]} `);
}
*/
