import HelloWorld from "./components/Hello"
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import Frase from "./components/frase";
import List from "./components/List";
import Evento from "./components/evento";
import Form from "./components/form";
import './App.css';


function App() {


  return (

    <div className="App">
      <h1>testando eventos</h1>
      <Evento numero = "1"/>

      <Form/>
    </div>
    
  );
}

export default App;
