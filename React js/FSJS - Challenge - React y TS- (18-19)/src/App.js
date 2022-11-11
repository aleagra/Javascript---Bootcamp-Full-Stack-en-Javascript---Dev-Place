import { JustifiedExample } from "./componentes/navbar";
import { Footer } from "./componentes/footer";
import { GroupExample } from "./componentes/Carrousel-cards";
import { FormExample } from "./componentes/form";
import { Componentes } from "./componentes/componentes";
import { UncontrolledExample } from "./componentes/carrousel";
import "./App.css";
import { BasicExample } from "./componentes/nav-categoria";
import { BasicExamplee } from "./componentes/acordeon";
import { General } from "./componentes/general";
function App() {
  return (
    <>
      <JustifiedExample />
      <BasicExample />
      <UncontrolledExample />
      <GroupExample />
      <General />
      <FormExample />
      <Componentes />
      <BasicExamplee />
      <Footer />
    </>
  );
}

export default App;
