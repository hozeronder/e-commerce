 import React from 'react';
import ShopingCart from '../../icons/ShopingCart';
import CartComp from "./CartComp";

function Cart() {
    return (
        <div>
            {1 > 0 ? (
                <div>
                    <CartComp/>
                </div>
            ) : (
                <div>
                    <div className="flex items-center justify-center">
                        <ShopingCart/>
                    </div>
                    <div className="flex justify-center text-2xl">
                        No items yet? Continue shopping to explore.
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
