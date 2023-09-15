class PessoaFisica extends Pessoa{

    private _cpf:string;

    constructor(nome:string, idade: number, cpf:string, dtNascimento: Date){
        super(nome+'- Física', idade, dtNascimento);
        this._cpf = cpf;
    }

    get cpf():string{
        return this._cpf;};

toString(){
    return `Nome: ${this.nome}, CPF: ${this._cpf} Idade: ${this.idade} Data de Nascimento: ${this.dtNascimento}`
    }
}