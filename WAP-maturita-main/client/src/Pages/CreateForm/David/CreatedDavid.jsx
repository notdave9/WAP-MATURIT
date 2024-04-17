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
            David {id} was created
          </div>
        </div>
      </div>
      <Link to={`/david/${id}`}>
        <p>View david</p>
      </Link>
      <Link to={"/david"}>
          <FontAwesomeIcon icon={faArrowLeft} size="3x" color="grey"/>
      </Link>
    </>
  );
}
