import "./styles.scss";
import Carousel from "react-bootstrap/Carousel";

const items = [
  {
    src: "https://brillianthotel.vn/upload/hinhanh/banner-cs-0074.png",
    caption: "Đà Nẵng Đáng Sống",
    descrip:
      "Đà Nẵng, thành phố của Cửu Long Vượt Vũ Môn",
  },
  {
    src: "https://saigon.fusion-suites.com/wp-content/uploads/sites/7/2020/08/3-1-e1608794653928.jpg",
    caption: "Sài Gòn Hoa Lệ",
    descrip: "Sài Gòn Hoa Lệ, Hoa cho người giàu, Lệ cho người nghèo",
  },
  {
    src: "https://thgzurs.com/wp-content/uploads/2021/07/thgzurs.com-tim-hieu-ve-quang-truong-ba-dinh-giua-long-ha-noi-6-1536x1024.jpg",
    caption: "Hà Nội Bình Yên",
    descrip: "Hà Nội...Thủ Đô ngàn năm Văn Hiến",
  },
];

const slides = items?.map((item) => {
  return (
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={item.src}
        alt=""
        className="banner__img"
      />
      <Carousel.Caption className="banner__infor">
        <h3>{item.caption}</h3>
        <p>{item.descrip}</p>
      </Carousel.Caption>
    </Carousel.Item>
  );
});

function Banner() {
  return <Carousel fade>{slides}</Carousel>;
}

export default Banner;
