import HelloWorld from "./components/Hello"
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import Frase from "./components/frase";
import List from "./components/List";
import './App.css';


function App() {

  const nome = "thaynara"

  return (

    <div className="App">
      <Frase/>
      <HelloWorld/>
      <h1>ola mundo!</h1>
      <SayMyName nome = "jv"/>
      <SayMyName nome = {nome}/>


      <Pessoa nome="jv" idade = "16" profissao="densenvovedor" foto = "https://via.placeholder.com/150"/>
      <List/>
    </div>
    
  );
}

export default App;
