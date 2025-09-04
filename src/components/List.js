import Item from "./item"

function List (){
    return(
        <>
            <h1>
                Minha Lista
            </h1>
            <ul>
                <li><Item marca = "ferrari"/></li>
                <li><Item marca = "mc laren"/></li>
            </ul>
        </>
    )
}
export default List