import { Link, useParams, useNavigate } from "react-router-dom";
import { getDavidById, deleteDavid } from "../../../Models/David";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function DavidView() {
  const { id } = useParams();
  const [david, setDavid] = useState();
  const [loaded, setLoaded] = useState();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getDavidById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setDavid(data.payload);
      setLoaded(true);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (formData === david.name) {
      const result = await deleteDavid(id);
      if (result.status === 200) {
        redirect(id);
      } else {
        setInfo(result.msg);
      }
    } else {
      setInfo("Wrong david name");
    }
  };

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const redirect = (id) => {
    return navigate(`/deleteddavid/${id}`);
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>David not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Loading david...</p>
      </>
    );
  }

  return (
    <>
      <h1>{david.name}</h1>

      <div className="card">
        <div className="card-content">
          <div className="content">
            <p>name: {david.name}</p>
            <p>iq: {david.iq}</p>
            <p>vek: {david.vek}</p>
          </div>
        </div>
      </div>

      <form>
        <p className="subtitle">Napište jméno pro smazání davida</p> <br/>
        <input className="input" type="text" placeholder={david.name} onChange={handleChange} />
        <button className="button is-medium is-dark" onClick={handleDelete}>Delete david</button>
        <p>{info}</p>
      </form>

      <Link to={"/"}>
          <FontAwesomeIcon icon={faArrowLeft} size="3x" color="grey"/>
      </Link>
    </>
  );
}

