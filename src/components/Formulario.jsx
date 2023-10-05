import { useState } from "react";

const Formulario = ({ colaboradores, setColaboradores, setAlert }) => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [edad, setEdad] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefono, setTelefono] = useState("");

  const asignaID = (arreglo) => {
    let id = 1;
    let paso = [...arreglo];
    if (paso.length > 0) {
      const ordenado = paso.sort((x, y) => y.id - x.id);
      id = Number(ordenado[0].id) + 1;
    }
    return id;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !correo || !edad || !cargo || !telefono) {
      setAlert({
        msg: "Todos los datos son obligatorios",
        color: "danger",
        error: true,
      });
    } else {
      setAlert({
        msg: "Datos enviados exitosamente",
        color: "success",
        error: false,
      });
      const id = asignaID(colaboradores);
      const colaborador = {
        id,
        nombre,
        correo,
        edad,
        cargo,
        telefono,
      };
      setColaboradores([...colaboradores, colaborador]);
      setNombre("");
      setCorreo("");
      setEdad("");
      setCargo("");
      setTelefono("");
    }
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            name="name"
            id="name"
            placeholder="Nombre del colaborador"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="email"
            name="email"
            id="email"
            placeholder="Correo del colaborador"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="number"
            name="age"
            id="age"
            placeholder="Edad del colaborador"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            name="position"
            id="position"
            placeholder="Cargo del colaborador"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="number"
            name="phone"
            id="phone"
            placeholder="Telefono del colaborador"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Agregar colaborador
        </button>
        <div className="mt-4"></div>
      </form>
    </div>
  );
};

export default Formulario;