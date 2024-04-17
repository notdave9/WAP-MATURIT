import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div className="card-container">
      <Link to={"/david"}>
        <div className="card main-card">
          <div className="card-content">
            <div className="content">
              <p>David</p>
            </div>
          </div>
        </div>
      </Link>

      <Link to={"/schejbal"}>
        <div className="card main-card">
          <div className="card-content">
            <div className="content">
              <p>Schejbal</p>
            </div>
          </div>
        </div>
      </Link>

      <Link to={"/pawel"}>
        <div className="card main-card">
          <div className="card-content">
            <div className="content">
              <p>Pawel</p>
            </div>
          </div>
        </div>
      </Link>

      <Link to={"/ondra"}>
        <div className="card main-card">
          <div className="card-content">
            <div className="content">
              <p>Ondra</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
