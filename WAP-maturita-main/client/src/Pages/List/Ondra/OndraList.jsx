import { Link } from "react-router-dom";
import OndraLink from "./OndraLink";
import { useState, useEffect } from "react";
import { getAllOndras } from "../../../Models/Ondra";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function OndraList() {
  const [ondras, setOndras] = useState();
  const [loaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllOndras();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setOndras(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Ondras not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Ondras are loading</p>
      </>
    );
  }

  return (
    <>
      <h1>Ondras list</h1>

      {ondras.map((ondra, index) => (
        <OndraLink key={index} name={ondra.name} id={ondra._id} />
      ))}

      <Link to={"/ondra"}>
        <FontAwesomeIcon icon={faArrowLeft} size="3x" color="grey" />
      </Link>
    </>
  );
}
