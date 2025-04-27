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
               this.#fim = (this.#fim + 1) % this.#elementos.length;
               this.#elementos[this.#fim] = dado;
               this.#qtd++;
               return true;
        } // fim do if
        return false; // se estiver cheio
    } // fim do inserir

    dequeue(){
        if(!this.isEmpty()){
            const dado = this.#elementos[this.#inicio];
            this.#inicio = (this.#inicio + 1) % this.#elementos.length;
            this.#qtd--;
            return dado;
        }
        return null;
    }

    toString(){
        let filaString = "";
        for(let i = 0;i < this.#qtd;i++){ // percorre do inicio até o fim
            filaString += this.#elementos[(this.#inicio + i) % this.#elementos.length] + " | "; // acessa os elementos da fila
        } // fim do for
        return filaString; // mostrando a fila
    }

}