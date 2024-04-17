import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Ondra() {
  return (
    <>
      <Link to={"/createondra"}>
        <div className="card main-card">
          <div className="card-content">
            <div className="content">
              <p>Ondra create form</p>
            </div>
          </div>
        </div>
      </Link>

      <Link to={"/ondras"}>
        <div className="card main-card">
          <div className="card-content">
            <div className="content">
              <p>Ondra list</p>
            </div>
          </div>
        </div>
      </Link>

      <Link to={"/"}>
        <FontAwesomeIcon icon={faArrowLeft} size="3x" color="grey" />
      </Link>
    </>
  );
}
