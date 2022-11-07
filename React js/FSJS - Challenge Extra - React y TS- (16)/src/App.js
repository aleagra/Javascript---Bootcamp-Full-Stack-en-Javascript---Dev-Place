import "./App.css";
import React from "react";

class Car extends React.Component {
  render() {
    return <h2> Soy un Auto (class)</h2>;
  }
}

function Car1() {
  return <h2> Soy un Auto (function)</h2>;
}

function AutoRojo(props) {
  console.log(props);
  return (
    <div className="a">
      <h2>{props.name}</h2>
    </div>
  );
}

function Garaje() {
  return (
    <>
      <h1>Quien sos vos</h1>
      <Car1 />
    </>
  );
}

function App() {
  return (
    <>
      <Car />
      <Car1 />
      <AutoRojo name="Soy un auto rojo" />
      <Garaje />
    </>
  );
}
export default App;
