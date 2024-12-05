let amigos = [];
let numMin = 4;

function adicionar() {
  let amigo = document.getElementById('nome-amigo');
  let lista = document.getElementById('lista-amigos');
  
  if (amigo.value == '') {
    alert('tem q colocar o nomeeeeee');
    return;
  }
  if (amigos.includes(amigo.value)) {
    alert('nomes inguai');
    return;
  }

  amigos.push(amigo.value);
  if (lista.textContent == '') {
    lista.textContent = amigo.value;
  } else {
    lista.textContent = lista.textContent + ', ' + amigo.value;
  }
  amigo.value = '';
}

function sortear() {
  if (amigos.length < numMin) {
    alert(`Adicione no mínimo ${numMin} participantes!`);
    return;
  }

  embaralha(amigos);
  let sorteio = document.getElementById('lista-sorteio');

  for (let i = 0; i < amigos.length; i++) {
    if (i == amigos.length - 1) {
      sorteio .innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
    } else {
      sorteio .innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
    }
  }
}

function reiniciar() {
  amigos = [];
  document.getElementById('lista-amigos').innerHTML = '';
  document.getElementById('lista-sorteio').innerHTML = '';
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}