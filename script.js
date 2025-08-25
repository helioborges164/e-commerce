/*
    O que vamos fazer(passos logicos)

    1) Colocar os produtos na tela:
        [x] Saber quem são os produtos
        [x] Onde colocar os produtos
        [x] Colocar os produtos na tela
        [x] Estilizar os produtos

    2) Filtrar por nome:
        [x] Quem é o input
        [x] Quando digitou no input
        [x] O que foi digitado
        [x] Filtrar os produtos de acordo com o que foi digitado
        [x] Deixar só os produtos filtrados na tela
        
    3) Filtrar por categoria:
        [x] Quem são os botões para selecionar a categoria
        [x] Quando um dos botões ali foram clicados
        [x] Qual botão foi clicado
        [x] Filtrar os produtos daquela categoria
        [x] Mostrar na tela, SOMENTE os produtos filtrados
*/

let products = [
    {
        id: 1,
        nome: "iPhone 15 Pro",
        categoria: "smartphones",
        preco: 7999,
        precoOriginal: 8999,
        desconto: 11,
        imagem: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400",
        descricao: "Smartphone Apple com câmera avançada"
    },
    {
        id: 2,
        nome: "MacBook Air M2",
        categoria: "laptops",
        preco: 8999,
        precoOriginal: 10999,
        desconto: 18,
        imagem: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
        descricao: "Notebook Apple ultrafino e potente"
    },
    {
        id: 3,
        nome: "AirPods Pro",
        categoria: "headphones",
        preco: 1899,
        precoOriginal: 2299,
        desconto: 17,
        imagem: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400",
        descricao: "Fones sem fio com cancelamento de ruído"
    },
    {
        id: 4,
        nome: "Samsung Galaxy S24",
        categoria: "smartphones",
        preco: 5499,
        precoOriginal: 6299,
        desconto: 13,
        imagem: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400",
        descricao: "Smartphone Samsung com tela AMOLED"
    },
    {
        id: 5,
        nome: "Apple Watch Series 9",
        categoria: "smartwatch",
        preco: 3299,
        precoOriginal: 3799,
        desconto: 13,
        imagem: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400",
        descricao: "Relógio inteligente com monitoramento"
    },
    {
        id: 6,
        nome: "Teclado Mecânico",
        categoria: "accessories",
        preco: 499,
        precoOriginal: null,
        desconto: null,
        imagem: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
        descricao: "Teclado mecânico RGB para gamers"
    },
    {
        id: 7,
        nome: "Sony WH-1000XM5",
        categoria: "headphones",
        preco: 2499,
        precoOriginal: 2999,
        desconto: 17,
        imagem: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400",
        descricao: "Fone com cancelamento de ruído"
    },
    {
        id: 8,
        nome: "Dell XPS 13",
        categoria: "laptops",
        preco: 7999,
        precoOriginal: null,
        desconto: null,
        imagem: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=400",
        descricao: "Notebook Windows premium"
    }
]

let boxProducts = document.querySelector(".box-products")
let inputSearch = document.querySelector(".input-search")
let textInput = ""
let buttonsAll = document.querySelectorAll(".button-categorie")
let categorie = "all"

function mostrarProdutos() {
    let htmlProducts = ""

    products.forEach(prd => {

        if (prd.nome.toLocaleLowerCase().includes(textInput.toLocaleLowerCase())) {

            if (prd.categoria === categorie || categorie === "all") {

                htmlProducts = htmlProducts + `
            <div class="product-card">
                <img class="image-product" src="${prd.imagem}" alt="note">
                <div class="info-product">
                    <h3 class="name-product">${prd.nome}</h3>
                    <p class="description-product">${prd.descricao}</p>
                    <p class="preco-product">R$ ${prd.precoOriginal}</p>
                    <button class="btn-to-add">Adicionar</button>
                </div>
            </div>
        `
            }
        }

    })

    boxProducts.innerHTML = htmlProducts
}

mostrarProdutos()

function search() {
    textInput = inputSearch.value

    mostrarProdutos()
}

inputSearch.addEventListener("input", search)

buttonsAll.forEach(button => {

    button.addEventListener("click", function () {

        categorie = button.getAttribute("data-categorie")

        buttonsAll.forEach(btn => btn.classList.remove("active"))

        button.classList.add("active")

        mostrarProdutos()
    })
})