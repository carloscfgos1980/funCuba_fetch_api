import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useAppDispatch, useAppSelector } from "../redux/configureStore";
import TableGeneral from "./TableGeneral";
import TableAir from "./TableAir";
import TableChill from "./TableChill";
import { deleteRoute, saveTripAsync } from "../redux/filteredTripPlan";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  paddingLeft: "3%",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  height: "80vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  overflow: "scroll",
};

const ModalTrip = ({ modal, toggle, editingRoute }: any) => {
  const tripPlan: any = useAppSelector((state) => state.filteredTripPlan);
  const routes = tripPlan.trip.routes;
  const dispatch = useAppDispatch();

  const deletingRoute = (id: string) => {
    dispatch(deleteRoute(id));
  };

  const savingTrip = () => {
    dispatch(saveTripAsync(tripPlan.trip));
  };

  return (
    <div>
      <button className="btn btn-warning" onClick={toggle}>
        Check ur trip
      </button>
      <Modal
        open={modal}
        onClose={toggle}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="title-closeButton">
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              className=" mx-5"
            >
              <div className="d-flex justify-content-between">
                <p className="display-3 mt-5">TRIP</p>
                <p
                  className="lead mt-3"
                  onClick={toggle}
                  style={{ cursor: "pointer" }}
                >
                  X
                </p>
              </div>
            </Typography>
          </div>
          <div className="routes">
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <div className="mx-4">
                <div className="client-data">
                  <p>Reservation #: {tripPlan.trip.reservationId}</p>
                  <p>
                    Name: {tripPlan.trip.clientData.name}{" "}
                    {tripPlan.trip.clientData.lastName}
                  </p>
                  <p>Country: {tripPlan.trip.clientData.country}</p>
                  <p>Email: {tripPlan.trip.clientData.email}</p>
                </div>
                <TableGeneral
                  arrive={tripPlan.trip.tripDateStart}
                  departure={tripPlan.trip.tripDateEnd}
                  days={tripPlan.trip.tripDays}
                  amount={tripPlan.trip.totalAmount}
                />
              </div>
              {routes.map((route: any, index: number) => {
                const airB = route.airBnBs;
                const chill = route.chillOuts;
                return (
                  <div key={index} className="bg-light m-4 border border-black">
                    <div>
                      <p className="lead text-center">{route.routeEnd}</p>
                    </div>
                    <div>
                      <p className="ms-2">General data</p>
                      <TableGeneral
                        arrive={route.routeDateStart}
                        departure={route.routeDateEnd}
                        days={route.days}
                        amount={route.totalRoute}
                      />
                    </div>
                    <div>
                      <p className="ms-2">Air B&Bs</p>
                      <TableAir items={airB} modal={modal} />
                    </div>
                    <div>
                      <p className="ms-2">Chilling</p>
                      <TableChill items={chill} modal={modal} />
                    </div>
                    <div>
                      <p className="ms-2">Route Amount: ${route.totalRoute}</p>
                    </div>
                    <div className="d-flex justify-content-evenly my-3">
                      <button
                        className="btn btn-warning"
                        onClick={() => editingRoute(route.id)}
                      >
                        EDIT
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => deletingRoute(route.id)}
                      >
                        DELETE
                      </button>
                    </div>
                  </div>
                );
              })}
            </Typography>
          </div>
          <div className="postData">
            <Link to="/feedback">
              <button className="btn btn-success" onClick={savingTrip}>
                SEND
              </button>
            </Link>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalTrip;
