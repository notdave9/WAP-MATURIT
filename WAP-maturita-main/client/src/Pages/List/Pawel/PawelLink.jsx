import { Link } from "react-router-dom";

export default function PawelLink(props) {
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
                <Link to={`/updatepawel/${props.id}`}>
                  <p>Update pawel</p>
                </Link>
              </span>
            </p>

            <p className="card-footer-item">
              <span>
                <Link to={`/pawel/${props.id}`}>
                  <p>View Pawel</p>
                </Link>
              </span>
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
