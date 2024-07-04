// Importa os módulos fs e chalk
import fs from 'fs';
import chalk from 'chalk';

// Função que extrai links de um texto utilizando regex
function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm; // Expressão regular para capturar links no formato [texto](url) 
    const capturas = [...texto.matchAll(regex)]; // MatchAll retorna um iterador com todas as correspondências
    const resultados = capturas.map(captura => ({ [captura[1]]: captura[2] })); // Mapeia as capturas para um array de objetos no formato { texto: url }

    return resultados;
}

// Função para tratar erros e lançar uma mensagem de erro customizada
function trataErro(erro) {
    console.log(erro);
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));
}

// Função assíncrona para ler arquivo e extrair links
async function pegaArquivo(caminhoDoArquivo) {
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        console.log(extraiLinks(texto));
    } catch (erro) {
        trataErro(erro);
    }
}

// Chama a função pegaArquivo com o caminho do arquivo a ser lido
//pegaArquivo('./arquivos/texto.md');
export default pegaArquivo;