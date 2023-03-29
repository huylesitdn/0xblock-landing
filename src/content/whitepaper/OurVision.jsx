import React, { useState } from "react";

function OurVision() {
    const [open, toggleOpen] = useState(false)

    const closedContect = (
        <p>The 0xBlock platform aims to accomplish its mission by offering intuitive, user-friendly interfaces and simple processes, so even those without prior knowledge in cryptocurrencies can dive into 0xBlock and significantly benefit from its investment opportunities. <a onClick={() => toggleOpen(!open)}>Read More</a></p>
    )

    const openedContent = (
        <>
            <p>The 0xBlock platform aims to accomplish its mission by offering intuitive, user-friendly interfaces and simple processes, so even those without prior knowledge in cryptocurrencies can dive into 0xBlock and significantly benefit from its investment opportunities.</p>
            <p>To enjoy the profitability of 0xBlock, users will simply purchase the protocol’s proprietary 0xB tokens and allocate them to minting contracts on the 0xBlock dApp. These contracts have the capacity to generate multiple passive income streams for contract owners, with profitability increasing as the protocol advances.</p>
            <p>Beyond the establishment of the core 0xBlock platform, our team will begin developing world-class products (primarily a proprietary DEX, Launchpad and crypto wallet) that will add value to the 0xBlock ecosystem and enable us to generously reward our community. Real products are what matter to us most so, while we shall pursue the most promising industry events, our core focus will always remain on building real products. <a onClick={() => toggleOpen(!open)}>Hide</a></p>
        </>
    )

    return (
        <div className="whitepaper-page-mobile">
            <div className="d-flex justify-content-between">
                <h2 style={{
                    width: 147
                }}>Our Vision</h2>
                <img src="/images/page02-1.svg"></img>
            </div>
            <p className="primary-block-before" style={{
                marginTop: 48,
                marginBottom: 68,
                maxWidth: 336,
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: 10,
                lineHeight: "163.5%",
                textAlign: "justify",
                color: "rgba(47, 46, 65, 0.8)",
                background: "#FFFFFF",
                border: "1px solid rgba(47, 46, 65, 0.22)",
                borderRadius: 7,
                padding: "10px 19px"
            }}>0xBlock aims to become the world’s largest, most transparent DeFi hedge fund, delivering an enjoyable and profitable experience to investors of all kinds.</p>
            {open ? openedContent : closedContect}
        </div>
    )
}

export default OurVision