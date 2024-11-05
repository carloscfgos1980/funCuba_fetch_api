import { useState } from "react";
import airData from "./contentText/airData";
import FormSelectItem from "./FormSelectItem";
import { useDispatch } from "react-redux";

import { addAirBnB, deleteAirBnB } from "../redux/filteredTripPlan";
import { useAppSelector } from "../redux/configureStore";
import TableAir from "./TableAir";

const AddAirB = ({ city, daysRoute, modal }: any) => {
  const [airId, setAirId] = useState<string>("Analsa");
  const [hab, setHab] = useState<string>("1");

  const tripPlan = useAppSelector((state) => state.filteredTripPlan);
  const airBnBs = tripPlan.route.airBnBs;
  const sum = tripPlan.route.totalAir;

  const dispatch = useDispatch();

  const seletedAirBs = airData.filter((air) => air.city === city);

  const getArrayOptions = (hab: number | undefined) => {
    if (hab === 1) {
      return ["1"];
    } else if (hab === 2) {
      return ["1", "2"];
    } else if (hab === 3) {
      return ["1", "2", "3"];
    } else if (hab === 4) {
      return ["1", "2", "3", "4"];
    } else {
      return ["1", "2", "3", "4", "5"];
    }
  };

  const getItemId = (value: string): void => setAirId(value);

  const seletedAir = seletedAirBs.find((air) => air.id === airId);
  const AirHab: number | undefined = seletedAir?.hab;
  const arrayHab = getArrayOptions(AirHab);

  const price: any = seletedAir?.price;

  const subTotal: number | undefined = price * Number(hab) * daysRoute;

  const getAirB = () => {
    dispatch(
      addAirBnB({
        airId,
        name: seletedAir?.name,
        price,
        hab: Number(hab),
        subTotal,
      }),
    );
  };

  const deleteAirB = (airB: string) => {
    dispatch(deleteAirBnB(airB));
  };

  return (
    <div>
      <h1 className="text-center">Pick a nice place to sleep!</h1>
      <div className="row justify-content-center align-content-center">
        <div className="addAir col-6">
          <FormSelectItem getItemId={getItemId} items={seletedAirBs} />
        </div>
        <div className="col-5">
          <select
            className="form-select"
            aria-label="Default select example"
            defaultValue={"DEFAULT"}
            onChange={(e) => setHab(e.target.value)}
          >
            <option value="DEFAULT" disabled>
              Rooms
            </option>
            {arrayHab.map((item: any, index: number) => {
              return (
                <option value={item} key={index}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className="price col-3 mt-2">
          {seletedAir ? <p>price: $ {price}</p> : <p>price: 0</p>}
        </div>
        <div className="subtotal col-3 mt-2">
          {seletedAir ? <p> amount: ${subTotal}</p> : <p> amount: 0</p>}
        </div>
        <button className="col-3 btn btn-success mt-2" onClick={getAirB}>
          Add
        </button>
      </div>
      <div>
        <TableAir items={airBnBs} deleteAirB={deleteAirB} modal={modal} />
        <p className="lead fw-bold">Total: {sum}</p>
      </div>
    </div>
  );
};

export default AddAirB;
