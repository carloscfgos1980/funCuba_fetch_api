import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import pagesContent from "../../components/contentText/pagesContent";
import David_hab from "../../components/imagesPages/David_hab.jpg";
import giron from "../../components/imagesPages/giron.jpg";
import nicho from "../../components/imagesPages/nicho.jpg";
import ModalTipsCuba from "../../components/ModalTipsCuba";

const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 500,
  },
});

const Home = () => {
  const home = pagesContent.home;

  return (
    <div className=" bg-light">
      <div className="container-lg p-3">
        <h1 className="display-5 text-center my-3">
          Welcome! We are Fun Cuba. Let us show the real Cuba!
        </h1>
        <div className="Intro py-3">
          <div className="row justify-content-around g-5 px-lg-5">
            <img
              className="col-10 text-center col-sm-3"
              width="30%"
              src={David_hab}
              alt="David"
            />
            <div className="col-10 col-sm-7">
              <p className="lead">{home.intro} </p>
              <div className="d-flex">
                <span className="mx-2 px-2">
                  <CustomWidthTooltip title={home.tooltipAirB}>
                    <Button sx={{ m: 1 }}>Airbnb booking</Button>
                  </CustomWidthTooltip>
                  <CustomWidthTooltip title={home.tooltipTaxi}>
                    <Button sx={{ m: 1 }}>Taxi booking</Button>
                  </CustomWidthTooltip>
                </span>
                <span>
                  <CustomWidthTooltip title={home.tooltipGuidance}>
                    <Button sx={{ m: 1 }}>Guidance</Button>
                  </CustomWidthTooltip>
                  <CustomWidthTooltip title={home.tooltipChill}>
                    <Button sx={{ m: 1 }}>Chill Outs</Button>
                  </CustomWidthTooltip>
                </span>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="web_explanation row justify-content-around g-5 px-lg-5 px-3">
          <img
            className="col-10 col-sm-4"
            width="30%"
            src={giron}
            alt="Giron"
          />
          <p className="col-10 col-sm-7 order-sm-first lead align-self-sm-center">
            {home.tripExplanation}{" "}
          </p>
        </div>
        <div className="cuba_explanation row justify-content-around g-5 px-lg-5 my-4">
          <img
            className="col-10 col-sm-3"
            width="30%"
            src={nicho}
            alt="Nicho"
          />
          <div className="col-10 col-sm-7 align-self-sm-end">
            <p className="lead fw-bolder">
              things you must know before travel to Cuba
            </p>
            <ul>
              <li className="lead">
                Weather is wonderful: shinny and warm!... maybe a bit too warm
                in summer 😎
              </li>
              <li className="lead">
                Cubans are very social and easy to engage in conversation
                nevertheless most of the people do not speak English.
              </li>
              <li className="lead">There is music every where you go!</li>
            </ul>
            <ModalTipsCuba />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
