const url='https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados);
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container_texto')

    paragrafo.innerHTML = 'Você sabia que o mundo tem <span>${dados.total_pessoas_mundo}</span> de pessoas e que aproximadamente <span>${dados_pessoas_conectadas}'
}