import  BotaoConclui from './componentes/concluiTarefa.js'
import BotaoDelete from './componentes/deletaTarefa.js'

  const criarTarefa = (e) =>{
  e.preventDefault() 
  
  const lista = document.querySelector('[data-list]')
  const input = document.querySelector('[datat-form-input]')
  const valor = input.value
  

  if(!valor == ""){
    const tarefa =  document.createElement('li')
    tarefa.classList.add("task")
    const conteudo = `<p class="content">${valor}</p>`
    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDelete())
    lista.appendChild(tarefa)
  } else {
    console.log("Digite algo no input MY FRIENDOoO")
  }

   input.value = ""
}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', criarTarefa)




