class Atendimento{
    nome;
    cpf;
    data;
    hora;
    
    constructor(nome,cpf,data,hora){
        this.nome = nome;
        this.cpf = cpf;
        this.data = data;
        this.hora = hora;
    }
    /*setNome(nome){
        this.nome = nome;
    }
    setCpf(cpf){
        this.cpf = cpf;
    }
    setData(cpf){
        this.cpf = cpf;
    }
    setHora(hora){
        this.cpf = cpf;
    }*/

        toString(){
            return this.nome + " | " + this.cpf + " | " + this.data + " | " + this.hora;
        }
}