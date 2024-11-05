import { useState } from "react";
import Cuba from "../../components/Cuba";
import CarouselAir from "../../components/CarouselAir";
import citiesData from "../../components/contentText/citiesData";
import airData from "../../components/contentText/airData";
import ModalFun from "../../components/ModalAir";
import havana from "../../components/imagesPages/havana.jpg";
import pagesContent from "../../components/contentText/pagesContent";
import FormSelectItem from "../../components/FormSelectItem";

type AirBB = {
  idAirB: string;
  name: string;
  route: string;
};

type SelectedCity = {
  id: number;
  city: string;
  name: string;
  description: string;
  airB: AirBB[];
};

type SelectedAirB = {
  id: number;
  airId: number;
  city: string;
  location: string;
  locationImg: string;
  price: number;
  description: string;
  airB: AirBB[];
};

const AirB = () => {
  const [cityId, setCityId] = useState<string>("Havana");
  const [airId, setAirId] = useState<string>("lalita");
  const [modal, setModal] = useState<boolean>(false);
  const getCityId = (value: string): void => setCityId(value);

  const selectedCity: SelectedCity | any = citiesData.find(
    (item) => item.id === cityId,
  );

  const toggle = (): void => setModal(!modal);

  const getAirId = (value: string): void => setAirId(value);

  const modalGetAidId = (value: string): void => {
    toggle();
    getAirId(value);
  };

  const selectedAirB: SelectedAirB | any = airData.find(
    (item) => item.id === airId,
  );

  return (
    <div className="container-fluid bg-light py-3">
      <div className="row justify-content-center">
        <Cuba img={havana} text={pagesContent.airBnBIntro} />
        <FormSelectItem getItemId={getCityId} items={citiesData}/> 
        <ModalFun
          modal={modal}
          toggle={toggle}
          name={selectedAirB.name}
          airId={airId}
          img={selectedAirB.locationImg}
          items={selectedAirB.airB}
          modalGetAidId={modalGetAidId}
          description={selectedAirB.description}
        />
        <div className="container-fluid bg-dark">
          <p className="title text-center py-2 my-3">{selectedCity?.city}</p>
        </div>
        <div className="row justify-content-around mt-3 g-3">
          <div className="carousel col-sm-5 ">
            <div className="d-flex ms-3">
              <p className="text-danger text-center d-block d-sm-none">
                wide images and
              </p>
              <p className="text-danger text-center">
                click 'em' for Air B&B's details!
              </p>
            </div>
            <CarouselAir
              items={selectedCity.airB}
              modalGetAidId={modalGetAidId}
            />
          </div>
          <p className="col-10 col-sm-4 order-md-first align-self-center lead">
            {selectedCity?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AirB;
