import Row from "react-bootstrap/Row";
import Slider from "react-slick";

import "./styles.scss";

function Special() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const touArr = [
    {
      img: " https://vcdn1-dulich.vnecdn.net/2022/06/03/cauvang-1654247842-9403-1654247849.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Swd6JjpStebEzT6WARcoOA",
      title: "Đà Nẵng",
      id: 1,
    },
    {
      img: "https://www.vietnam.travel/sites/default/files/styles/top_banner/public/2017-06/vietnam-travel-5.jpg?itok=XVnHP3ty",
      title: "Hà Nội",
      id: 2,
    },
    {
      img: "https://vietnamdiscovery.com/wp-content/uploads/thumbnail/Saigon-Notre-Dame-Cathedral-@doanlehoang_vu-pg6c37vf4agaqvtb1sp27o4y4wosawxevdbdp4ds26.jpg",
      title: "Hồ Chí Minh",
      id: 3,
    },
    {
      img: " https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/08/1-3.jpg",
      title: "Cần Thơ",
      id: 4,
    },
    {
      img: "https://www.vietnambooking.com/wp-content/uploads/2018/08/dulich-quang-binh-kham-pha-vuong-quoc-cua-nhung-hang-dong-ki-bi-22-8-2018-1.jpg",
      title: "Quảng Bình",
      id: 5,
    },
  ];

  const slides = touArr.map((item) => {
    return (
      <div className="CardItem__Special" key={item.id} item={item}>
        <div className="card__Special">
          <img src={item.img} className="image" alt="asda" />
          <div className="text">
            <h3>{item.title}</h3>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container__Special">
      <div className="container__Special--wrap">
        <div className="container__Special--list">
          <h1>Địa Điểm Hot</h1>
          <Slider {...settings} className="slider">
            {slides}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Special;
