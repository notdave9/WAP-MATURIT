import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateDavid, getDavidById } from "../../../Models/David";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";


export default function DavidUpdateForm() {
  const { id } = useParams();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const [loaded, setLoaded] = useState();
  const [david, setDavid] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getDavidById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setDavid(data.payload);
      setLoaded(true);
    }
  };

  const postForm = async () => {
    const david = await updateDavid(id, formData);
    if (david.status === 200) {
      redirectToSuccessPage(david.payload._id);
    } else {
      setInfo(david.msg);
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
    return navigate(`/david/${id}`);
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
      <h1>Update {david.name}</h1>

      <div className="field">
          <div className="control has-icons-left has-icons-right">
            <input
              className="input is-medium"
              name="name"
              type="text"
              placeholder="Enter name of david"
              required
              defaultValue={david.name}
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
              name="iq"
              placeholder="Enter number of iq"
              required
              defaultValue={david.iq}
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
              name="vek"
              placeholder="Enter vek"
              required
              defaultValue={david.vek}
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

      

      <button className="button is-medium is-dark" onClick={handlePost}>Update david</button>

      <p>{info}</p>

      <Link to={"/"}>
          <FontAwesomeIcon icon={faArrowLeft} size="3x" color="grey"/>
      </Link>
    </>
  );
}
