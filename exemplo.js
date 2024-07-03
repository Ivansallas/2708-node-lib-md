const texto = `
Exemplos de URLs válidas:
    bytebank.com/cambio
    bytebank.com.br/cambio
    www.bytebank.com/cambio
    www.bytebank.com.br/cambio
    http://www.bytebank.com/cambio
    http://www.bytebank.com.br/cambio
    https://www.bytebank.com/cambio
    https://www.bytebank.com.br/cambio
    http://blog.exemplo.com
    https://www.exemplo.com

Exemplos de URL inválidas:
    https://bytebank/cambio
    http://bytebank.naoexiste/cambio
    ht:bytebank.naoexiste/cambio
`;

// Expressão regular para capturar URLs
const padrao_url = /https?:\/\/[^\s]+/g;
// https ?:// - Corresponde a http:// ou https://.
// [^\s] + - Corresponde a qualquer caractere que não seja espaço(\s) uma ou mais vezes(+).
// g - O modificador global(g) indica que todas as ocorrências devem ser encontradas, não apenas a primeira.

// Encontrar todos os links no texto
const links = texto.match(padrao_url);

// Exibir os links encontrados
if (links) {
    links.forEach(link => {
        console.log(link);
    });
} else {
    console.log("Nenhum link encontrado");
}
