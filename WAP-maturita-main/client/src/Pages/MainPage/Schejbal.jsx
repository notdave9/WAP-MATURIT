import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Schejbal() {
  return (
    <>
      <Link to={"/createschejbal"}>
        <div className="card main-card">
          <div className="card-content">
            <div className="content">
              <p>Schejbal create form</p>
            </div>
          </div>
        </div>
      </Link>

      <Link to={"/schejbals"}>
        <div className="card main-card">
          <div className="card-content">
            <div className="content">
              <p>Schejbal list</p>
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
