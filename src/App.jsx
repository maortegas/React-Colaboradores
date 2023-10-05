import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Formulario from './components/Formulario';
import Alert from './components/Alert';
import Listado from './components/Listado';
import { BaseColaboradores } from "./components/BaseColaboradores.js"
import Buscador from './components/Buscador';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function App() {
 const [colaboradores, setColaboradores]=useState(BaseColaboradores);
 const [buscador, setBuscador]=useState([]);
 const [buscadorFlag, setBuscadorFlag]=useState(true);
 const [alert, setAlert]=useState({ error: "", msg: "", color: "" });

  return (
    <>
      <div className=" mx-4 m-5 w-75">
        <Row>
          <Col sm={12} md={9}>
          <h1>Listado de colaboradores</h1>
            <Buscador colaboradores={colaboradores} setBuscador= {setBuscador} setBuscadorFlag={setBuscadorFlag} />
          </Col>
          <Col sm={12} md={9} className="">
            <Listado colaboradores={ buscadorFlag ? colaboradores:buscador} /> 
          </Col>
          <Col md={3}  className="">
            <p className="text-center fs-4" >Agregar colaborador</p>
            <Formulario colaboradores={colaboradores} setColaboradores={setColaboradores} setAlert={setAlert}  />
            {alert.msg && <Alert mensaje={alert.msg} variant={alert.color} /> }
          </Col>
        </Row>
      </div>
    </>
  )
}

export default App