const operations = require('../src/operations.js');
const assert = require('assert');

describe("pow", function () {
    it("raises 3 to the 4th power", function () {
        assert.equal(operations.pow(3, 4), 81);
    });
    it("raises -3 to the 4th power", function () {
        assert.equal(operations.pow(-3, 4), 81);
    });
    it("raises 0 to the 2nd power", function () {
        assert.equal(operations.pow(0, 2), 0);
    });
        it("raises 10 to the 1000th power", function () {
        assert.equal(operations.pow(10, 1000), Infinity);
    });
});