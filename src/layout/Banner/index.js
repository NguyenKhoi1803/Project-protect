import "./styles.scss";
import Carousel from "react-bootstrap/Carousel";

const items = [
  {
    src: "https://brillianthotel.vn/upload/hinhanh/banner-cs-0074.png",
    caption: "Đà Nẵng Đáng Sống",
    descrip:
      "Thành phố Đà Nẵng nằm bên dòng sông Hàn; phía Đông vươn ra biển Đông với những bãi biển dài tăm tắp và bán đảo Sơn Trà còn rất hoang sơ; phía Bắc và phía Tây được bao bọc bởi đèo núi cao. Đèo Hải Vân cheo leo hiểm trở là ranh giới tự nhiên giữa thành phố và tỉnh Thừa Thiên-Huế.",
  },
  {
    src: "https://saigon.fusion-suites.com/wp-content/uploads/sites/7/2020/08/3-1-e1608794653928.jpg",
    caption: "Sài Gòn Hoa Lệ",
    descrip: "asjdhajkshjdkahsjkd",
  },
  {
    src: "https://vietnam.travel/sites/default/files/styles/top_banner/public/2017-06/vietnam-travel-5.jpg?itok=XVnHP3ty",
    caption: "Hà Nội Bình Yên",
    descrip: "asdasgdhjagsjdasd",
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
