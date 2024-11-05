import Carousel from "better-react-carousel";

const carouselAirDetails = ({ items }: any) => {
  return (
    <Carousel cols={3} rows={1} gap={10} loop>
      {items.map((item: any) => {
        const itemSrc = `${process.env.PUBLIC_URL}/imagesAir/${item.route}`;
        return (
          <Carousel.Item key={item.idAirB} className="image_container">
            <img width="50%" src={itemSrc} alt={item.name} />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default carouselAirDetails;
