import React from "react";
import SimpleMap from "./maps";

const Footer = () => {
    return (<div className="footer">
            <div className="col-span-8 sm:col-span-4">
                <SimpleMap/>
            </div>
            <div id="contact" className="">
                            <div className="text-sm adress">
                                <span>9 Briarhill Lane</span>
                                <span>Youngstown</span>
                                <span>Ohio</span>
                                <span>330-303-2758</span>
                        </div>

                        <div className="">
                            <div className="text-sm footer-buttons">
                                <span>Privacy Policy</span>
                                <span>Digital Accessibility</span>
                                <span>Site Credits</span>
                            </div>
                        </div>
            </div>
        </div>
    );
};
export default Footer;
