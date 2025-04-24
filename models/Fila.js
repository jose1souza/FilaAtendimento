class Fila {
    #inicio; // # privados
    #fim;
    #qtd; // jogo da velha deixa os atributos como private
    #elementos; // vetor

    // tamanho = 10 é a sobrecarga de metódos do JavaScript
    constructor(tamanho=10){ // construtor da Fila
        this.#inicio = 0; 
        this.#fim = -1;
        this.#qtd = 0;
        this.#elementos = new Array(tamanho); // instanciando um vetor
    } // fim do construtor

    // Metódos
    isFull(){ // verifica se está cheio
        return this.#fim === 
                this.#elementos.length - 1;
        /*if(this.#fim === 
            this.#elementos.length -1){
            return true;
        }*/ //em 3 linhas
    } // fim do isFull

    isEmpty(){ // verifica se está vazio
        return this.#fim < 
                this.#inicio; // se o fim for menor que o inicio
    }

    enqueue(dado){ // inserir
        if(!this.isFull()){
            this.#fim++;
            this.#elementos[this.#fim] = dado;
            this.#qtd++;
            return true; // se tiver espaço na Fila
        } // fim do if
        return false; // se estiver cheio
    } // fim do inserir

    dequeue(){
        if(!this.isEmpty()){ // senão estiver vazio
           // return dado = this.#elementos[this.#inicio++]; // remove um dado
            const dado = this.#elementos[this.#inicio];
            this.#inicio++;
            this.#qtd--;
            return dado;
        } // fim do if
        else{
            return null; // se estiver vazio
        } // fim do else
    }

    toString(){
        let filaString = "";
        for(let i = this.#inicio;i <= this.#fim;i++){ // percorre do inicio até o fim
            filaString += this.#elementos[i] + " |"; // recebe os elementos da fila
        } // fim do for
        console.log(filaString);
        return filaString; // mostrando a fila
    }

} // fim da classe