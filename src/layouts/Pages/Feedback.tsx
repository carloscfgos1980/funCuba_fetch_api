import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/configureStore";
import FeedsField from "../../components/FeedsField";
import { Review, saveReviewsAsync } from "../../redux/filteredReviews";
import ModalSuccess from "../../components/ModalSuccess";
import FormSelectCountry from "../../components/FormSelectCountry";

const Feedback = () => {
  const [feedField, setFeedField] = useState<string>("airB");
  const [itemId, setItemId] = useState<string>("analsa");
  const [rate, setRate] = useState<string>("5");
  const [comment, setComment] = useState<string>("super goodddd!!!!");
  const [name, setName] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [displayAlert, setDisplayAlert] = useState<string>("none");
  const [key, setKey] = useState(0);
  const {postSuccessful} = useAppSelector(state => state.filteredTripPlan);
  console.log('post sucesfull', postSuccessful);

  const dispatch = useAppDispatch();

  const getItemId = (id: string) => setItemId(id);

  const getRate = (id: string) => setRate(id);

  const getComment = (feed: string) => setComment(feed);

  const review: Review = {
    feedId: itemId,
    type: feedField,
    rate: Number(rate),
    comment,
    name,
    country,
  };

  const gettingFeeds = () => {
    dispatch(saveReviewsAsync(review));
    setDisplayAlert("inline-block");
    setKey((currentKey) => currentKey + 1);
  };

  const getCountry = (land:string) => setCountry(land)

  return (
    <div key={key} className="container-fluid bg-light px-3">
      <div className="modal-success">
        {postSuccessful && <ModalSuccess/>}
        
      </div>
      <div className="row justify-content-center align-content-center">
        <div className="col-sm-8">
          <h1 className="text-center">Feedback</h1>
          <div className="intro">
            <p>
              So cool that you take a give minutes of ur time to rate our
              service.... for that we wanna thanks in advance! Would you,
              please, share ur country
            </p>
          </div>
          <div className="persona-data d-flex justify-content-around">
            <div className="form-floating mb-3 col-6">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="client-service"
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="floatingInput">Name</label>
            </div>
            <div className="form-floating mb-3 col-5">
            <FormSelectCountry getCountry={getCountry}/>
            </div>
          </div>
          <div className="rate-explanation">
            <p>There are 3 main fields that you provide ur feeds:</p>
            <ul>
              <li>Air B&B</li>
              <li>Chill Out</li>
              <li>Fun Cuba (client service, website, etc)</li>
            </ul>
          </div>
          <div
            className="alert btn bg-danger-subtle text-danger-emphasis my-3 px-3"
            style={{ display: displayAlert, width: "450px" }}
          >
            <div className="d-flex justify-content-between">
              <p>Thanks a lot... would you rate other section 🙏!</p>
              <p
                style={{ cursor: "pointer" }}
                onClick={() => setDisplayAlert("none")}
              >
                X
              </p>
            </div>
          </div>
          <div className="select-type">
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => setFeedField(e.target.value)}
            >
              <option value="DEFAULT" disabled>Select</option>
              <option value="airB">Air B&B</option>
              <option value="chill">Chill Out</option>
              <option value="funCuba">Fun Cuba</option>
            </select>
          </div>
          <FeedsField
            feedField={feedField}
            getItemId={getItemId}
            getRate={getRate}
            getComment={getComment}
            gettingFeeds={gettingFeeds}
          />
          <button
            className="btn btn-secondary my-3 float-end"
            onClick={gettingFeeds}
          >
            Summit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
