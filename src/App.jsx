import Buscador from "./components/Buscador";
import { BaseColaboradores } from "./components/BaseColaboradores";
import Listado from "./components/Listado";
import Formulario from "./components/Formulario";
import { useState } from "react";
import Alert from "./components/Alert";

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [alert, setAlert] = useState({ error: "", msg: "", color: "" });
  const [buscador, setBuscador] = useState([]);
  const [buscadorFlag, setBuscadorFlag] = useState(true);

  return (
    <div className="mt-3 d-flex justify-content-center flex-wrap h-100">
      <div className="row col-md-6 mr-4">
        <h1>Listado de colaboradores</h1>
        <div className="sm-4 mb-4 one">
          <Buscador
            colaboradores={colaboradores}
            setBuscador={setBuscador}
            setBuscadorFlag={setBuscadorFlag}
          />
        </div>

        <div className="mb-5">
          <Listado colaboradores={buscadorFlag ? colaboradores : buscador} />
        </div>
      </div>
      <div className="row col-md-6">
        <h2>Agregar colaborador</h2>
        <Formulario
          colaboradores={colaboradores}
          setColaboradores={setColaboradores}
          setAlert={setAlert}
        />
        {alert.msg && <Alert mensaje={alert.msg} variant={alert.color} />}
      </div>
    </div>
  );
};

export default App;
