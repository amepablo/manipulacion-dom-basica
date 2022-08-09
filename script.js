const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const pResult = document.querySelector('#result');
const btn= document.querySelector('#btnCalcular');


// ! Aplicado a un formulario
//  * Predeterminado un btn de type='button' recarga toda la página
btn.addEventListener('click', sumarInputValues);
function sumarInputValues(event) {
    console.log({event});
    // event.preventDefault();
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;
}

// ! Aplicando evento 'submit' aplicado a un formulario
//  * Predeterminado un btn de 'submint' recarga toda la página
// form.addEventListener('submit', sumarInputValues);
// function sumarInputValues(event) {
//     console.log({event});
//     event.preventDefault();
//     const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
//     pResult.innerText = "Resultado: " + sumaInputs;
// }

// ! Aplicando addEventListener sin Arrow Function
//  * Aplicado fuera de un formulario
// btn.addEventListener('click', btnOnClick);
// function btnOnClick() {
//     const sumaInputs = input1.value + input2.value;
//     pResult.innerText = "Resultado: " + sumaInputs;
// }

// ! Aplicando arrow function
//  * Aplicado fuera de un formulario
// btn.addEventListener('click', () => {
//     const sumaInputs = input1.value + input2.value;
//     pResult.innerText = "Resultado: " + sumaInputs;
// });
