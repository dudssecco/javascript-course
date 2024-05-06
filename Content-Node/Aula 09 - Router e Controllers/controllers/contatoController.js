exports.enviarContato = (req, res) => {
    res.send(
        `<form action ="/" method = "POST">
        Envie seu Contato: <input type="text" name="nome">
        <button>Enviar Form</button>
        </form>`
    )
}