const Corpo = props => {
    return (
        <>
            <h1>Titulo do Corpo</h1>
            <h2>{props.subtitulo}</h2>
            <button onClick={() => props.mensagemAlerta(
                'Usei a função recebida por props')
                }>Mensagem</button>
            {
                props.dados.map(elemento => (
                    <li key={elemento}>{elemento}</li>
                ))
            }
        </>
    )
}

export default Corpo;
