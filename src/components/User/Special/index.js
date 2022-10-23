import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "./styles.scss";

function Special() {
  const touArr = [
    {
      img: " https://vcdn1-dulich.vnecdn.net/2022/06/03/cauvang-1654247842-9403-1654247849.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Swd6JjpStebEzT6WARcoOA",
      title: "Đà Nẵng",
      describe: "ajkshdkjahsdjkhasjdashdkj",
    },
    {
      img: " https://vcdn1-dulich.vnecdn.net/2022/06/03/cauvang-1654247842-9403-1654247849.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Swd6JjpStebEzT6WARcoOA",
      title: "Hà Nội",
    },
    {
      img: " https://vcdn1-dulich.vnecdn.net/2022/06/03/cauvang-1654247842-9403-1654247849.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Swd6JjpStebEzT6WARcoOA",
      title: "Hồ Chí Minh",
    },
    {
      img: " https://vcdn1-dulich.vnecdn.net/2022/06/03/cauvang-1654247842-9403-1654247849.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Swd6JjpStebEzT6WARcoOA",
      title: "Cần Thơ",
    },
    {
      img: " https://vcdn1-dulich.vnecdn.net/2022/06/03/cauvang-1654247842-9403-1654247849.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Swd6JjpStebEzT6WARcoOA",
      title: "Quảng Bình",
    },
    {
      img: " https://vcdn1-dulich.vnecdn.net/2022/06/03/cauvang-1654247842-9403-1654247849.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Swd6JjpStebEzT6WARcoOA",
      title: "Daklak",
    },
  ];

  const slides = touArr.map((item) => {
    return (
      <div className="CardItem">
        <div className="card">
          <a href="/" className="card-top">
            <img src={item.img} />
          </a>
          <div className="card-bottom">
            <a href="#">
              <h3>{item.title}</h3>
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container__Special">
      <div className="container__Special--list">
        <Row xs={2} md={3} className="g-4 ">
          {Array.from({ length: 3 }).map((_, idx) => (
            <Col></Col>
          ))}
          {slides}
        </Row>
      </div>
    </div>
  );
}

export default Special;
