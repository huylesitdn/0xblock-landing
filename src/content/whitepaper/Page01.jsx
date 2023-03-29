import React from "react";

const Page01 = () => {
  return (
    <>
      <div className="whitepaper-page">
        <div
          style={{
            position: "absolute",
            width: 498,
            height: 322,
            left: 0,
            top: 0,
          }}
        >
          <img
            src="/images/page01-1.svg"
            srcSet="/images/page01-1_2x.png"
          ></img>
        </div>
        <div
          style={{
            position: "absolute",
            width: 62,
            height: 22,
            left: 395,
            top: -140,
            fontFamily: "Ruberoid",
            fontStyle: "normal",
            fontWeight: 800,
            fontSize: 15,
            lineHeight: 22,
            color: "#FFFFFF",
          }}
        >
          0xBlock
        </div>
        <div
          style={{
            position: "absolute",
            width: 79,
            height: 26,
            left: 61,
            top: 437,
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: 16,
            lineHeight: "163.5%",
            textAlign: "justify",
            letterSpacing: "0.055em",
            color: "#9DA5B0",
          }}
        >
          0xBLOCK
        </div>
        <div
          style={{
            position: "absolute",
            width: 3,
            height: 3,
            left: 147,
            top: 449,
            background: "#9DA5B0",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            width: 115,
            height: 26,
            left: 157,
            top: 437,
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: 16,
            lineHeight: "163.5%",
            textAlign: "justify",
            letterSpacing: "0.055em",
            color: "#9DA5B0",
          }}
        >
          WHITE PAPER
        </div>
        <div
          style={{
            position: "absolute",
            width: 242,
            height: 88,
            left: 61,
            top: 480,
            fontFamily: "Uxum Grotesque",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: 32,
            lineHeight: "138%",
            letterSpacing: "0.035em",
            color: "#2F2E41",
          }}
        >
          Revolutionizing <br />
          The DeFi Space
        </div>
      </div>
    </>
  );
};

export default Page01;
