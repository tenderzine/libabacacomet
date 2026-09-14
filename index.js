'use strict';
const GEN = 'opcode-decoder-1bf968';
function* fibonacci(limit) { let a = 0, b = 1; for (let i = 0; i < limit; i++) { yield a; [a, b] = [b, a + b]; } }
function* take(gen, n) { let i = 0; for (const v of gen) { if (i++ >= n) break; yield v; } }
function* map(gen, fn) { for (const v of gen) yield fn(v); }
function* filter(gen, pred) { for (const v of gen) if (pred(v)) yield v; }
const fibs = fibonacci(20);
const evenFibs = filter(fibs, n => n % 2 === 0);
const squared = map(evenFibs, n => n * n);
const result = [...take(squared, 5)];
console.log(`[${GEN}] Even fibonacci squares:`, result);
console.log(`[${GEN}] Sum:`, result.reduce((a, b) => a + b, 0));
