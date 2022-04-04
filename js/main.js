//Capturar Envento do Formulário
const form = document.querySelector('#formulario');
form.addEventListener('submit', function (evento) {
    evento.preventDefault(); 
    const inputPeso = evento.target.querySelector('#peso');                     
    const inputAltura = evento.target.querySelector('#altura'); 
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso){
        setResultado('Peso inválido', false);
        return;
    }

    if(!altura){
        setResultado('Altura Inválida', false);
        return;
    }

    const imc = indiceMassa(peso, altura);
});

function criaParagrafo(){
    const paragrafo = document.createElement('paragrafo');
    return paragrafo;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const paragrafo = criaParagrafo();

    if(isValid) {
        paragrafo.classList.add('paragrafo-resultado');
    } else {
        paragrafo.classList.add('error')
    }

    paragrafo.innerHTML = msg;
    resultado.appendChild(paragrafo)
}

function indiceMassa( peso, altura){
    const Imc = peso/(altura*altura);
    
    if (Imc < 18.4){
       let msg = `Seu IMC é ${Imc.toFixed(2)} (Abaixo do Peso)`;
       setResultado(msg, true);
    }

    else if(Imc >=18.5 &&  Imc<=24.9 ){
        let msg = `Seu IMC é ${Imc.toFixed(2)} (Peso Normal)`;
        setResultado(msg, true);
    }
    else if(Imc >=25 &&  Imc<=29.9 ){
        let msg = `Seu IMC é ${Imc.toFixed(2)} (Acima do Peso)`;
        setResultado(msg, true);
    }
    else if(Imc >=30 &&  Imc<=34.9 ){
        let msg = `Seu IMC é ${Imc.toFixed(2)} (Obesidade Grau 1)`;
        setResultado(msg, true);
    }
    else if(Imc >=35 &&  Imc<=39.9 ){
        let msg = `Seu IMC é ${Imc.toFixed(2)} (Obesidade Grau 2)`;
        setResultado(msg, true);
    }
    else if(Imc >= 40 ){
        let msg = `Seu IMC é ${Imc.toFixed(2)} (Obesidade Grau 3)`;
        setResultado(msg, true);
    }

};

indiceMassa()
