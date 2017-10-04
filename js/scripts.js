var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Carro = /** @class */ (function () {
    function Carro() {
        this.color = "Rojo";
        this.marca = "Ferrari";
        this.modelo = "488 GTB Spider 2015";
        this.velocidad = 0;
    }
    Carro.prototype.getColor = function () { return this.color; };
    Carro.prototype.getMarca = function () { return this.marca; };
    Carro.prototype.getModelo = function () { return this.modelo; };
    Carro.prototype.getVelocidad = function () { return this.velocidad; };
    Carro.prototype.setColor = function (_color) { this.color = _color; };
    Carro.prototype.setMarca = function (_marca) { this.marca = _marca; };
    Carro.prototype.setModelo = function (_modelo) { this.modelo = _modelo; };
    Carro.prototype.setVelocidad = function (_velocidad) { this.velocidad = _velocidad; };
    Carro.prototype.acelerar = function () {
        this.velocidad++;
    };
    Carro.prototype.frenar = function () {
        this.velocidad--;
    };
    return Carro;
}());
var Camioneta = /** @class */ (function (_super) {
    __extends(Camioneta, _super);
    function Camioneta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Camioneta.prototype.getCilindraje = function () { return this.cilindraje; };
    Camioneta.prototype.setCilindraje = function (_cilindraje) { this.cilindraje = _cilindraje; };
    return Camioneta;
}(Carro));
var carros = [];
function guardar() {
    var miMarca = document.getElementById("marca").value.toString();
    var carro = new Carro();
    carro.setMarca(miMarca);
    carros.push(carro);
    var list = "";
    for (var i = 0; i < carros.length; i++) {
        list = list + "<li>" + carros[i].getMarca() + "</li>";
    }
    var listado = document.getElementById("lista");
    listado.innerHTML = list;
    var miMarca = document.getElementById("marca").value = "";
}
