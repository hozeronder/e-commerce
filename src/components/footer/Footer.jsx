import React from "react";
import SimpleMap from "./maps";

const Footer = () => {
    return (<div className="footer background-footer">
            <div id="contact" className="">
                <section className="layout">
                    <div className="grow1">
                        <div className="text-sm adress">
                            <span>9 Briarhill Lane</span><br/>
                            <span>Youngstown</span><br/>
                            <span>Ohio</span><br/>
                            <span>330-303-2758</span>
                        </div>
                    </div>
                    <div className="grow2"><SimpleMap/>
                    </div>
                    <div className="grow1">
                        <div className="text-sm middleinfo items-end">
                            <span>Contact & Directions</span><br/>
                            <span>Privacy Policy</span><br/>
                            <span>Digital Accessibility</span><br/>
                            <span>Site Credits</span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};
export default Footer;
