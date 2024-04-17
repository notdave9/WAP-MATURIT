import { Link, useParams, useNavigate } from "react-router-dom";
import { getSchejbalById, deleteSchejbal } from "../../../Models/Schejbal";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function SchejbalView() {
  const { id } = useParams();
  const [schejbal, setSchejbal] = useState();
  const [loaded, setLoaded] = useState();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getSchejbalById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setSchejbal(data.payload);
      setLoaded(true);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (formData === schejbal.name) {
      const result = await deleteSchejbal(id);
      if (result.status === 200) {
        redirect(id);
      } else {
        setInfo(result.msg);
      }
    } else {
      setInfo("Wrong schejbal name");
    }
  };

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const redirect = (id) => {
    return navigate(`/deletedschejbal/${id}`);
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Schejbal not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Loading schejbal...</p>
      </>
    );
  }

  return (
    <>
      <h1>{schejbal.name}</h1>

      <div className="card">
        <div className="card-content">
          <div className="content">
            <p>name: {schejbal.name}</p>
            <p>pohlavi: {schejbal.pohlavi}</p>
            <p>ucitel: {schejbal.ucitel}</p>
          </div>
        </div>
      </div>

      <form>
        <p className="subtitle">Napište jméno pro smazání schejbala</p> <br/>
        <input className="input" type="text" placeholder={schejbal.name} onChange={handleChange} />
        <button className="button is-medium is-dark" onClick={handleDelete}>Delete schejbal</button>
        <p>{info}</p>
      </form>

      <Link to={"/"}>
          <FontAwesomeIcon icon={faArrowLeft} size="3x" color="grey"/>
      </Link>
    </>
  );
}

