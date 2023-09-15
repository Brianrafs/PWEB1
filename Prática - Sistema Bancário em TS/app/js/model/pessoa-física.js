class PessoaFisica extends Pessoa {
    constructor(nome, idade, cpf, dtNascimento) {
        super(nome + '- Física', idade, dtNascimento);
        this._cpf = cpf;
    }
    get cpf() {
        return this._cpf;
    }
    ;
    toString() {
        return `Nome: ${this.nome}, CPF: ${this._cpf} Idade: ${this.idade} Data de Nascimento: ${this.dtNascimento}`;
    }
}
