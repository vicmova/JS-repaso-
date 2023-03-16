'use strict';

/* 
const edad = window.prompt('Qué edad tienes');

edad >= 18 ? console.log('HELLO! 😜')
          : console.log('BYE!!!! 💋');

          const acceso  = edad >= 21 ? console.log('👌')
                                   : console.log('🚑');

*/

/*

'use strict';

let hasDriversLicense = false;
const passTest =  true;

if( passTest ) hasDriversLicense = true;

if( hasDriversLicense ) console.log( 'I can drive.');

//const interface = 'Audio';

*/


// ------------------------------------- functions

//function === machines!


/* 

function logUser(){

    console.log('recording time.');

}

logUser();
logUser();
logUser();


*/
/*
function soundProcessor(Osc, LFO){

    console.log(Osc, LFO);

    const synth = `Your synth has: 3 ${Osc} Osc and 6 ${LFO} LFO`;
    
    return synth;

}


//soundProcessor( 'R.Hordijk','Buchla' );
const synthUser = soundProcessor( 'R.H', 'D.B');

console.log(synthUser);

const synths = soundProcessor('Buchla', 'Make Noise');
console.log(synths);

*/
/*
function soundObject( Oscillator, FunctionGenerator, ResonantFilter, Matrix ){

    console.log( Oscillator, FunctionGenerator, ResonantFilter, Matrix );

    const synth = `Your synth has: three ${Oscillator} oscillators, one ${FunctionGenerator} funcion generator, two ${ResonantFilter} resonant filters and one ${Matrix} matrix.`;

    return synth;


}

const synthUser1 = soundObject('Rob Hordijk', 'Donald Buchla', 'Serge', 'EMS');
console.log(synthUser1);

console.log('--------------------------------------------------------------------------------');

const synthUser2 = soundObject('Make noise', 'Moog', 'ADDAC', 'Serge', 'Mutable Instruments');
console.log(synthUser2)
*/

/*
function suma(num1, num2){

    const result = num1 + num2;

    return result;
}



const resultado = suma(2,5);
console.log('El resultado de la suma es: ', resultado);

const resultado1 = suma(1001, 3);
document.write('El resultado de la suma es: ', resultado1);

const resultado2 = suma(-5,3);
document.write( 'El resultado de la suma es: ' , resultado2);
*/
/*
const pregunta = window.prompt('Indica un número');

function multiplica( numUser, num ){
    
    const resultadoMultiplica = numUser * num;
    return resultadoMultiplica;

}

const respuesta = multiplica(pregunta, 2);
document.write( 'El número indicado multiplicado por 2 es: ', respuesta );
*/

//función cuenta letras

const pidePalabra = window.prompt('Escribe una palabra');

function cuentaLetras( pidePalabra ){

    let cont = 0;
    let i;
    let letrasContadas;

    for( i = 0; i < pidePalabra; i++ ){

        cont++;
        
    }

    letrasContadas = cont;

    return letrasContadas;
   
}

const respuesta = cuentaLetras( pidePalabra );

document.write('La palabra ', pidePalabra, ' tiene: ', respuesta, ' letras.');



