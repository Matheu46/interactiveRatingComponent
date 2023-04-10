const notas = document.querySelectorAll('li');
const submit = document.querySelector('button');
let feedback;

function notaEscolhida(nota) {
  notas.forEach(
    (nota) =>
      nota.classList.contains('active') && nota.classList.remove('active'),
  );
  nota.target.classList.add('active');
  feedback = nota.target.innerText;
  return feedback;
}

function enviarNota() {
  const boxContainer = document.querySelector('.box-container');
  let warningState = document.querySelector('span');
  if (feedback) {
    boxContainer.innerHTML = `
    <div class='img-feedback'>
      <img src="./images/illustration-thank-you.svg" alt="">
    </div>

    <p class='chosen-note'>You selected ${feedback} out of 5</p>
  
    <div class="text center">
      <h1>Thank you!</h1>
      <p>We appreciate you taking the time to give a rating. If you ever need more support,
        don’t hesitate to get in touch!</p>
    </div>
    `;
  } else if (!warningState) {
    const warning = document.createElement('span');
    warning.innerText = 'Choose a rate';
    boxContainer.appendChild(warning);
  }
}

notas.forEach((nota) => {
  nota.addEventListener('click', notaEscolhida);
});

submit.addEventListener('click', enviarNota);
