interface CarroBase {
	getColor():string;
	getMarca():string;
	getModelo():string;
	getVelocidad():number;
}

class Carro implements CarroBase {
	public color:string;
	public marca:string;
	public modelo:string;
	public velocidad:number;

	public getColor() {return this.color;}
	public getMarca() {return this.marca;}
	public getModelo() {return this.modelo;}
	public getVelocidad():number {return this.velocidad;}

	public setColor(_color:string) {this.color = _color;}
	public setMarca(_marca:string) {this.marca = _marca;}
	public setModelo(_modelo:string) {this.modelo = _modelo;}
	public setVelocidad(_velocidad:number) {this.velocidad = _velocidad;}

	constructor() {
		this.color = "Rojo";
		this.marca = "Ferrari";
		this.modelo = "488 GTB Spider 2015";
		this.velocidad = 0;
	}

	public acelerar() {
		this.velocidad++;
	}

	public frenar() {
		this.velocidad--;
	}
}

class Camioneta extends Carro {
	public cilindraje:number;

	public getCilindraje() {return this.cilindraje;}
	public setCilindraje(_cilindraje:number) {this.cilindraje = _cilindraje;}
}

var carros = [];

function guardar() {
	var miMarca = (<HTMLInputElement>document.getElementById("marca")).value.toString();
	var carro = new Carro();

	carro.setMarca(miMarca);
	carros.push(carro);

	var list = "";

	for(var i=0; i<carros.length; i++) {
		list = list+"<li>"+carros[i].getMarca()+"</li>";
	}

	var listado = <HTMLElement>document.getElementById("lista");
	listado.innerHTML = list;
	var miMarca = (<HTMLInputElement>document.getElementById("marca")).value = "";
}