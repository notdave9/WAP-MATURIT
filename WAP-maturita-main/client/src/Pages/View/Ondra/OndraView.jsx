import { Link, useParams, useNavigate } from "react-router-dom";
import { getOndraById, deleteOndra } from "../../../Models/Ondra";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function OndraView() {
  const { id } = useParams();
  const [ondra, setOndra] = useState();
  const [loaded, setLoaded] = useState();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getOndraById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setOndra(data.payload);
      setLoaded(true);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (formData === ondra.name) {
      const result = await deleteOndra(id);
      if (result.status === 200) {
        redirect(id);
      } else {
        setInfo(result.msg);
      }
    } else {
      setInfo("Wrong ondra name");
    }
  };

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const redirect = (id) => {
    return navigate(`/deletedondra/${id}`);
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Ondra not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Loading ondra...</p>
      </>
    );
  }

  return (
    <>
      <h1>{ondra.name}</h1>

      <div className="card">
        <div className="card-content">
          <div className="content">
            <p>name: {ondra.name}</p>
            <p>sila: {ondra.sila}</p>
            <p>rychlost: {ondra.rychlost}</p>
          </div>
        </div>
      </div>

      <form>
        <p className="subtitle">Napište jméno pro smazání ondry</p> <br/>
        <input className="input" type="text" placeholder={ondra.name} onChange={handleChange} />
        <button className="button is-medium is-dark" onClick={handleDelete}>Delete ondra</button>
        <p>{info}</p>
      </form>

      <Link to={"/"}>
          <FontAwesomeIcon icon={faArrowLeft} size="3x" color="grey"/>
      </Link>
    </>
  );
}

