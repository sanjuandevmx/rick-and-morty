import { useEffect, useState } from "react";
import RMService from "../../services/RM.Service";
import Episode from "./Episode";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    RMService.getAllEpisodes()
      .then((data) => setEpisodes(data.results))
      .catch((error) => console.log(error));
  }, []);

  const episodeList = episodes.map((m) => <Episode episode={m} key={m.id} />);

  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {episodeList}
        </div>
      </div>
    </div>
  );
};

export default Episodes;