import { AimOutlined, CalendarOutlined, CarOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import { Accordion, Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { generatePath, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";
import { checkLogin } from "../../../../Auth";
import { fetchTour } from "../../../../store/user/fetchTour";

import "./styles.scss";

function DetailsPage() {
  const { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const newTourArr = useSelector((state) => state.fetchTourReducer.tours);

  useEffect(() => {
    dispatch(fetchTour());
  }, [dispatch]);

  const arr = newTourArr?.filter((item) => item.id === parseInt(id));

  const ids = arr?.map((item) => item.id);

  const handlePayments = () => {
    if (checkLogin()) {
      navigate(
        generatePath("/products/details/payments/:id", {
          id: ids,
        })
      );
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="container__detailsPage">
      {arr?.map((item) => (
        <div className="container__DetailsCard" key={item.id} item={item}>
          <div className="container__DetailsCard--all">
            <div className="container__detail">
              <img className="container__detail--img" src={item.img} alt="" />
              <div className="container__detail-details">
                <h4>{item.nameTour}</h4>

                <p>
                  {" "}
                  <AimOutlined /> <span> Nơi Khởi Hành</span> : {item.from}
                </p>

                <p>
                  {" "}
                  <AimOutlined /> <span>Nơi Đến</span> : {item.to}
                </p>

                <p>
                  {" "}
                  <CarOutlined /> <span>Phương tiện di chuyển</span> :{" "}
                  {item.vehicle}
                </p>
                <p>
                  {" "}
                  <CalendarOutlined /> <span>Ngày Khởi Hành</span> :{" "}
                  {item.startDate}
                </p>
                <p>
                  {" "}
                  <CalendarOutlined /> <span>Ngày Về</span> : {item.endDate}
                </p>
                <p>
                  {" "}
                  <span>Gía 1 Người</span> :{" "}
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(item.priceAdult)}
                </p>
                <Button
                  variant="success"
                  className="addToCart"
                  onClick={handlePayments}
                >
                  Đặt Ngay
                </Button>
              </div>
            </div>
            <div className="productItem--price" key={item.id}>
              <h3>GIÁ TOUR CƠ BẢN</h3>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Giá Người Lớn</th>
                    <th>Giá Trẻ Em</th>
                    <th>Giá Em Bé</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Giá Cơ Bản</td>
                    <td>
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(item.priceAdult)}
                    </td>
                    <td>
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(item.priceChildren)}
                    </td>
                    <td>
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(item.priceBaby)}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div>
              <Accordion defaultActiveKey={["0"]} alwaysOpen>
                <Accordion.Item eventKey="0">
                  <Accordion.Header> Giới thiệu </Accordion.Header>
                  <Accordion.Body>{item.descriptions}</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Lịch Trình</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Ngày 1 :{" "}
                      <span>
                        TP. HCM - PHAN THIẾT (Ăn sáng, trưa, chiều) Đón quý
                        khách tại văn phòng Lữ hành Saigontourist (lúc 06h00
                        sáng tại 45 Lê Thánh Tôn, Quận 1 hoặc lúc 06h30 sáng tại
                        số 1 Nguyễn Chí Thanh, Quận 5), khởi hành đi Bình Thuận.
                        Đến Phan Thiết, vào khu resort Hàm Tiến - Mũi Né nhận
                        phòng. Buổi chiều, quý khách đi vào Hòn Rơm tham quan
                        đồi cát vàng dưới tác động của gió biển đã tạo nên những
                        hình dạng rất tuyệt vời. Nghỉ đêm tại Mũi Né.
                      </span>{" "}
                    </p>
                    <p>
                      Ngày 2 :{" "}
                      <span>
                        Buổi sáng, quý khách tự do nghỉ dưỡng tại resort. Tự túc
                        ăn trưa. Buổi chiều, xe đưa quý khách đến tham quan
                        không gian trưng bày nghệ thuật “Làng chài xưa”. Toàn bộ
                        khu trưng bày có diện tích 1.600m². Đây là không gian
                        trưng bày nghệ thuật và là bảo tàng thu nhỏ, tái hiện
                        lại một phần làng chài xưa của Phan Thiết - Mũi Né cách
                        đây hơn 300 năm. Du khách đến đây sẽ được tham quan làng
                        chài dưới rặng dừa; phố cổ ven sông Cà Ty; nhà ở và nơi
                        sản xuất nước mắm của hàm hộ Phan Thiết; con đường Phan
                        Thiết - Mũi Né xưa; đắm mình vào biển Mũi Né 3D và mua
                        sắm trong không gian chợ quê làng xưa… tận mắt được
                        chứng kiến một làng chài xưa của xứ biển Phan Thiết được
                        tái hiện một cách công phu. Nghỉ đêm tại Mũi Né.
                      </span>{" "}
                    </p>
                    <p>
                      Ngày 3 :{" "}
                      <span>
                        Buổi sáng, quý khách tự do nghỉ dưỡng, tắm biển đến giờ
                        trả phòng. Khởi hành về Tp. HCM. Trên đường về ghé mua
                        sắm đặc sản Phan Thiết. Kết thúc chương trình.
                      </span>{" "}
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DetailsPage;
