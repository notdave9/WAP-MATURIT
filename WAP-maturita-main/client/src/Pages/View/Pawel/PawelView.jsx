import { Link, useParams, useNavigate } from "react-router-dom";
import { getPawelById, deletePawel } from "../../../Models/Pawel";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function PawelView() {
  const { id } = useParams();
  const [pawel, setPawel] = useState();
  const [loaded, setLoaded] = useState();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getPawelById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setPawel(data.payload);
      setLoaded(true);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (formData === pawel.name) {
      const result = await deletePawel(id);
      if (result.status === 200) {
        redirect(id);
      } else {
        setInfo(result.msg);
      }
    } else {
      setInfo("Wrong pawel name");
    }
  };

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const redirect = (id) => {
    return navigate(`/deletedpawel/${id}`);
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Pawel not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Loading pawel...</p>
      </>
    );
  }

  return (
    <>
      <h1>{pawel.name}</h1>

      <div className="card">
        <div className="card-content">
          <div className="content">
            <p>name: {pawel.name}</p>
            <p>nalada: {pawel.nalada}</p>
            <p>chytrost: {pawel.chytrost}</p>
          </div>
        </div>
      </div>

      <form>
        <p className="subtitle">Napište jméno pro smazání pawla</p> <br/>
        <input className="input" type="text" placeholder={pawel.name} onChange={handleChange} />
        <button className="button is-medium is-dark" onClick={handleDelete}>Delete pawel</button>
        <p>{info}</p>
      </form>

      <Link to={"/"}>
          <FontAwesomeIcon icon={faArrowLeft} size="3x" color="grey"/>
      </Link>
    </>
  );
}

