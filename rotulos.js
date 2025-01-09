let cervejas = [];

const endPointDaApi = 'https://fabioliriodev.github.io/Aqui-tem-cerveja/cervejas.json'

getBuscarCervejasDaApi()

const elementoParaInserirCervejas = document.getElementById('cervejas');

async function getBuscarCervejasDaApi() {
    const res = await fetch (endPointDaApi)
    cervejas = await res.json()
    console.table(cervejas)
    exibirAsCervejasNaTela(cervejas)

    function exibirAsCervejasNaTela (listaDeCervejas) {
        elementoParaInserirCervejas.innerHTML = ''
        listaDeCervejas.forEach(cerveja => {
           
        elementoParaInserirCervejas.innerHTML += `<div class="card">
                <img src="${cerveja.Imagem}" class="card__imagem" alt="${cerveja.Alt}">
                <div class="card__texto">
                    <h3 class="card__texto__titulo">${cerveja.Nome}</h3>
                    <div class="card__texto__descricao">
                    <h4 class="card__texto__descricao-titulo">Estilo:</h4>
                    <p class="card__texto__descricao-paragrafo">${cerveja.Estilo}</p>
                </div>
                <div class="card__texto__descricao">
                    <h4 class="card__texto__descricao-titulo">Teor alcoólico:</h4>
                    <p class="card__texto__descricao-paragrafo">${cerveja.Teor}%</p>
                </div>
                <div class="card__texto__descricao">
                    <h4 class="card__texto__descricao-titulo">Cor (EBC):</h4>
                    <p class="card__texto__descricao-paragrafo">${cerveja.Cor}</p>
                </div>
                <div class="card__texto__descricao">
                    <h4 class="card__texto__descricao-titulo">Amargor:</h4>
                    <p class="card__texto__descricao-paragrafo">${cerveja.IBU} IBU</p>
                </div>
                <div class="card__info">
                    <h4 class="card__info__titulo">Descrição:</h4>
                    <p class="card__info__paragrafo">${cerveja.Descricao}</p>
                </div>
                </div> 
                <span>${cerveja.Categoria}</span>
            </div> `
        });
    }

    const botoes = document.querySelectorAll('.btn');
    botoes.forEach(btn => btn.addEventListener('click', FiltrarCervejas));

    function FiltrarCervejas() {
        const elementoBtn = document.getElementById(this.id);
        const categoria = elementoBtn.value
        console.log(elementoBtn.value)
        let cervejasFiltradas = cervejas.filter(cerveja => cerveja.Categoria == categoria);

        exibirAsCervejasNaTela(cervejasFiltradas)
    }

    let btnOrdenarPorTeor = document.getElementById('btnOrdenarPorTeor')
    btnOrdenarPorTeor.addEventListener('click', ordenarCervejasPorTeor)

    function ordenarCervejasPorTeor() {
        let CervejasOrdenadasPorTeor = cervejas.sort((a, b) => a.Teor - b.Teor)
        exibirAsCervejasNaTela(CervejasOrdenadasPorTeor)
    }

    let btnOrdenarPorAmargor = document.getElementById('btnOrdenarPorAmargor')
    btnOrdenarPorAmargor.addEventListener('click', ordenarCervejasPorAmargor)

    function ordenarCervejasPorAmargor() {
        let CervejasOrdernadasPorAmargor = cervejas.sort((a,b) => a.IBU - b.IBU)
        exibirAsCervejasNaTela(CervejasOrdernadasPorAmargor)
    }

    let btnOrdenarPorNome = document.getElementById('btnOrdenarPorNome')
    btnOrdenarPorNome.addEventListener('click', ordenarCervejasPorNome)
    
    function ordenarCervejasPorNome() {
        let cervejasOrdenadasPorNome = cervejas.sort((a,b) => {
            const nomeA = a.Nome;
            const nomeB = b.Nome;
        
        if (nomeA < nomeB) {
            return -1
        }

        else {
            return 1;
        }
        
        });
        exibirAsCervejasNaTela(cervejasOrdenadasPorNome)
    }

    btnOrdenarPorEstilo = document.getElementById('btnOrdenarPorEstilo')
    btnOrdenarPorEstilo.addEventListener('click', ordenarCervejasPorEstilo)

    function ordenarCervejasPorEstilo() {
        let CervejasOrdenadasPorEstilo = cervejas.sort((a,b) => {
            const estiloA = a.Estilo;
            const estiloB = b.Estilo;

            if (estiloA < estiloB) {
                return -1
            }

            else {
                return 1
            } 

        });
        exibirAsCervejasNaTela(CervejasOrdenadasPorEstilo)
    }

}