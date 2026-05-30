// Crie um objeto produto com preco e quantidade, e calcule o valor total da compra(preco * quantidade).

console.log("=-".repeat(9));
console.log("Cálculo de compra");
console.log("=-".repeat(9));

const produto = {
  preco: 50,
  quantidade: 5,
};

const valorTotal = produto.preco * produto.quantidade;

console.log(`Você está comprando ${produto.quantidade} produtos;`);
console.log(`A unidade desse produto custa R$${produto.preco};`);
console.log(`O valor total da compra é de R$${valorTotal}.`);
console.log("=-".repeat(18));
