import React, { useEffect } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";

import { fetchCart } from "../../store/user/addToCartSlice";
import "./styles.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function ChartComp() {
  const dispatch = useDispatch();

  const newArr = useSelector((state) => state.addToCartReducer.carts);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const daNang = newArr?.filter((item) => item.to === "Đà Nẵng");
  const totalDaNang = daNang?.map((item) => item.total);

  const saiGon = newArr?.filter((item) => item.to === "Hồ Chí Minh");
  const totalSaiGon = saiGon?.map((item) => item.total);

  const haNoi = newArr?.filter((item) => item.to === "Hà Nội");
  const totalHaNoi = haNoi?.map((item) => item.total);

  function sumArray(mang) {
    let sum = 0;
    mang.forEach(function (value) {
      sum += value;
    });

    return sum;
  }
  const totalAll1 = sumArray(totalDaNang);
  const totalAll2 = sumArray(totalSaiGon);
  const totalAll3 = sumArray(totalHaNoi);

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Biểu Đồ Tổng Tiền Từng Địa Điểm Đến",
      },
    },
  };

  const labels = ["Đà Nẵng", "Hồ Chí Minh", "Hà Nội"];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [totalAll1, totalAll2, totalAll3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
      },
    ],
  };

  return (
    <div className="chart">
      <Bar options={options} data={data} />
    </div>
  );
}

export default ChartComp;
