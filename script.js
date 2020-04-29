let capitalInput = document.querySelector('#capital-input')
let estadoEscolhido = {}
let estadoOutput = document.querySelector('#estado-output')
const button = document.querySelector('#button')
const resultado = document.querySelector('#resultado')

function verifica(e) {
  e.preventDefault()

  if (capitalInput.value.toUpperCase() == estadoEscolhido.capital.toUpperCase()) {
    resultado.innerHTML = `Você acertou!!!`
  } else {
    resultado.innerHTML = `Errou! A capital de ${estadoEscolhido.estado} é ${estadoEscolhido.capital}`
  }
  capitalInput.value = ''
  
  main()
}

function getEstado(dados) {
  let id = Math.floor(Math.random() * (28 - 1)) + 1
  return estadoEscolhido = dados.estados.find(estado => id == estado.id)
}

async function main() {
  let dados = await (await fetch('dados.json')).json()
  
  estadoEscolhido = getEstado(dados)
  estadoOutput.value = estadoEscolhido.estado
}

main()