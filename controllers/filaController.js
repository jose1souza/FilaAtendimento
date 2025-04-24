const minhaFila = new Fila(5); // criando minha fila com tamanho 5 dentro do controlador

function addElemento(){ // função de adicionar um elemento que foi digitado na caixa de texto
    const novoElemento = 
        document.getElementById("txtnovoNome"); 
        // relacionando o novo elemento pra ele acessar a caixa de texto
    if(!minhaFila.isFull()){
        minhaFila.enqueue(novoElemento.value);
        mostrarFila();
        novoElemento.value = ""; // limpa
        novoElemento.focus(); // cursor no input
        } // fim do if
    else
        alert("Fila cheia!");
} // fim da função addElemento
//----------------------------
function mostrarFila(){
    const listaFila =
        document.getElementById("listFila");
        // relacionando o lista fila do toString para o lista fila do html
        listaFila.textContent = minhaFila.toString();
        // mostra o toString no ambiente de texto do html
}
//------------------
function atenderFila(){
    if(!minhaFila.isEmpty()){
        const atendido = minhaFila.dequeue();
        alert("Pessoa atendida:"+atendido);
        mostrarFila(); // atualiza vizualização da fila
        // salvar no banco texto do navegador
    }
    else
        alert("Fila vazia!");
}