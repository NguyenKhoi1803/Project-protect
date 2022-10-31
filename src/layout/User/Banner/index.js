import "./styles.scss";
import Carousel from "react-bootstrap/Carousel";

function Banner() {
  const items = [
    {
      name: " Bà Nà Hill",
      descrip: "Đường lên tiên cảnh",
      src: "http://mauweb.monamedia.net/travelvn/wp-content/uploads/2019/01/cau-vang-da-nang-la-mot-trong-nhung-noi-dang-ghe-tham-nhat-nam-2018-theo-tap-chi-time.jpg ",
    },
    {
      name: "Đà Nẵng",
      descrip: "Vươn mình ra biển lớn",
      src: "http://mauweb.monamedia.net/travelvn/wp-content/uploads/2019/01/dg_160519_du-lich-da-nang.jpg",
    },
    {
      name: "Hội An phố cổ",
      descrip: "Xứ sở đèn lồng",
      src: "http://mauweb.monamedia.net/travelvn/wp-content/uploads/2019/01/lanterns-in-the-market.-pc.-urlaubsguru.de_-1.jpg",
    },
  ];

  const slides = items?.map((item) => {
    return (
      <Carousel.Item key={item.src} item={item} className="banner">
        <div className="banner__img">
          <img className="d-block w-100 " src={item.src} alt="" />
          <div className="effect"></div>
        </div>

        <div className="banner__infor">
          <h3>{item.name}</h3>
          <p>{item.descrip}</p>
        </div>
      </Carousel.Item>
    );
  });
  return <Carousel fade>{slides}</Carousel>;
}

export default Banner;
