import { useEffect, useState } from "react";
import RMService from "../../services/RM.Service";
import Location from "./Location";

const Locationes = () => {
  const [locationes, setLocationes] = useState([]);

  useEffect(() => {
    RMService.getAllLocations().then((data) => setLocationes(data.results)).catch((error) => console.log(error));
  }, []);

  const locationList = locationes.map((m) => <Location location={m} key={m.id} />);

  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {locationList}
        </div>
      </div>
    </div>
  );
};

export default Locationes;