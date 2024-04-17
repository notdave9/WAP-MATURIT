import { Link } from "react-router-dom";

export default function DavidLink(props) {
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
                <Link to={`/updatedavid/${props.id}`}>
                  <p>Update david</p>
                </Link>
              </span>
            </p>

            <p className="card-footer-item">
              <span>
                <Link to={`/david/${props.id}`}>
                  <p>View David</p>
                </Link>
              </span>
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
