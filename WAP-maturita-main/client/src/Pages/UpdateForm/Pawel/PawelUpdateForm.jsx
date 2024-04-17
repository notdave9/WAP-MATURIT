import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updatePawel, getPawelById } from "../../../Models/Pawel";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";


export default function PawelUpdateForm() {
  const { id } = useParams();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const [loaded, setLoaded] = useState();
  const [pawel, setPawel] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getPawelById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setPawel(data.payload);
      setLoaded(true);
    }
  };

  const postForm = async () => {
    const pawel = await updatePawel(id, formData);
    if (pawel.status === 200) {
      redirectToSuccessPage(pawel.payload._id);
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

  const redirectToSuccessPage = (id) => {
    return navigate(`/pawel/${id}`);
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
      <h1>Update {pawel.name}</h1>

      <div className="field">
          <div className="control has-icons-left has-icons-right">
            <input
              className="input is-medium"
              name="name"
              type="text"
              placeholder="Enter name of pawel"
              required
              defaultValue={pawel.name}
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
              placeholder="Enter pawlovu naladu"
              required
              defaultValue={pawel.nalada}
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
              defaultValue={pawel.chytrost}
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



      

      <button className="button is-medium is-dark" onClick={handlePost}>Update pawel</button>

      <p>{info}</p>

      <Link to={"/"}>
          <FontAwesomeIcon icon={faArrowLeft} size="3x" color="grey"/>
      </Link>
    </>
  );
}
