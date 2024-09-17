//Exemplo
function Carro(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
}

Carro.prototype.detalhes = function () {
    return `${this.marca} ${this.modelo}`;
};

const meuCarro = new Carro('Toyota', 'Corolla');
console.log(meuCarro.detalhes());

//Neste exemplo, a função Carro define uma classe de carro, e o método detalhes
//é adicionado ao protótipo, permitindo que todas as instâncias de Carro compartilhem esse método.
