import React from "react";
import SimpleMap from "./maps";

const Footer = () => {
    return (<div className="footer">
            <div className="col-span-8 sm:col-span-4">
                <SimpleMap/>
            </div>
            <div id="contact" className="grid grid-cols-8">
                        <div className="col-span-8 sm:col-span-2">
                            <div className="text-sm description adress">
                                <span>9 Briarhill Lane</span><br/>
                                <span>Youngstown</span><br/>
                                <span>Ohio</span><br/>
                                <span>330-303-2758</span>
                            </div>
                        </div>

                        <div className="col-span-8 sm:col-span-2">
                            <div className="text-sm description items-end ">
                                <span>Contact & Directions</span><br/>
                                <span>Privacy Policy</span><br/>
                                <span>Digital Accessibility</span><br/>
                                <span>Site Credits</span>
                            </div>
                        </div>
            </div>
        </div>
    );
};
export default Footer;
