import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useAppDispatch, useAppSelector } from "../redux/configureStore";
import { togglePostSuccessful } from "../redux/filteredTripPlan";
import celebration from "./imagesPages/celebration.gif"


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

const ModalSuccess = () => {
  const modal = useAppSelector(state => state.filteredTripPlan.postSuccessful);
  const dispatch = useAppDispatch();

  const toggle = () => {
    dispatch(togglePostSuccessful())
  }

  return (
      <Modal
        open={modal}
        onClose={toggle}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="title-closeButton mb-5">
              <div className="d-flex justify-content-around">
                <p className="display-5 mt-5">Thanks for choosing Fun Cuba!</p>
                <p
                  className="lead mt-3"
                  onClick={toggle}
                  style={{ cursor: "pointer" }}
                >
                  X
                </p>
              </div>
              <div className="mt-5">
                <p className="lead">You should get a confirmation email (hello@funcuba.it.com)</p>
                <p className="lead">Inf you get this email, something went wrong, please contact us: <a href="mailto:fun.cuba.2024@gmail.com" className="text-primary">Fun Cuba</a></p>
                <div className="text-center">
                  <img src={celebration}
                      width="50%"
                      alt="Celebration" />                
                </div>
              </div>
          </div>
        </Box>
      </Modal>
  );
};

export default ModalSuccess;
