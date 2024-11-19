//importacao de componente
import "./App.css";
import FirstComponent from "./components/FistComponent";
import TemplateExpression from "./components/TemplateExpression";
import MyComponent from "./components/myComponent";
import Events from "./components/Events";
import img from "./assets/logo.png";

function App() {
  return (
    <div className="App">
      <h1>Fundamentos</h1>
      <FirstComponent />
      <TemplateExpression />
      <MyComponent />
      <Events />
      <img src="/img.png" alt="" />
      <img src={img} alt="" />
      <h1 style={{color:"red"}}> seja bem vindo !</h1>
    </div>
  );
}

export default App;
 