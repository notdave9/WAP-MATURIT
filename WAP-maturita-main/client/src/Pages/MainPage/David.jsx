import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function David() {
  return (
    <>
      <Link to={"/createdavid"}>
        <div className="card main-card">
          <div className="card-content">
            <div className="content">
              <p>David create form</p>
            </div>
          </div>
        </div>
      </Link>

      <Link to={"/davids"}>
        <div className="card main-card">
          <div className="card-content">
            <div className="content">
              <p>David list</p>
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
