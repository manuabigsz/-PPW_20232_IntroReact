import { useState } from "react"; //faz
import Calculo from "./Calculo";
import Corpo from "./Corpo";
import Titulo from "./Titulo";

function App() {

  
  const textocorpo = "Texto para o componente corpo";
  const [texto,setTexto] = useState("IFSUL");
  const mensagemAlerta = (texto) =>{
    alert(texto);
  }

  return (
    <div>
      <h1>{texto}</h1>
      <button onClick={()=>{
        let novoTexto = texto === 'IFSUL' ? "Passo Fundo" : "IFSUL";
        setTexto(novoTexto);
      }}>Mudar texto</button>
      <Titulo titulo="Usando props no React" />
      <Corpo subtitulo={textocorpo} mensagemAlerta={mensagemAlerta} dados={['React', 'JSX', 'DOM', 'NPM']} />
    <Calculo></Calculo>
    </div>
  )
  
  ;
  
  
}

export default App;
