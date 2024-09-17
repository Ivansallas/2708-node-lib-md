//Exemplo
class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    detalhes() {
        return `${this.marca} ${this.modelo} (${this.ano})`;
    }

    buzinar() {
        console.log('Beep! Beep!');
    }
}

const meuCarro = new Carro('Toyota', 'Corolla', 2020);
console.log(meuCarro.detalhes());
meuCarro.buzinar();

//Neste exemplo, criamos uma classe Carro que encapsula propriedades(marca, modelo, ano)
// e métodos(detalhes, buzinar).Isso demonstra como organizar e manipular dados de forma eficiente usando OO.
