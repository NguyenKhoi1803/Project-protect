import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function ScrollTop() { 
    const {pathname} = useLocation()

    useEffect(
        () => {
            window.scrollTo(500,500)
        },
        [pathname]
    );
    return null

}

export default ScrollTop;