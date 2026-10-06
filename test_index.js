const assert = require("node:assert/strict");
const { isPrime } = require("./index");

assert.strictEqual(isPrime(2), true);
assert.strictEqual(isPrime(7), true);
assert.strictEqual(isPrime(8), false);
assert.strictEqual(isPrime(1), false);