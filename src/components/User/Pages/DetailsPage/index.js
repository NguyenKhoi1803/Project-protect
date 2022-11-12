import { AimOutlined, CalendarOutlined, CarOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Accordion, Button, Table } from "react-bootstrap";
import { generatePath, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";
import Slider from "react-slick";
import tourApis from "../../../../apis/tourApis";
import { checkLogin } from "../../../../Auth";
import { STATUS_CODE } from "../../../../constants/indexs";
import TourItem from "../../TourProduct/tourItem";
import BodyItem from "../BodyHomePage/BodyItem-HomePage";
import "./styles.scss";

function DetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();


  const [tourList, setTourList] = useState([])
  const [isLoadData, setIsLoadData] = useState(true)

  const fetchData = async () => {
    setIsLoadData(true)

    const response = await tourApis.getAll()

    if (response.status === STATUS_CODE.OK) {
      setTourList(response.data)
    } else {
      console.log("Get list failed", response.status)
    }
  }

  useEffect(() => {
    fetchData()
  }, [isLoadData])

  const newArr123 = tourList?.filter(
    (item) => new Date(item.startDate).getTime() > (new Date().getTime() - 21600000) && item.quantity > 0
  );


  const arr = newArr123?.filter((item) => item.id == id);
  const ids = arr?.map((item) => item.id);
  const toTour = arr?.map((item) => item.to)


  const aboutTourArr = newArr123?.filter((item) => item.to == toTour)


  console.log("aboutTourArr :", aboutTourArr)

  const handlePayments = () => {
    if (checkLogin()) {
      navigate(
        generatePath("/tour/payments/:id", {
          id: ids,
        })
      );
    } else {
      navigate("/login");
    }
  };


  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    adaptiveHeight: false,
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
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
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
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Chính sách tour</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      <span>* Giá tour bao gồm: </span>
                      <ul>
                        <li>Chi phí xe máy lạnh phục vụ theo chương trình</li>
                        <li>Chi phí ăn - uống theo chương trình.</li>
                        <li>Chi phí tham quan, hướng dẫn viên tiếng Việt</li>
                        <li>Chi phí khách sạn// resort 4 sao tiêu chuẩn 2 -3 khách/phòng. Lẻ khách ngủ giường phụ hoặc chịu chi phí phụ thu phòng đơn tương ứng: + 850.000 đ/ khách.</li>
                      </ul>
                    </p>

                    <p>
                      <h5>THÔNG TIN HƯỚNG DẪN :</h5>
                      <span>* Vé trẻ em:   </span>
                      <ul>
                        <li>Trẻ em từ  6 đến 11 tuổi mua một nửa giá vé người lớn, trẻ em trên 11 tuổi mua vé như người lớn.</li>
                        <li>Đối với trẻ em dưới 6 tuổi, gia đình tự lo cho bé ăn ngủ và tự trả phí tham quan (nếu có). Hai người lớn chỉ được kèm một trẻ em. Từ trẻ thứ 2 trở lên, mỗi em phải 50% giá vé người lớn.</li>
                        <li>Tiêu chuẩn 50% giá tour bao gồm: Suất ăn, ghế ngồi và ngủ ghép chung với gia đình.</li>
                      </ul>
                      <span>* Hành lý và giấy tờ tùy thân:   </span>
                      <ul>
                        <li>Du khách mang theo giấy Chứng Minh Nthân Dân hoặc Hộ chiếu. Đối với du khách là Việt kiều, Quốc tế nhập cảnh Việt Nam bằng visa rời, vui lòng mang theo visa khi đăng ký và đi tour.</li>
                        <li>Khách lớn tuổi (từ 70 tuổi trở lên), khách tàn tật tham gia tour, phải có thân nhân đi kèm và cam kết đảm bảo đủ sức khỏe khi tham gia tour du lịch.</li>
                        <li>Trẻ em dưới 14 tuổi khi đi tour phải mang theo Giấy khai sinh hoặc Hộ chiếu. Trẻ em từ 14 tuổi trở lên phải mang theo giấy Chứng Minh Nhân Dân hoặc Hộ chiếu riêng</li>
                        <li>Tất cả giấy tờ tùy thân mang theo đều phải bản chính</li>
                        <li>Du khách mang theo hành lý gọn nhẹ và phải tự bảo quản hành lý, tiền bạc, tư trang trong suốt thời gian đi du lịch.</li>
                        <li>Khách Việt Nam ở cùng phòng với khách Quốc tế  hoặc Việt kiều yêu cầu phải có giấy hôn thú.</li>
                      </ul>
                    </p>


                    <p>
                      <h5>Trường hợp hủy vé tour, du khách vui lòng thanh toán các khoản lệ phí hủy tour như sau:</h5>
                      <span>* Đối với ngày thường:   </span>
                      <ul>
                        <li>Du khách chuyển đổi tour sang ngày khác và báo trước ngày khởi hành trước 7 ngày sẽ không chịu phí .</li>
                        <li>Hủy vé trong vòng 24 giờ hoặc ngay ngày khởi hành, chịu phạt 90% tiền tour.</li>
                        <li>Hủy vé trước ngày khởi hành từ 2 - 4 ngày, chịu phạt 50% tiền tour.</li>
                        <li>Hủy vé trước ngày khởi hành từ 5 - 7 ngày, chịu phạt 30% tiền tour.</li>
                        <li>Hủy vé trước ngày khởi hành 7 ngày, chịu phạt 10% tiền tour.</li>
                      </ul>
                      <span>* Đối với dịp Lễ, Tết:   </span>
                      <ul>
                        <li>Du khách chuyển đổi tour sang ngày khác và báo trước ngày khởi hành trước 15 ngày sẽ không chịu phí .</li>
                        <li>Hủy vé trong vòng 24 giờ hoặc ngay ngày khởi hành, chịu phạt 100% tiền tour.</li>
                        <li>Hủy vé trước ngày khởi hành từ 2 - 7 ngày, chịu phạt 80% tiền tour.</li>
                        <li>Hủy vé trước ngày khởi hành từ 8 - 15 ngày, chịu phạt 50% tiền tour.</li>
                        <li>Hủy vé trước ngày khởi hành 15 ngày, chịu phạt 20% tiền tour.</li>
                      </ul>
                    </p>

                    <p>
                      <span>* Ghi chú khác: </span>
                      <ul>
                        <li>Công ty xuất hóa đơn cho du khách có nhu cầu (Trong thời hạn 7 ngày sau khi kết thúc chương trình du lịch). Du khách được chọn một trong những chương trình khuyến mãi dành cho khách lẻ định kỳ (Nếu có).</li>
                        <li>Du khách có mặt tại điểm đón trước 15 phút. Du khách đến trễ khi xe đã khởi hành hoặc hủy tour không báo trước vui lòng chịu phí như ‘hủy vé ngay ngày khởi hành’.</li>

                      </ul>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      ))}
      <div className="aboutTOur">
        <h4>Tour Liên Quan</h4>
        <Slider {...settings}>
          {aboutTourArr?.map((item) => (
            <BodyItem item={item} key={item?.id} />
          ))}
        </Slider>
      </div>

    </div >
  );
}

export default DetailsPage;
