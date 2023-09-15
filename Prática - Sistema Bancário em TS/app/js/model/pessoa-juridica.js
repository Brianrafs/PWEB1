class PessoaJuridica extends Pessoa {
    constructor(nome, idade, cpf, dtNascimento) {
        super(nome + '- Jurídica', idade, dtNascimento);
        this._cnpj = cpf;
    }
    get cpf() {
        return this._cnpj;
    }
    ;
    toString() {
        return `Nome: ${this.nome}, CNPJ: ${this._cnpj} Idade: ${this.idade} Data de Nascimento: ${this.dtNascimento}`;
    }
}
