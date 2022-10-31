import "./styles.scss";
import Carousel from "react-bootstrap/Carousel";

function Banner() {
  const items = [
    {
      src: "https://danangfantasticity.com/wp-content/uploads/2020/05/mot-buoi-sang-that-khac-cung-binh-minh-tren-bien-da-nang.jpg",
    },
    {
      src: "https://vivuhotay.com/wp-content/uploads/2022/07/morning-in-hoan-kiem-lake-of-hanoi-spcjayjay.jpg",
    },
    {
      src: "https://images.squarespace-cdn.com/content/v1/5930dc9237c5817c00b10842/1546099732022-UAN1M01VN6L3IT97M0ZY/image-asset.jpeg?format=1000w",
    },
  ];

  const slides = items?.map((item) => {
    return (
      <Carousel.Item key={item.src} item={item}>
        <div>
          <img className="d-block w-100 banner__img" src={item.src} alt="" />
          <div className="effect"></div>
        </div>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });
  return <Carousel fade>{slides}</Carousel>;
}

export default Banner;
