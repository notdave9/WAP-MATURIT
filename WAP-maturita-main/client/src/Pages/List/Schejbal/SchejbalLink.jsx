import { Link } from "react-router-dom";

export default function SchejbalLink(props) {
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
                <Link to={`/updateschejbal/${props.id}`}>
                  <p>Update schejbal</p>
                </Link>
              </span>
            </p>

            <p className="card-footer-item">
              <span>
                <Link to={`/schejbal/${props.id}`}>
                  <p>View Schejbal</p>
                </Link>
              </span>
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
