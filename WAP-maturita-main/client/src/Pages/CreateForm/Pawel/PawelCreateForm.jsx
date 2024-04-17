import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createPawel } from "../../../Models/Pawel";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

 
export default function BusinessmanCreateForm() {
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const pawel = await createPawel(formData);
    if (pawel.status === 201) {
      redirectToSuccessPnalada(pawel.payload._id);
    } else {
      setInfo(pawel.msg);
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  };
  const redirectToSuccessPnalada = (id) => {
    return navigate(`/createdpawel/${id}`);
  };

  return (
    <>
      <h1>Pawel create form</h1>

        <div className="field">
          <div className="control has-icons-left has-icons-right">
            <input
              className="input is-medium"
              name="name"
              type="text"
              placeholder="Enter name of pawel"
              required
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
              type="text"
              name="nalada"
              placeholder="Enter nalada"
              required
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
              name="chytrost"
              placeholder="Enter chytrost"
              required
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


        <button className="button is-medium is-dark" onClick={handlePost}>Create pawel</button>

      <p>{info}</p>

      <Link to={"/"}>
          <FontAwesomeIcon icon={faArrowLeft} size="3x" color="grey"/>
      </Link>
    </>
  );
}
