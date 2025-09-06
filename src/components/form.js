import { func } from "prop-types"

function Form(){

    function cadastrarUsuario(e){
        console.log("usuario cadastrado com sucesso")
        e.preventDefault()
    }


    return(
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="digite seu nome"></input>
                </div>
                <div>
                    <input type="submit" value="cadatrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form