import Item from "antd/lib/list/Item";
import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { fetchTour } from "../../store/user/fetchTour";

function ManagerTour() {
  const dispatch = useDispatch;

  const touArr = useSelector((state) => state.fetchTourReducer.tours);

  //   const newArr = touArr?.filter((item) => item.id);

  //   const addd = newArr?.map((item) => item.id);

  //   console.log("newArr", newArr);

  return (
    <div className="managerProduct">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Tên Tour</th>
            <th>Giá</th>
            <th>Số Người</th>
          </tr>
        </thead>

        {touArr?.map((item) => (
          <tbody key={item.id} item={item}>
            <tr>
              <td>{item.id}</td>
              <td>{item.nameTour}</td>
              <td>
                {new Intl.NumberFormat("vi-EN", {
                  style: "currency",
                  currency: "VND",
                }).format(item.price)}
              </td>
              <td>{item.number}</td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
}

export default ManagerTour;
