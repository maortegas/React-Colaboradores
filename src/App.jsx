import Buscador from "./components/Buscador";
import { BaseColaboradores } from "./components/BaseColaboradores";
import Listado from "./components/Listado";
import Formulario from "./components/Formulario";
import { useState } from "react";
import Alert from "./components/Alert";

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [alert, setAlert] = useState({ error: "", msg: "", color: "" });
  return (
    <div className="w-100 mt-3 container justify-content-center h-100">
      <h1>Listado de colaboradores</h1>
      <div className="sm-4 mb-4">
        <Buscador
          colaboradores={colaboradores}
          setColaboradores={setColaboradores}
        />
      </div>

      <div className="mb-5">
        <Listado colaboradores={colaboradores} />
      </div>
      <div>
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
