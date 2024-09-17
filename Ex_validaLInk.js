const urls = [
    "https://www.exemplo.com/ak",
    "https://www.exemplo.com/404",
    "https://www.exemplo.com/blog",
    "www.bytebank.com / cambio",
    "www.bytebank.com.br / cambio",
    "http://www.bytebank.com/cambio",
    "http://www.bytebank.com.br/cambio",
    "https://www.bytebank.com/cambio",
    "https://www.bytebank.com.br/cambio",
    "http://blog.exemplo.com",
    "https://www.exemplo.com"

];

// Função para verificar a acessibilidade de uma URL
const checkUrl = async (url) => {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
            }
        });
        if (response.ok) {
            console.log(`${url} está acessível.`);
        } else {
            console.log(`${url} retornou erro: ${response.status}`);
        }
    } catch (error) {
        console.log(`${url} é inválida ou inacessível: ${error.message}`);
    }
};

// Verificar cada URL
urls.forEach(url => {
    checkUrl(url);
});
