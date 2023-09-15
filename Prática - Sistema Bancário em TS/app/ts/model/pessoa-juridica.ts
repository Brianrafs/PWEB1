class PessoaJuridica extends Pessoa{

    private _cnpj:string;

    constructor(nome:string, idade: number, cpf:string, dtNascimento: Date){
        super(nome+'- Jurídica', idade, dtNascimento);
        this._cnpj = cpf;
    }

    get cpf():string{
        return this._cnpj;};

toString(){
    return `Nome: ${this.nome}, CNPJ: ${this._cnpj} Idade: ${this.idade} Data de Nascimento: ${this.dtNascimento}`
    }
}