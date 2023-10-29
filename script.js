const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

if (!peso) {
    setResultado('Peso Inválido', false);
    return;
}

if (!altura) {
    setResultado('Altura Inválida', false);
    return;
};

const imc = getImc (peso, altura);
const nivelImc = getNivelImc(imc);

const msg = `seu IMC é: ${imc} (${nivelImc}).`;

setResultado(msg, true);
});

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

if (imc >= 39.9) return nivel[5]
if (imc >= 34.9) return nivel[4]
if (imc >= 29.9) return nivel[3]
if (imc >= 24.9) return nivel[2]
if (imc >= 18.9) return nivel[1]
if (imc < 18.5) return nivel[0]
}

function getImc (peso, altura) {
const imc = peso / altura ** 2;
return imc.toFixed(2);
}

function criaP() {
const p = document.createElement('p');
return p;
}

function setResultado (msg, isValid) {
const resultado = document.querySelector('#resultado');
resultado.innerHTML = '';

const p = criaP();

const imc = getImc (peso, altura);

if (isValid) {
    p.classList.add('paragrafo-resultado');
    if (imc >= 18.5 && imc < 18.9) {
        alterarCorResultado.style.backgroundColor = "blue";

    } else if (imc >= 18.9 && imc < 24.9) {
        alterarCorResultado.style.backgroundColor = "green";

    } else if (imc >= 24.9 && imc < 29.9) {
        alterarCorResultado.style.backgroundColor = "orange";

    } else if (imc >= 29.9 && imc < 34.9) {
        alterarCorResultado.style.backgroundColor = "red";

    } else if (imc >= 34.9 && imc < 39.9) {
        alterarCorResultado.style.backgroundColor = "purple";

    } else if (imc >= 39.9) {
        alterarCorResultado.style.backgroundColor = "brown";

    }
} else {
    p.classList.add('bad');
};

    p.innerHTML = msg ;
    resultado.appendChild(p);
}