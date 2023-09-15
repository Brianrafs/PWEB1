let contaController = new ContaController();

contaController.listar();
const pessoa = new Pessoa('Brian Rafael', 20, new Date());
const pessoaj = new PessoaJuridica('Juan Farias', 19,'10.783.898/0001', new Date());
const pessoaf = new PessoaFisica('Brian Rafael', 20, '11518647814', new Date());
const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

console.log(pessoa);
console.log(pessoaf);
console.log(pessoaj);