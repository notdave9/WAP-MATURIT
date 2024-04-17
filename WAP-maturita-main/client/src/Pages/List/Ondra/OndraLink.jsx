import { Link } from "react-router-dom";

export default function OndraLink(props) {
  return (
    <>
      <div className="column">
        <div className="card custom-card">
          <div className="card-content">
            <p className="subtitle">{props.name}</p>
          </div>
          <footer className="card-footer">
            <p className="card-footer-item">
              <span>
                <Link to={`/updateondra/${props.id}`}>
                  <p>Update ondra</p>
                </Link>
              </span>
            </p>

            <p className="card-footer-item">
              <span>
                <Link to={`/ondra/${props.id}`}>
                  <p>View Ondra</p>
                </Link>
              </span>
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
