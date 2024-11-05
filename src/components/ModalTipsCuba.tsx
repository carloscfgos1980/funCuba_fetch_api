import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";

const style = {
  position: "absolute",
  paddingLeft: "3%",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  height: "60vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  overflow: "scroll",
};

const ModalTipsCuba = () => {
  const [modal, setModal] = useState<boolean>(false);
  const toggle = (): void => setModal(!modal);

  return (
    <div>
      <p className="btn btn-link float-end" onClick={toggle}>
        more...
      </p>
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
                <p className="display-3 mt-5">Tips</p>
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
          <div className="content pe-5">
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <ul>
                <li>Take small bills</li>
                <li>
                  Bring ur spared stuff. We, Cubans, recycle everything. Things
                  that you would usually throw away, will make a Cuban family
                  very happy.{" "}
                </li>
                <li>
                  Candies and chocolates will ease any bureaucratic process you
                  might need to do in the Island!
                </li>
                <li>
                  Cubans are very friendly and social but most are poor so if
                  you wanna have a nice chat while sitting in a coffee shop,
                  you'll have to pay for their beverage
                </li>
                <li>Cuba is ruled by a socialist government</li>
                <li>
                  Realpolitik is an issue there, especially criticizing the
                  regime
                </li>
                <li>
                  Most of the properties are state owned. We only deal with the
                  private sector. Besides making profits, empowering fellow
                  citizens is one of our main goals
                </li>
                <li>Money issue:</li>
              </ul>
              <ol>
                <li>Cuba has a local currency (peso cubano)</li>
                <li>
                  Although you can pay some services with dollars or euros. You
                  will need some “pesos cubanos”. This is the tricky part and
                  where Fun Cuba comes very handy. It is not easy to extract
                  money from your credit card, sometimes even impossible due the
                  restrictions of the US Embargo. Our advice is to bring as much
                  cash as possible... but traveling with cash is risky, right?
                  Well... the amount you have to bring is a significant less if
                  you use our service. You can make the deposit in a Dutch bank
                  (Triodos) and we ship the money to Cuba right away!
                </li>
                <li>
                  Currency exchange. There is an official rate that is 3 times
                  less than the real one (black market)... if you don't wanna
                  feel robbed... you better find some honest Cuban that would
                  make the exchange for you. We provide that Cuban!
                </li>
              </ol>
            </Typography>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalTipsCuba;
