const minhaFila = new Fila(5); // criando minha fila com tamanho 5 dentro do controlador

function addElemento(){ // função de adicionar um elemento que foi digitado na caixa de texto
    const nome = 
        document.getElementById("txtnovoNome").value; 
    const cpf =
        document.getElementById("txtnovoCpf").value;
    const data = obterDataAtual();
    const hora = obterHoraAtual();
    const atendimento = new Atendimento(nome,cpf,data,hora);
        // relacionando o novo elemento pra ele acessar a caixa de texto
    if(!minhaFila.isFull()){
        minhaFila.enqueue(atendimento);
        mostrarFila();
        nome.value = ""; // limpa
        cpf.value = "";
        //nome.value.focus(); // cursor no input
        } // fim do if
    else
        alert("Fila cheia!");
} // fim da função addElemento
//----------------------------
function mostrarFila(){
    const listaFila =
        document.getElementById("listFila");
        // relacionando o lista fila do toString para o lista fila do html
        // listaFila.textContent = minhaFila.toString();
        listaFila.innerHTML = ""; // limpa a lista
        for(let item of minhaFila){
            const listaElemento = 
                document.createElement("li");
                listaElemento.textContent = item ;
                listaFila.appendChild(listaElemento);
        }
        // mostra o toString no ambiente de texto do html
}
//------------------
function atenderFila(){
    if(!minhaFila.isEmpty()){
        const atendido = minhaFila.dequeue();
        const horaAtendimento = obterHoraAtual();
        const tempoFila = calcularDiferencaHoras(atendido.hora, horaAtendimento);
        document.getElementById("Atendido").innerHTML = "Próximo a ser atendido(a): " + atendido.nome +
                    ", (a) chegou às "+atendido.hora+", e está sendo atendido(a) às "+horaAtendimento+"."+
                    " Tempo de espera na fila: "+tempoFila;
        mostrarFila(); // atualiza vizualização da fila
        // salvar no banco texto do navegador
    }
    else
        alert("Fila vazia!");
}

// -------------------------------
function buscarCPF() {
    const busca = document.getElementById("txtnovoCpf").value;
    let posicao = 0;
    for(let item of minhaFila) {
        posicao++;
        if (busca === item.cpf) {
            alert("O CPF está na posição " + posicao);
        }
    }
}