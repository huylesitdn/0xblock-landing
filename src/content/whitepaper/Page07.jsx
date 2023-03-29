import React from "react";

const Page07 = () => {
  return (
    <>
      <div className="whitepaper-page">
        <div
          style={{
            position: "absolute",
            width: 335,
            height: 23,
            left: 28,
            top: 50 - 26,
            fontFamily: "Uxum Grotesque",
            fontSize: 18,
            lineHeight: "129%",
            letterSpacing: "0.055em",
            color: "#2F2E41",
          }}
        >
          Participation in ICOs, IDOs and IGOs{" "}
        </div>
        <div
          style={{
            position: "absolute",
            width: 21,
            height: 2,
            left: 28,
            top: 79 - 26,
            background: "#0052FF",
            borderRadius: 2,
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            width: 248,
            height: 195,
            left: 118,
            top: 111 - 26,
          }}
        >
          <img
            style={{ width: "100%", height: "100%" }}
            src="/images/page06-1.svg"
          ></img>
        </div>
        <div
          style={{
            position: "absolute",
            width: 442,
            height: 260,
            left: 28,
            top: 344 - 26,
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: 12,
            lineHeight: "163.5%",
            textAlign: "justify",
            color: "rgba(47, 46, 65, 0.8)",
          }}
        >
          The introduction of new tokens to market presents tangible investment
          opportunities with many newly introduced tokens appreciating rapidly
          by 5x, 10x or even 100x for early investors.
          <br />
          <br />
          However, participation in these introductory crowdsales is often only
          profitable when investors can allocate large funds and obtain tokens
          at a significant discount. While entry at such price points is
          unlikely for individual investors, 0xBlock aggregates investment funds
          to enter ICOs, IDOs and IGOs at high levels and maximize user profits.
          <br />
          <br />
          To facilitate investor earnings, 0xBlock provides users with the
          ability to mint ascending tiers of contract that generate ascending
          levels of reliable, sizable daily returns
        </div>
        {/* <div style={{
                    position: "absolute",
                    width: 17,
                    height: 0,
                    left: 277,
                    top: 578,
                    border: "1px solid #0052FF"
                }}></div>
                <div style={{
                    position: "absolute",
                    width: 168,
                    height: 0,
                    left: 301,
                    top: 578,
                    border: "1px solid #0052FF"
                }}></div> */}
      </div>
    </>
  );
};

export default Page07;
