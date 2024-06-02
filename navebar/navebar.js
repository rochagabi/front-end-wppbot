document.addEventListener('DOMContentLoaded', () => {
    const homeLink = document.getElementById('home')
    const contactLink = document.getElementById('contact')
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
        loadContent('home.html')
    })

    contactLink.addEventListener('click', (event) => {
        event.preventDefault()
        loadContent('contato.html')
    })
})
