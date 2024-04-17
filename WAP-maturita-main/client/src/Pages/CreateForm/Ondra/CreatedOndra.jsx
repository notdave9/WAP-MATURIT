import { Link, useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function createdOndra() {
  const { id } = useParams();

  return (
    <>
      <div className="card">
        <div className="card-content">
          <div className="content">
            Ondra {id} was created
          </div>
        </div>
      </div>
      <Link to={`/ondra/${id}`}>
        <p>View Ondra</p>
      </Link>
      <Link to={"/ondra"}>
          <FontAwesomeIcon icon={faArrowLeft} size="3x" color="grey"/>
      </Link>
    </>
  );
}
