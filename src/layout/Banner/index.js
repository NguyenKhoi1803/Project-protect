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
      <Carousel.Item>
        <img className="d-block w-100 banner__img" src={item.src} alt="" />
        <Carousel.Caption className="banner__infor">
          <h3>{item.caption}</h3>
          <p>{item.descrip}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });
  return <Carousel fade>{slides}</Carousel>;
}

export default Banner;
