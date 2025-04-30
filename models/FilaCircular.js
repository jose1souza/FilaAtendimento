class FilaCircular{
    #inicio;
    #fim;
    #qtd;
    #elementos;

    constructor(tamanho=10){
        this.#inicio = 0;
        this.#fim = -1;
        this.#qtd = 0;
        this.#elementos = new Array(tamanho);
    } // fim do constructor

    isFull(){
        return this.#qtd ===
                this.#elementos.length;
    } // fim do isFull

    isEmpty(){
        return this.#qtd === 0; /* verifica se 
        a quantidade de elementos é igual a 0*/
    } // fim do isEmpty

    enqueue(dado){
        if(!this.isFull()){
            if(this.#fim === 
                    this.#elementos.length - 1)
                this.#fim = 0;
            else
                this.#fim++;
            this.#elementos[this.#fim] = dado;
            this.#qtd++;
            console.log("Ini:"+this.#inicio +
                 " Fim:" + this.#fim + " Qtd:" + this.#qtd);
            return true;
        } // fim do if
        return false; // se estiver cheio
    } // fim do inserir

    dequeue(){
        if(!this.isEmpty()){
            const dado = 
                this.#elementos[this.#inicio];
            if(this.#inicio === 
                    this.#elementos.length - 1)
                this.#inicio = 0;
            else
                this.#inicio++;
            this.#qtd--;
            console.log("Ini:"+this.#inicio +
                " Fim:" + this.#fim + " Qtd:" + this.#qtd);
            return dado;
        }
        return null;
    }

    toString(){
        let filaString = "";
        let pos = this.#inicio;
        for(let i = 0;i < this.#qtd;i++){ // percorre do inicio até o fim
            filaString += this.#elementos[pos] + " | "; // acessa os elementos da fila
            if(pos === this.#elementos.length-1)
                pos = 0;
            else
                pos++;
        } // fim do for
        console.log(filaString);
        return filaString; // mostrando a fila
    }

    // fazer o iterator
    // criar uma classe atendimento
    //usar o get data e hora util.js
    // usar o iterator
    // quando atender mostrar no painel
}