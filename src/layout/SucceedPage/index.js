import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCart } from "../../store/user/addToCartSlice";
import "./styles.scss";

function SucceedPage() {
  const { id } = useParams();

  console.log("idssss", id);

  const dispatch = useDispatch();
  const newCartArr = useSelector((state) => state.addToCartReducer.carts);

  const newArr = newCartArr?.filter((item) => item.codeOrder == id);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <div className="container__succeed">
      {newArr?.map((item) => (
        <div className="container__succeed--details">
          <div className="container__succeed--left">
            <h1>LOCAL TOURIST</h1>
            <div className="section__left--details">
              <p>
                Cảm ơn <span>{item.name}</span> đã đặt tour tại LOCAL TOURIST !
              </p>
              <p>
                {" "}
                Mã Đơn Hàng : <span>{item.codeOrder}</span>
              </p>
              <p>
                {" "}
                Tên Tour : <span>{item.nameTour}</span>
              </p>
              <p>
                {" "}
                Gía 1 Người : <span>{item.cost}</span>
              </p>
              <p>
                {" "}
                Số Lượng Khách Bạn Đã Đặt : <span>{item.numberPeople}</span>
              </p>
              <p>
                {" "}
                Tổng Tiền : <span>{item.total}</span>
              </p>
            </div>
          </div>
          <div className="container__succeed--right">
            <h1>LOCAL TOURIST</h1>
            <div className="section__right--details">
              <p>
                LOCAL TOURIST sẽ gửi biểu mẫu đăng ký thông tin hành khách qua
                Email của bạn. Sau khi bạn điền thông tin và xác nhận chúng tôi
                sẽ tiếp nhận thông tin và xử lý
              </p>
              <p>Chân thành cảm ơn Bạn vì đã đồng hành cùng LOCAL TOURIST !</p>
              <p>
                Mọi chi tiết xin liên hệ :{" "}
                <ul>
                  <li>
                    <p>SDT :</p> <span>0779950318</span>
                  </li>
                  <li>
                    <p>EMAIL : </p> <span>Nguyenkhoi180397@gmail.com</span>
                  </li>
                </ul>{" "}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SucceedPage;
