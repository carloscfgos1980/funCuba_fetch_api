import FormSelectItem from "./FormSelectItem";
import airData from "./contentText/airData";
import chillingData from "./contentText/chillingData";
import FormSelectRate from "./FormSelectRate";

const FeedsField = ({
  feedField,
  getItemId,
  getRate,
  getComment,
  gettingFeeds,
}: any) => {
  if (feedField === "airB") {
    return (
      <div className="mt-3">
        <p>
          Select the Air B&Bs from the input field bellow and provide us with a
          honest feed... we promise to check it and share with the Air B&B's
          host
        </p>
        <div className="d-flex">
          <FormSelectItem items={airData} getItemId={getItemId} />
          <FormSelectRate getRate={getRate} />
        </div>
        <div className="form-floating">
          <textarea
            className="form-control"
            style={{ height: "120px", marginTop: "5px" }}
            placeholder="Leave a comment here"
            id="floatingTextarea"
            onChange={(e) => getComment(e.target.value)}
          ></textarea>
          <label htmlFor="floatingTextarea">Comments</label>
        </div>
      </div>
    );
  } else if (feedField === "chill") {
    return (
      <div className="mt-3">
        <p>
          Wow... so cool that you tried our fun stuff... very are very proud of
          these features... so your opinioin will help us to improve them!
        </p>
        <div className="d-flex">
          <FormSelectItem items={chillingData} getItemId={getItemId} />
          <FormSelectRate getRate={getRate} />
        </div>
        <div className="form-floating mt-3">
          <textarea
            className="form-control"
            style={{ height: "120px" }}
            placeholder="Leave a comment here"
            id="floatingTextarea"
            onChange={(e) => getComment(e.target.value)}
          ></textarea>
          <label htmlFor="floatingTextarea">Comments</label>
        </div>
      </div>
    );
  } else {
    return (
      <div className="mt-3">
        <p>
          There is always something else... this feature you can add anything
          that cme to your mind, good stuff or other not so nice... just be
          honest with us. That is the best way to help us to get to the next
          level!
        </p>
        <div className="d-flex justify-content-between">
          <div className="form-floating mb-3 col-8">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="client-service"
              onChange={(e) => getItemId(e.target.value)}
            />
            <label htmlFor="floatingInput">Fun Cuba Rate</label>
          </div>
          <FormSelectRate getRate={getRate} />
        </div>
        <div className="form-floating">
          <textarea
            className="form-control"
            style={{ height: "120px" }}
            placeholder="Leave a comment here"
            id="floatingTextarea"
            onChange={(e) => getComment(e.target.value)}
          ></textarea>
          <label htmlFor="floatingTextarea">Comments</label>
        </div>
      </div>
    );
  }
};

export default FeedsField;
