import Row from "react-bootstrap/Row";

import "./styles.scss";

function Special() {
  const touArr = [
    {
      img: " https://vcdn1-dulich.vnecdn.net/2022/06/03/cauvang-1654247842-9403-1654247849.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Swd6JjpStebEzT6WARcoOA",
      title: "Đà Nẵng",
      to1: "Hội An",
      to2: "Chùa Linh Ứng",
      to3: "Chợ Hàn",
      to4: "Cầu Rồng",
    },
    {
      img: "https://www.vietnam.travel/sites/default/files/styles/top_banner/public/2017-06/vietnam-travel-5.jpg?itok=XVnHP3ty",
      title: "Hà Nội",
      to1: "Hội An",
      to2: "Chùa Linh Ứng",
      to3: "Chợ Hàn",
      to4: "Cầu Rồng",
    },
    {
      img: "https://vietnamdiscovery.com/wp-content/uploads/thumbnail/Saigon-Notre-Dame-Cathedral-@doanlehoang_vu-pg6c37vf4agaqvtb1sp27o4y4wosawxevdbdp4ds26.jpg",
      title: "Hồ Chí Minh",
      to1: "Hội An",
      to2: "Chùa Linh Ứng",
      to3: "Chợ Hàn",
      to4: "Cầu Rồng",
    },
    {
      img: " https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/08/1-3.jpg",
      title: "Cần Thơ",
      to1: "Hội An",
      to2: "Chùa Linh Ứng",
      to3: "Chợ Hàn",
      to4: "Cầu Rồng",
    },
    {
      img: "https://www.vietnambooking.com/wp-content/uploads/2018/08/dulich-quang-binh-kham-pha-vuong-quoc-cua-nhung-hang-dong-ki-bi-22-8-2018-1.jpg",
      title: "Quảng Bình",
      to1: "Hội An",
      to2: "Chùa Linh Ứng",
      to3: "Chợ Hàn",
      to4: "Cầu Rồng",
    },
    {
      img: "https://vhttdl.daklak.gov.vn/CMS/Content/AnhDep/dlk1.jpg",
      title: "Daklak",
      to1: "Hội An",
      to2: "Chùa Linh Ứng",
      to3: "Chợ Hàn",
      to4: "Cầu Rồng",
    },
  ];

  const slides = touArr.map((item) => {
    return (
      <div className="CardItem__Special">
        <div className="card__Special">
          <a href="/" className="card-top__Special">
            <img src={item.img} alt="asda" />
          </a>
          <div className="card-bottom__Special">
            <a href="/">
              <h3>{item.title}</h3>
            </a>

            <ul>
              <li>{item.to1}</li>
              <li>{item.to2}</li>
              <li>{item.to3}</li>
              <li>{item.to4}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container__Special">
      <div className="container__Special--list">
        <Row xs={1} md={3} className="g-4 ">
          {slides}
        </Row>
      </div>
    </div>
  );
}

export default Special;
