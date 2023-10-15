import React from "react";
import SimpleMap from "./maps";

const Footer = () => {
    return (<div className="footer background-footer">
            <div id="contact" className="grid grid-cols-8">
                        <div className="col-span-2">
                            <div className="text-sm adress">
                                <span>9 Briarhill Lane</span><br/>
                                <span>Youngstown</span><br/>
                                <span>Ohio</span><br/>
                                <span>330-303-2758</span>
                            </div>
                        </div>
                        <div className="col-span-4">
                            <SimpleMap/>
                        </div>
                        <div className="col-span-2">
                            <div className="text-sm items-end ">
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
