import React from "react";

const Page13 = () => {
  return (
    <>
      <div className="whitepaper-page">
        <div
          style={{
            position: "absolute",
            width: 335,
            height: 23,
            left: 28,
            top: 57 - 33,
            fontFamily: "Uxum Grotesque",
            fontSize: 18,
            lineHeight: "129%",
            letterSpacing: "0.055em",
            color: "#2F2E41",
          }}
        >
          0xBlock Crypto Wallet
        </div>
        <div
          style={{
            position: "absolute",
            width: 21,
            height: 2,
            left: 28,
            top: 88 - 33,
            background: "#0052FF",
            borderRadius: 2,
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            width: 168.07,
            height: 272,
            left: 180,
            top: 128 - 33,
          }}
        >
          <img src="/images/page11-1.svg"></img>
        </div>
        <div
          style={{
            position: "absolute",
            width: 442,
            height: 256,
            left: 28,
            top: 448 - 33,
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: 12,
            lineHeight: "163.5%",
            textAlign: "justify",
            color: "rgba(47, 46, 65, 0.8)",
          }}
        >
          The 0xBlock crypto wallet will stand as a multi-chain wallet (similar
          to MetaMask design) and, in its first stage of development, support
          the protocol’s 0xB token (as well as AVAX and other Avalanche-based
          tokens).
          <br />
          <br />
          These exciting projects mark the first developments beyond 0xBlock’s
          core protocol. As the protocol gains momentum in the months ahead, the
          number of thrilling, sector-evolving developments will grow similarly.
          Stay tuned to our Discord to be first to hear of more details…
        </div>
      </div>
    </>
  );
};

export default Page13;
