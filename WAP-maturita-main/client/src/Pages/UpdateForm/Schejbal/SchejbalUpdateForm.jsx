import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateSchejbal, getSchejbalById } from "../../../Models/Schejbal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";


export default function SchejbalUpdateForm() {
  const { id } = useParams();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const [loaded, setLoaded] = useState();
  const [schejbal, setSchejbal] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getSchejbalById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setSchejbal(data.payload);
      setLoaded(true);
    }
  };

  const postForm = async () => {
    const schejbal = await updateSchejbal(id, formData);
    if (schejbal.status === 200) {
      redirectToSuccessPage(schejbal.payload._id);
    } else {
      setInfo(schejbal.msg);
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
    return navigate(`/schejbal/${id}`);
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
      <h1>Update {schejbal.name}</h1>

      <div className="field">
          <div className="control has-icons-left has-icons-right">
            <input
              className="input is-medium"
              name="name"
              type="text"
              placeholder="Enter name of schejbal"
              required
              defaultValue={schejbal.name}
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
              name="pohlavi"
              placeholder="Enter pohlavi"
              required
              defaultValue={schejbal.pohlavi}
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
              type="text"
              name="ucitel"
              placeholder="Enter ucitel"
              required
              defaultValue={schejbal.ucitel}
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

      

      <button className="button is-medium is-dark" onClick={handlePost}>Update schejbal</button>

      <p>{info}</p>

      <Link to={"/"}>
          <FontAwesomeIcon icon={faArrowLeft} size="3x" color="grey"/>
      </Link>
    </>
  );
}
