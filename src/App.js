import HelloWorld from "./components/Hello"
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import './App.css';


function App() {

  const nome = "thaynara"

  return (

    <div className="App">
      <h1>ola mundo!</h1>
      <SayMyName nome = "jv"/>
      <SayMyName nome = {nome}/>


      <Pessoa nome="jv" idade = "16" profissao="densenvovedor" foto = "https://via.placeholder.com/150"/>
    </div>
    
  );
}

export default App;
