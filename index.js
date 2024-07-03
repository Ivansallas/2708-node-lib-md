import fs from 'fs';
import chalk from 'chalk';

// Função para tratar erros
function trataErro(erro) {
    console.log(erro);
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));
}

// Função assíncrona para ler o conteúdo de um arquivo
async function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        console.log(chalk.green(texto))
    } catch (erro) {
        trataErro(erro);
    } finally {
        console.log(chalk.yellow('operação concluída'));
    }
}

// Chamada da função para ler um arquivo específico
pegaArquivo('./arquivos/texto.md');
pegaArquivo('./arquivos/');