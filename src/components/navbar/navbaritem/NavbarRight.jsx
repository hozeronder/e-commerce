import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCartTotal} from "../../../redux/cartSlice";
import {useNavigate} from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

function NavbarRight() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {carts} = useSelector((state) => state.carts);

    useEffect(() => {
        dispatch(getCartTotal());
    }, [dispatch]);
    return (
        <div className="flex justify-around sm:gap-8 gap-5">
            <AnchorLink href='#rooms'>ROOMS</AnchorLink>
            <AnchorLink href='#contact'>CONTACT</AnchorLink>
        </div>
    );
}

export default NavbarRight;