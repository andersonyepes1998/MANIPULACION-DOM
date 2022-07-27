/*
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = ('Estrategias para aprender el dom. <br> COLOMBIA')
//console.log(h1.getAttribute('class'));
//console.log(h1.setAttribute('class','moto'));

h1.classList.add('bus');
h1.classList.remove('carro');

input.value = 'esperando un texto';

const img = document.createElement('img');
img.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Latam-logo_-v_%28Indigo%29.svg/2560px-Latam-logo_-v_%28Indigo%29.svg.png');
console.log(img);

pid.innerHTML = ""; /*para eliminar una rtiqueta de javascript
pid.append(img);
*/

const h1 = document.querySelector('h1');
const form = document.getElementsByClassName('sutmid');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');

const btn = document.querySelector('#btncalcular');

const result = document.getElementById('result')
/*
btn.addEventListener('click',btnOnclick);
function btnOnclick (){     //cada vez que tenemos un onclick hacemos una funcion...
    const respuesta = (parseInt(input1.value) + parseInt(input2.value));
    result.append("Respuesta es: "+ respuesta);    
}
*/

btn.addEventListener('click',onclickSubmit);

function onclickSubmit (){     //cada vez que tenemos un onclick hacemos una funcion...
    const respuesta = (parseInt(input1.value) + parseInt(input2.value));
    result.append("Respuesta es: "+ respuesta);    
}
