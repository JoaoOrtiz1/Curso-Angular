'use strict';
var minhaVar = 'minha variavel';
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
var Math1 = /** @class */ (function () {
    function Math1() {
    }
    Math1.prototype.soma = function (x, y) {
        return x + y;
    };
    return Math1;
}());
//ES6
var minhaFunction = function (x, y) {
    return x + y;
};
