// Crie uma função simples chamada somar(a, b) e exporte-a como módulo (modo CommonJS ou ES Modules, dependendo do ambiente).

console.log("=-".repeat(16));
console.log("Modularização com export/import");
console.log("=-".repeat(16));

import { somar } from "./app.js";

console.log("Soma:", somar(5, 3));
console.log("=-".repeat(16));
