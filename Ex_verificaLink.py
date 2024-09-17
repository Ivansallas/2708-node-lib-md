# Se você está tendo problemas com a importação do requests,
# provavelmente a biblioteca não está instalada no seu ambiente Python.
# Você pode instalar o requests utilizando o pip. Aqui estão as instruções:

# Abra seu terminal ou prompt de comando.
# Digite o seguinte comando para instalar a biblioteca requests:
# pip install requests

import requests
from requests.exceptions import RequestException

# Lista de URLs para validar
urls = [
    "https://www.exemplo.com",
    "https://www.exemplo.com/404",
    "https://www.exemplo.com/blog",
]


# Função para verificar a URL
def verificar_url(url):
    try:
        response = requests.get(url, timeout=10)  # Timeout de 10 segundos
        if response.status_code == 200:
            print(f"{url} está acessível.")
        else:
            print(f"{url} retornou erro: {response.status_code}")
    except RequestException as e:
        print(f"{url} é inválida ou inacessível: {e}")


# Verificar cada URL
for url in urls:
    verificar_url(url)
