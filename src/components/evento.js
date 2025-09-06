
import Button from "./Eventos/Button"
function Evento(){

    function meuEvento(){
        console.log(`Ativando primeiro evento`)
    }

    function segundoEvento(){
        console.log("ativando segundoEvento")
    }

    return(
        <div>
            <p>Clique para disparar um evento</p>
            <Button event = {meuEvento} text="Primeiro Evento"/>
            <Button event = {segundoEvento} text="segundo Evento"/>
            
        </div>
    )
}

export default Evento

