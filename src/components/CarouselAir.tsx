import Carousel from "better-react-carousel";
import "../layouts/layout.css";

const carouselAir = ({ items, modalGetAidId }: any) => {
  return (
    <Carousel
      cols={1}
      rows={1}
      gap={10}
      loop
      className="text-center bg-light-subtle"
    >
      {items.map((item: any, index: number) => {
        const itemSrc = `${process.env.PUBLIC_URL}/imagesAir/${item.route}`;
        return (
          <Carousel.Item key={index} className="image_container">
            <div className="d-flex flex-column ">
              <h3 className="text-center">{item.name}</h3>
              <img
                className="carousel-img px-5"
                width="100%"
                src={itemSrc}
                alt={item.name}
                onClick={(e) => modalGetAidId(item.idAirB)}
              />
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default carouselAir;
