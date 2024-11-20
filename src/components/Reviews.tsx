import Carousel from "better-react-carousel";

const Reviews = ({ items }: any) => {


    const stars = (points: number) => {
        if (points === 1) {
          return "⭐";
        } else if (points === 2) {
          return "⭐ ⭐";
        } else if (points === 3) {
          return "⭐ ⭐ ⭐";
        } else if (points === 4) {
          return "⭐ ⭐ ⭐ ⭐";
        } else {
          return "⭐ ⭐ ⭐ ⭐ ⭐";
    }
    };
  return (
    <div className="my-3">
      <h1 className="text-center">reviews</h1>
      <Carousel cols={3} rows={1} gap={10} loop>
        {items.map((item: any, index: number) => {
          return (
            <Carousel.Item key={index} className="image_container">
              <div className="align-items-stretch">
                <h3 className="text-center">{stars(item.rate)}</h3>
                <p style={{ height: "100px" }}>{item.comment}</p>
                <div className="mt-4">
                    <h4>{`${item.name} (${item.country})`}</h4>
                </div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
    

  );
};

export default Reviews;
