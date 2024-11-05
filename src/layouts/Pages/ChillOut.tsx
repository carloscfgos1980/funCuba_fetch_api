import Cuba from "../../components/Cuba";
import Reviews from "../../components/Reviews";
import chilling from "../../components/imagesPages/chilling.jpg";
import pagesContent from "../../components/contentText/pagesContent";
import chillingData from "../../components/contentText/chillingData";
import citiesData from "../../components/contentText/citiesData";
import { useState } from "react";
import FormChill from "../../components/FormChill";
import FormSelectItem from "../../components/FormSelectItem";
import { useAppSelector } from "../../redux/configureStore";

type SelectedChill = {
  id: string;
  cityId: string;
  price: number;
  city: string;
  name: string;
  imageRoute: string;
  description: string;
};
const ChillOut = () => {
  const [cityId, setCityId] = useState<string>("Havana");
  const [chillId, setChillId] = useState<string>("domino");
  
  const { reviews }: any = useAppSelector((state) => state.filteredReviews);

  const selectedFeeds = reviews.filter((feed: any) => {
    return feed.feedId === chillId;
  });

  const getCityId = (value: string): void => setCityId(value);

  const getChillId = (value: string): void => setChillId(value);

  const selectedChillxCity = chillingData.filter((chill) => {
    return chill.city === cityId;
  });

  const selectedChill: SelectedChill | any = chillingData.find(
    (item) => item.id === chillId,
  );

  const itemSrc = `${process.env.PUBLIC_URL}/imagesChill/${selectedChill.image}`;
  return (
    <div className="container-fluid bg-light py-3">
      <div className="row justify-content-center">
        <div className="Cuba">
          <Cuba img={chilling} text={pagesContent.chilling} />
        </div>
        <div className="form">
          <FormSelectItem getItemId={getCityId} items={citiesData}/> 
          <FormChill getCityId={getChillId} items={selectedChillxCity} />
        </div>
        <div className="info mt-4">
          <h1 className="text-center">{selectedChill.name}</h1>
          <div className="row justify-content-around g-3 my-2">
            <img
              width="40%"
              src={itemSrc}
              alt={selectedChill.name}
              className="text-center col-10 col-sm-5"
            />
            <p className="col-10 col-sm-4 order-md-first align-self-center lead">
              {selectedChill.description}
            </p>
          </div>
          <div className="reviews">
            {selectedFeeds.length > 0 ? <Reviews items={selectedFeeds}/> : <p className="display-5 text-center">No Reviews</p>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChillOut;
