import { useState } from "react"

function Form() {

  function cadastrarUsuario(e) {
    e.preventDefault()
    console.log("Usuário cadastrado com sucesso")
    console.log(name)
    console.log(password)
  }

  const [name, setName] = useState("")
  const [password, setpassword] = useState("")

  return (
    <div>
      <h1>Meu Cadastro</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="usuario">Usuário:</label>
          <input
            type="text"
            placeholder="Digite seu nome"
            name="usuario"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            name="senha"
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>

        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  )
}

export default Form
