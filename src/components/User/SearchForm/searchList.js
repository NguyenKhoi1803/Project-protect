import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTour } from "../../../store/user/fetchTour";
import TourItem from "../TourProduct/tourItem";



function SearchList() {
    const dispatch = useDispatch();
    const newTour = useSelector((state) => state.fetchTourReducer.tours)
    const filterList = useSelector((state) => state.filterReducer.search)



    const arr = newTour?.filter((item) => item.to === filterList);

    useEffect(() => {
        dispatch(fetchTour());
    }, [dispatch]);


    console.log("filterList", filterList)

    return (
        <div className="TourList">

            {arr?.map((item) => (
                <TourItem key={item.id} item={item} />
            ))}
        </div>
    );
}

export default SearchList;
