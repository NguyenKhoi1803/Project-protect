import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { checkAdmin, checkLogin } from "../../Auth";
import ChartComp from "./chart";
import ChartPercent from "./chartPercent";
import Button from "react-bootstrap/Button";
import ManagerTour from "./manegerTour";
import "./styles.scss";
import ManagerUser from "./managerUser";

function ChartPages() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!checkLogin() || !checkAdmin()) {
      navigate("/");
    }
  });

  const handleToAddProduct = () => {
    navigate("/addtour");
  };

  return (
    <div className="adminpages">
      <div className="adminpages__chart">
        <ChartComp />
        <ChartPercent />
      </div>
      <div className="adminpages__btn">
        <Button variant="success" onClick={handleToAddProduct}>
          ADD PRODUCT
        </Button>
      </div>
      <div>
        <ManagerTour />
      </div>
      <div>
        <ManagerUser />
      </div>
    </div>
  );
}

export default ChartPages;
