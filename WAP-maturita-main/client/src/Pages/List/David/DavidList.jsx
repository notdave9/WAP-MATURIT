import { Link } from "react-router-dom";
import DavidLink from "./DavidLink";
import { useState, useEffect } from "react";
import { getAllDavids } from "../../../Models/David";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function DavidList() {
  const [davids, setDavids] = useState();
  const [loaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllDavids();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setDavids(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Davids not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Davids are loading</p>
      </>
    );
  }

  return (
    <>
      <h1>David list</h1>

      {davids.map((david, index) => (
        <DavidLink key={index} name={david.name} id={david._id} />
      ))}

      <Link to={"/david"}>
        <FontAwesomeIcon icon={faArrowLeft} size="3x" color="grey" />
      </Link>
    </>
  );
}
