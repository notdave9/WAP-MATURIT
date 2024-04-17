import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateOndra, getOndraById } from "../../../Models/Ondra";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";


export default function OndraUpdateForm() {
  const { id } = useParams();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const [loaded, setLoaded] = useState();
  const [ondra, setOndra] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getOndraById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setOndra(data.payload);
      setLoaded(true);
    }
  };

  const postForm = async () => {
    const ondra = await updateOndra(id, formData);
    if (ondra.status === 200) {
      redirectToSuccessPage(ondra.payload._id);
    } else {
      setInfo(ondra.msg);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  };

  const redirectToSuccessPage = (id) => {
    return navigate(`/ondra/${id}`);
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
      <h1>Update {ondra.name}</h1>

      <div className="field">
          <div className="control has-icons-left has-icons-right">
            <input
              className="input is-medium"
              name="name"
              type="text"
              placeholder="Enter name of ondra"
              required
              defaultValue={ondra.name}
              onChange={(e) => handleChange(e)}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope fa-xs" />
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check fa-xs" />
            </span>
          </div>
        </div>

        <div className="field">
          <div className="control has-icons-left has-icons-right">
            <input
              className="input is-medium"
              type="number"
              name="sila"
              placeholder="Enter number sila"
              required
              defaultValue={ondra.sila}
              onChange={(e) => handleChange(e)}
            />
            <span className="icon is-left">
              <i className="fas fa-envelope fa-sm" />
            </span>
            <span className="icon is-right">
              <i className="fas fa-check fa-sm" />
            </span>
          </div>
        </div>

        <div className="field">
          <div className="control has-icons-left has-icons-right">
            <input
              className="input is-medium"
              type="number"
              name="rychlost"
              placeholder="Enter rychlost"
              required
              defaultValue={ondra.rychlost}
              onChange={(e) => handleChange(e)}
            />
            <span className="icon is-medium is-left">
              <i className="fas fa-envelope" />
            </span>
            <span className="icon is-medium is-right">
              <i className="fas fa-check" />
            </span>
          </div>
        </div>



      

      <button className="button is-medium is-dark" onClick={handlePost}>Update ondra</button>

      <p>{info}</p>

      <Link to={"/"}>
          <FontAwesomeIcon icon={faArrowLeft} size="3x" color="grey"/>
      </Link>
    </>
  );
}
