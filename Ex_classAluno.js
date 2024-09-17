// Crie uma classe Pessoa com propriedades básicas (nome, idade) e
//métodos(falar).Depois, crie subclasses Aluno e Professor que herdam 
//de Pessoa e adicionam propriedades e métodos específicos.
//classmae
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    falar() {
        console.log(`${this.nome} estou falando.`);
    }
}
// subclass aluno 
class Aluno extends Pessoa {
    constructor(nome, idade, matricula) {
        super(nome, idade);
        this.matricula = matricula;
    }
    estudar() {
        console.log(`${this.nome} estou estudando.`);
    }
}
class Professor extends Pessoa {
    constructor(nome, idade, disciplina) {
        super(nome, idade);
        this.disciplina = disciplina;
    }
    ensinar() {
        console.log(`${this.nome} estou ensinando ${this.disciplina}.`);
    }
}

//chamando as classes
const pessoa = new Pessoa("joão", 25);
pessoa.falar();

const aluno = new Aluno("maria", 20, "56987");
aluno.falar();
aluno.estudar();

const professor = new Professor("Carlos", 36, "Matemática");
professor.falar();
professor.ensinar();