import React, { useEffect, useState } from "react";
import cartApis from "../../../../apis/cartApis";
import { getAccountInfo } from "../../../../Auth";
import { STATUS_CODE } from "../../../../constants/indexs";
import "./styles.scss";

function CheckOrder(props) {
  const [cartList, setCartList] = useState([]);
  const [isLoadData, setIsLoadData] = useState(true);

  const fetchCartData = async () => {
    setIsLoadData(true);

    const response = await cartApis.getAll();
    if (response.status === STATUS_CODE.OK) {
      setCartList(response.data);
    } else {
      console.log("Get list failed", response.status);
    }
  };

  useEffect(() => {
    fetchCartData();
  }, [isLoadData]);

  const account = getAccountInfo();

  const newArr = cartList?.filter((item) => item.account.id === account.id);

  return (
    <div className="container__checkOrder">
      <div className="container__checkOrder--wrap">
        <div className="account">
          <h3>Thông Tin Cá Nhân</h3>
          <div className="account__details">
            <p>
              <span className="spn-at">Tên Đầy Đủ : </span>
              <span className="spn-as">{account.fullname}</span>
            </p>
            <p>
              <span className="spn-at">Địa Chỉ Email : </span>
              <span className="spn-as">{account.email}</span>
            </p>
            <p>
              <span className="spn-at">Số Điện Thoại : </span>
              <span className="spn-as">{account.phone}</span>
            </p>
          </div>
        </div>

        <div className="cart">
          {newArr.length === 0 ? (
            <div>
              <p>Bạn chưa mua tour ! </p>
            </div>
          ) : (
            <div className="cart-list">
              {newArr?.map((item) => (
                <div key={item?.id} className="cart-item">
                  <div className="cart-item__details">
                    <div className="cart-item__img">
                      <img src={item.tour.img1} alt="" />
                    </div>
                    <div className="cart-item__info">
                      <p>
                        <span className="spn-at">Tên Tour : </span>
                        <span className="spn-as">{item.tour.nameTour}</span>
                      </p>
                      <p>
                        <span className="spn-at">Mã Tour : </span>
                        <span className="spn-as">{item.tour.codeTour}</span>
                      </p>
                      <p>
                        <span className="spn-at">Mã Đơn Hàng : </span>
                        <span className="spn-as">{item.codeOrder}</span>
                      </p>
                      <p>
                        <span className="spn-at">Tình Trạng Đơn : </span>
                        <span className="spn-as">{item.status}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CheckOrder;
