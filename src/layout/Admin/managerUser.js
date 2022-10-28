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

  useEffect(() => {
    dispatch(fetchAccount());
  }, [dispatch]);

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
          </tr>
        </thead>
        {touArr?.map((item) => (
          <tbody key={item.id} item={item}>
            <tr>
              <td>{item.id}</td>
              <td>{item.fullname}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
}

export default ManagerUser;
