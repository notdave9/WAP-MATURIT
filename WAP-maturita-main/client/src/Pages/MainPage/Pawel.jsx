import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Pawel() {
  return (
    <>
      <Link to={"/createpawel"}>
        <div className="card main-card">
          <div className="card-content">
            <div className="content">
              <p>Pawel create form</p>
            </div>
          </div>
        </div>
      </Link>

      <Link to={"/pawels"}>
        <div className="card main-card">
          <div className="card-content">
            <div className="content">
              <p>Pawel list</p>
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
