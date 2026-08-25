const pagina = {
home:`

`,
contato:`
`
}

function navegar(aba) {
    document.getElementById("conteudo").innerHTML = pagina[aba]
}

navegar('home')