import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTour } from "../../../../store/user/fetchTour";

function SearchFunction(props) {
  const [day, setDay] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();

  const newTourArr = useSelector((state) => state.fetchTourReducer.tours);

  useEffect(() => {
    dispatch(fetchTour());
  }, [dispatch]);

  const soNgay = newTourArr?.filter((item) => item.numberDay == day);
  const diemDen = newTourArr?.filter((item) => item.to == location);
  const giaTien = newTourArr?.filter((item) => item.priceAdult == price);

  const all = newTourArr?.filter(
    (item) =>
      item.numberDay == day && item.to == location && item.priceAdult == price
  );

  const handleSubmit = () => {
    if (soNgay == "" && diemDen == "" && giaTien == "") {
      console.log("k co tour");
    } else if (soNgay && diemDen == "" && giaTien == "") {
      console.log("co tour", soNgay);
    } else if (soNgay == "" && diemDen && giaTien == "") {
      console.log("co tour", diemDen);
    } else if (soNgay == "" && diemDen == "" && giaTien) {
      console.log("co tour", giaTien);
    } else {
      console.log("co tour : ", all);
    }
  };

  return (
    <div>
      <div>
        <label>so ngay</label>
        <input
          type="number"
          onChange={(numberday) => setDay(numberday.target.value)}
        />
      </div>

      <div>
        <label>Diem den</label>
        <input type="text" onChange={(to) => setLocation(to.target.value)} />
      </div>

      <div>
        <label>Gia tien</label>
        <input
          type="number"
          onChange={(priceAdu) => setPrice(priceAdu.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
}

export default SearchFunction;
