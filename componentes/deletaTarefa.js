const BotaoDelete = () => {
  const botaoDeleta = document.createElement('button')
  botaoDeleta.classList.add('button-delete')
  botaoDeleta.innerText = "deletar"

  botaoDeleta.addEventListener('click', deletarTarefa)

  return botaoDeleta
  
}

const deletarTarefa = (e) =>{
  const botaoDeleta = e.target

  const tarefaCompleta = botaoDeleta.parentElement
  tarefaCompleta.remove()
  return botaoDeleta
}

export default BotaoDelete