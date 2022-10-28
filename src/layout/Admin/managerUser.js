import axios from "axios";
import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { fetchAccount } from "../../store/user/register";
import "./styles.scss";

function ManagerUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const touArr = useSelector((state) => state.accountReducer.accounts);
  const newPaymentArr = useSelector((state) => state.addToCartReducer.carts);

  const ids = touArr?.map((item) => item.id);
  const idss = newPaymentArr?.filter((item) => item.idUser == ids);

  console.log("ids", ids);
  console.log("idss", idss);

  function sumArray(mang) {
    let sum = 0;
    mang.forEach(function (value) {
      sum += value;
    });

    return sum;
  }

  useEffect(() => {
    dispatch(fetchAccount());
  }, [dispatch]);

  const deleteId = (e, id) => {
    e.preventDefault();

    const thisClicked = e.currentTarget;
    thisClicked.innerText = "Deleting";

    axios.delete(`http://localhost:3011/tour/${id}`).then((res) => {
      if (res.data.status === 200) {
        thisClicked.closest("tr").remove();
      } else if (res.data.status === 404) {
        thisClicked.innerText = "Delete";
      }
    });
    navigate("/admin");
  };

  return (
    <div className="managerUser">
      <h3>Danh sách Khách hàng : </h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Mã khách hàng</th>
            <th>Họ và tên đầy đủ</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Số tiền đã dùng</th>
          </tr>
        </thead>
        {touArr?.map((item) => (
          <tbody key={item.id} item={item}>
            <tr>
              <td>{item.id}</td>
              <td>{item.fullname}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>
                {/* {new Intl.NumberFormat("vi-EN", {
                  style: "currency",
                  currency: "VND",
                }).format(item.price)} */}
              </td>

              <td>
                <Button variant="danger" onClick={(e) => deleteId(e, item.id)}>
                  Delete
                </Button>{" "}
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
}

export default ManagerUser;
