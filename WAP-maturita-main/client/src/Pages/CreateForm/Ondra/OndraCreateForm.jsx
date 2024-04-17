import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createOndra } from "../../../Models/Ondra";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function OndraCreateForm() {
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const ondra = await createOndra(formData);
    if (ondra.status === 201) {
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
    return navigate(`/createdondra/${id}`);
  };

  return (
    <>
      <h1>Ondra create form</h1>

      <div className="field">
        <div className="control has-icons-left has-icons-right">
          <input
            className="input is-medium"
            name="name"
            type="text"
            placeholder="Enter name of Ondra"
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
            type="number"
            name="sila"
            placeholder="Enter sila"
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
            name="rychlost"
            placeholder="Enter rychlost"
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



      <button className="button is-medium is-dark" onClick={handlePost}>
        Create ondra
      </button>

      <p>{info}</p>

      <Link to={"/ondra"}>
        <FontAwesomeIcon icon={faArrowLeft} size="3x" color="grey" />
      </Link>
    </>
  );
}
