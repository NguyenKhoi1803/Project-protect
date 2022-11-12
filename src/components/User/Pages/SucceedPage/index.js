import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCart } from "../../../../store/user/addToCartSlice";
import "./styles.scss";
import tickBlue from "../../../../asset/img/tick-iconblue.png";

function SucceedPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const newCartArr = useSelector((state) => state.addToCartReducer.carts);
  const newArr = newCartArr?.filter((item) => item.codeOrder == id);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <div className="container__succeed">
      <img src="./tick-" alt="" />
      {newArr?.map((item) => (
        <div className="container__succeed--details" key={item.id} item={item}>
          <div className="container__succeed--notice">
            <img src={tickBlue} alt="" />
            <h3>THANH TOÁN THÀNH CÔNG</h3>
            <p>
              Đơn hàng của <span>{item.account.fullname}</span> đã thanh toán
              thành công. Chúng tối sẽ gọi lại để xác nhận và đơn hàng của bạn.
              Cảm ơn đã tin tưởng và sử dụng dịch vụ của{" "}
              <span>Local Tourist</span> !
            </p>
          </div>

          <div className="container__succeed--info">
            <div className="container__tourInfo">
              <h4>THÔNG TIN ĐƠN HÀNG</h4>
              <div className="tourDetails">
                <p>
                  {" "}
                  <span className="spn-at">Mã Đơn Hàng :</span>{" "}
                  <span className="spn-as">{item.codeOrder}</span>{" "}
                </p>
                <p>
                  {" "}
                  <span className="spn-at">Mã Tour :</span>{" "}
                  <span className="spn-as">{item.tour.codeTour}</span>{" "}
                </p>
                <p>
                  {" "}
                  <span className="spn-at">Tên Tour :</span>{" "}
                  <span className="spn-as">{item.tour.nameTour}</span>{" "}
                </p>
                <p>
                  {" "}
                  <span className="spn-at">Số Người Đã Đặt :</span>{" "}
                  <span className="spn-as">{item.totalPeople}</span>{" "}
                </p>
                <p>
                  {" "}
                  <span className="spn-at">Tổng Tiền :</span>{" "}
                  <span className="spn-as">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(item.total)}
                  </span>{" "}
                </p>
              </div>
            </div>
            <div className="container__accountInfo">
              <h4>THÔNG TIN NGƯỜI ĐẶT</h4>
              <div className="tourDetails">
                <p>
                  {" "}
                  <span className="spn-at">Mã Khách hàng :</span>{" "}
                  <span className="spn-as">{item.account.id}</span>{" "}
                </p>
                <p>
                  {" "}
                  <span className="spn-at">Tên Khách hàng :</span>{" "}
                  <span className="spn-as">{item.account.fullname}</span>{" "}
                </p>
                <p>
                  {" "}
                  <span className="spn-at">Email :</span>{" "}
                  <span className="spn-as">{item.account.email}</span>{" "}
                </p>
                <p>
                  {" "}
                  <span className="spn-at">Số Điện Thoại :</span>{" "}
                  <span className="spn-as">{item.account.phone}</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SucceedPage;
