//Exemplo
class Publicacao {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }
    detalhes() {
        return `${this.titulo} por ${this.autor}`;
    }
}

class Livro extends Publicacao {
    constructor(titulo, autor, paginas) {
        super(titulo, autor);
        this.paginas = paginas;
    }
    detalhes() {
        return `${super.detalhes()} - ${this.paginas} páginas`;
    }
}

class Revista extends Publicacao {
    constructor(titulo, autor, edicao) {
        super(titulo, autor);
        this.edicao = edicao;
    }
    detalhes() {
        return `${super.detalhes()} - Edição ${this.edicao}`;
    }
}

const meuLivro = new Livro('JavaScript Básico', 'João Silva', 200);
console.log(meuLivro.detalhes());

const minhaRevista = new Revista('Tech Hoje', 'Maria Souza', 45);
console.log(minhaRevista.detalhes());
