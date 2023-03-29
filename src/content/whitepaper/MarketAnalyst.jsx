import React, { useState } from "react";

function MarketAnalyst() {
    const [open, toggleOpen] = useState(false)

    const closedContect = (
        <p>Individual investors often lack the comprehensive insight and industry experience to properly evaluate project legitimacy and potential for success. <a onClick={() => toggleOpen(!open)}>Read More</a></p>
    )

    const openedContent = (
        <>
            <p>Individual investors often lack the comprehensive insight and industry experience to properly evaluate project legitimacy and potential for success.</p>
            <p>In other cases, investors are misled by social media or overly enthusiastic project teams and representatives that promise profits, whether scams are preplanned or loss of funds results purely from poor deployment.</p>
            <p>Ultimately, a lack of knowledge and expertise, influence by social media trends, poor due diligence and absent financial and operational regulations expose investors to a range of scams regarding ICOs, IGOs and IDOs.</p>
            <p>Furthermore, hundreds of keen, potential DeFi investors remain uncertain and ultimately avoid this prosperous field due its lack of transparency. This is a major problem solved by the crystal-clear ethos of the 0xBlock protocol.</p>
            <p>Similar to other types of investment, a willingness to take greater risks may reward an investor with greater returns. However, investor risk can be lowered (or mitigated altogether) by projects with significant sector experience, or access to resources that direct funds into professionally-governed pools to ensure the greatest chances of user safety and prosperity. <a onClick={() => toggleOpen(!open)}>Hide</a></p>
        </>
    )
    
    return (
        <div className="whitepaper-page-mobile">
            <div className="d-flex justify-content-between">
                <h3 style={{
                    width: 147,
                    marginBottom: 62
                }}>Market Analysis</h3>
            </div>
            <img style={{
                marginBottom: 42
            }} src="images/page03-1.svg"></img>
            {open ? openedContent : closedContect}
        </div>
    )
}

export default MarketAnalyst