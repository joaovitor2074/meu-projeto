function Pessoa({nome,idade,profissao,foto}){
    return(
        <div>
            <img src = {foto} alt = {nome}></img>
            <h2> Nome: {nome}</h2>
            <p>{idade}</p>
            <p> {profissao}</p>
        </div>
    )
}

export default Pessoa