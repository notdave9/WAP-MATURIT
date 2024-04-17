import { Link, useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function PawelDeleted() {
  const { id } = useParams();

  return (
    <>
      <div className="card">
        <div className="card-content">
          <div className="content">
            <p>Pawel {id} was deleted</p>
          </div>
        </div>
      </div>

      <Link to={"/"}>
          <FontAwesomeIcon icon={faArrowLeft} size="3x" color="grey"/>
      </Link>
    </>
  );
}
