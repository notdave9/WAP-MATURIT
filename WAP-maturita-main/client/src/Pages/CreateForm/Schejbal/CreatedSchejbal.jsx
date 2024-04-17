import { Link, useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function createdSchejbal() {
  const { id } = useParams();

  return (
    <>
      <div className="card">
        <div className="card-content">
          <div className="content">
            Schejbal {id} was created
          </div>
        </div>
      </div>
      <Link to={`/schejbal/${id}`}>
        <p>View schejbal</p>
      </Link>
      <Link to={"/schejbal"}>
          <FontAwesomeIcon icon={faArrowLeft} size="3x" color="grey"/>
      </Link>
    </>
  );
}
