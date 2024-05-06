exports.enviarForm = (req, res) => {
    res.send(
        `<form action ="/" method = "POST">
        Nome: <input type="text" name="nome">
        <button>Enviar Form</button>
        </form>`
    )
}

exports.receberForm = (req, res) => {
    res.send('Formulário Enviado com Sucesso!')
}