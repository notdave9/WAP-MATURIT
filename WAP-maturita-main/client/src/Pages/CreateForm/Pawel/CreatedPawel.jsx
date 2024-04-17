import { Link, useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function createdBusinessman() {
  const { id } = useParams();

  return (
    <>
      <div className="card">
        <div className="card-content">
          <div className="content">
            Pawel {id} was created
          </div>
        </div>
      </div>
      <Link to={`/pawel/${id}`}>
        <p>View pawel</p>
      </Link>
      <Link to={"/pawel"}>
          <FontAwesomeIcon icon={faArrowLeft} size="3x" color="grey"/>
      </Link>
    </>
  );
}
