import axios from "axios";

import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

import { fetchTour } from "../../store/user/fetchTour";

function ManagerTour() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const touArr = useSelector((state) => state.fetchTourReducer.tours);

  useEffect(() => {
    dispatch(fetchTour());
  }, [dispatch]);

  console.log("touArr", touArr);

  const deleteId = (e, id) => {
    // e.preventDefault();

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
              <td>{item.number} </td>
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

export default ManagerTour;
