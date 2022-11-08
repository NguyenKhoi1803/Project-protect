import React, { useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchTour } from "../../store/user/fetchTour";

function ChartPercent() {
  const dispatch = useDispatch();
  ChartJS.register(ArcElement, Tooltip, Legend);

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Biểu Đồ Tổng Tour Hiện Có",
      },
    },
  };

  const newArr = useSelector((state) => state.fetchTourReducer.tours);

  useEffect(() => {
    dispatch(fetchTour());
  }, [dispatch]);

  const daNang = newArr?.filter((item) => item.to === "Đà Nẵng");
  const saiGon = newArr?.filter((item) => item.to === "Hồ Chí Minh");
  const haNoi = newArr?.filter((item) => item.to === "Hà Nội");

  const totalDaNang = daNang.length;
  const totalHoChiMinh = saiGon.length;
  const totalHaNoi = haNoi.length;

  const data = {
    labels: ["Đà Nẵng", "Hồ Chí Minh", "Hà Nội"],
    datasets: [
      {
        label: "# of Votes",
        data: [totalDaNang, totalHoChiMinh, totalHaNoi],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chartPercent">
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default ChartPercent;
