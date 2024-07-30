import { readdir, rename } from 'fs/promises';
import { extname, join } from 'path';

// Prefixo a ser adicionado
const prefixo = 'TEST DE NOME'; //NOME DO ARQUIVO PARA SER ALTERADO 

// Diretório atual
const currentDir = process.cwd();

async function renameFiles() {
    try {
        // Lê o conteúdo do diretório atual
        const files = await readdir(currentDir);

        // Filtra apenas arquivos .txt
        const txtFiles = files.filter(file => extname(file) === '.txt');

        if (txtFiles.length === 0) {
            console.log('Nenhum arquivo .txt encontrado no diretório atual.');
            return;
        }

        // Loop através de todos os arquivos .txt
        for (const file of txtFiles) {
            // Verifica se o arquivo já tem o prefixo para evitar renomeação desnecessária
            if (!file.startsWith(prefixo)) {
                const newFileName = prefixo + file;
                const oldFilePath = join(currentDir, file);
                const newFilePath = join(currentDir, newFileName);

                // Renomeia o arquivo adicionando o prefixo
                await rename(oldFilePath, newFilePath);
                console.log(`Renomeado '${file}' para '${newFileName}'`);
            } else {
                console.log(`Arquivo '${file}' já possui o prefixo.`);
            }
        }
    } catch (err) {
        console.error('Erro ao processar os arquivos:', err);
    }
}

renameFiles();
