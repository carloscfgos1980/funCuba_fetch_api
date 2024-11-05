import { useState } from "react";
import taxiData from "./contentText/taxiData";

const CheckBoxComponent = ({ start, end, getTaxiPrice }: any) => {
  const [checked, setChecked] = useState<boolean>(false);

  const selectedTrip = taxiData.find(
    (trip) =>
      (trip.tripStart === start && trip.tripEnd === end) ||
      (trip.tripStart === end && trip.tripEnd === start),
  );

  const price = selectedTrip?.price;
  const handleChange = (value: number | undefined) => {
    setChecked(!checked);
    if (!checked) {
      return getTaxiPrice(value);
    } else {
      return getTaxiPrice(0);
    }
  };

  return (
    <div>
      <div className="form-check">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => handleChange(price)}
        />
        <label className="form-check-label">
          <p className="lead ms-3">
            {`Taxi ${selectedTrip?.tripStart} to ${selectedTrip?.tripEnd} - $ ${selectedTrip?.price}`}
          </p>
        </label>
      </div>
    </div>
  );
};

export default CheckBoxComponent;
