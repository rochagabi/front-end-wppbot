document.addEventListener('DOMContentLoaded', () => {
    const homeLink = document.getElementById('home')
    const contentSection = document.getElementById('content-section')

    function loadContent(page) {
        fetch(page)
            .then(response => response.text())
            .then(data => {
                contentSection.innerHTML = data;
            })
            .catch(error => {
                contentSection.innerHTML = '<p>Erro ao carregar conteúdo</p>'
                console.error('Error loading content:', error)
            })
    }

    loadContent('home.html')


    homeLink.addEventListener('click', (event) => {
        event.preventDefault()
        loadContent('projetohome.html')
    })
})

function cadastrar() {
    var nome = document.getElementById('nome').value
    var celular = document.getElementById('celular').value
    var email = document.getElementById('email').value
    var loja = document.getElementById('loja').value

    var numeroLoja = 0
    if (loja == 'loja a') {
        numeroLoja = 1
    } else if (loja == 'loja b') {
        numeroLoja = 2
    } else {
        numeroLoja = 3
    }

    if (cadastrar) {
        alert(`o nome cadastrado foi: ${nome}, o celuar: ${celular}, o email: ${email} e a loja selecionada foi: ${numeroLoja}`)
    }
}
