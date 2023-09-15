class Pessoa{

    private _nome:string;
    private _idade:number;
    private _dtNascimento: Date;

    constructor(nome:string, idade:number, dtNascimento:Date) {
        this._nome = nome;
        this._idade = idade;
        this._dtNascimento = dtNascimento;
    }

    get nome(){
        return this._nome
    }

    get idade(){
        return this._idade
    }

    get dtNascimento(){
        return this._dtNascimento
    }

    toString(){
        return `Nome: ${this.nome}, Idade: ${this.idade} Data de Nascimento: ${this.dtNascimento}`
        }
}