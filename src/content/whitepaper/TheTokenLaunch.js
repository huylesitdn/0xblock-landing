import React, { useState } from "react";

function TheTokenLaunch() {
  const [open, toggleOpen] = useState(false);
  const [open1, toggleOpen1] = useState(false);
  const [open2, toggleOpen2] = useState(false);
  const [open3, toggleOpen3] = useState(false);
  const [open4, toggleOpen4] = useState(false);
  const [open5, toggleOpen5] = useState(false);
  const [open6, toggleOpen6] = useState(false);

  const closedContect = (
    <p>
      To support its users in minting rewards contracts, 0xBlock will use its
      proprietary 0xB token, which will also suit an ever-expanding range of
      on-platform and real-world utilities.{" "}
      <a onClick={() => toggleOpen(!open)}>Read More</a>
    </p>
    // <p>To support its users in minting rewards contracts, 0xBlock will use its proprietary 0xB token, which will be used for an ever-expanding range of on-platform and real-world utilities as the platform grows <a onClick={() => toggleOpen(!open)}>Read More</a></p>
  );

  const openedContent = (
    <>
      <p>
        To support its users in minting rewards contracts, 0xBlock will use its
        proprietary 0xB token, which will also suit an ever-expanding range of
        on-platform and real-world utilities.{" "}
      </p>
      <p>
        Users will be able to purchase 0xB from the DEXs on which it is listed
        or traded, buying tokens corresponding to the number of contracts they
        wish to mint. <a onClick={() => toggleOpen(!open)}>Hide</a>
      </p>
    </>
  );

  const closedContect1 = (
    <p>
      To create confidence in all 0xBlock members, our protocol will not feature
      seed, private, investor or whitelist rounds (as seen in a majority of
      current project types).{" "}
      <a onClick={() => toggleOpen1(!open1)}>Read More</a>
    </p>
  );

  const openedContent1 = (
    <>
      <p>
        To create confidence in all 0xBlock members, our protocol will not
        feature seed, private, investor or whitelist rounds (as seen in a
        majority of current project types).{" "}
      </p>

      <p>
        This prevents large-scale investors from purchasing 0xBlock tokens at
        reduced pricing before the general public has a chance to buy them.
        Inclusion of these rounds may suggest a risk of large-scale selloffs
        that affect short-term profitability and long-term project value.
        0xBlock is designed transparently to provide maximum benefits for the
        average user, and this feature enforces that.
      </p>

      <p>
        Prior to 0xB token launch, 0xBlock will mint 1 million 0xB tokens. The
        initial circulation of 0xB tokens will consist of 25,000 tokens for
        contract minting by 0xBlock early adopters. Circulation will increase
        over time as users receive more tokens from our Rewards Wallet in the
        form of contract returns.{" "}
        <a onClick={() => toggleOpen1(!open1)}>Hide</a>
      </p>
    </>
  );

  const closedContect2 = (
    <>
      <p>A user wishes to purchase a Cube Contract for 15 0xB tokens.</p>
      <p>
        They can use 0xB tokens stored in their MetaMask wallet or convert
        DEX-listed cryptocurrencies into 0xB.{" "}
        <a onClick={() => toggleOpen2(!open2)}>Read More</a>
      </p>
    </>
  );

  const openedContent2 = (
    <>
      <p>A user wishes to purchase a Cube Contract for 15 0xB tokens. </p>

      <p>
        They can use 0xB tokens stored in their MetaMask wallet or convert
        DEX-listed cryptocurrencies into 0xB. The user then connects to the
        0xBlock dApp using his wallet and mints a Cube Contract. The contract is
        instantly minted and immediately begins delivering daily rewards to the
        wallet associated with that Cube Contract.
      </p>

      <p>
        Creating a contract is permanent - the user cannot retract their 15 0xB
        tokens but will enjoy a lifetime of reliable, sizable returns. Due
        simply to transaction load and limits, there is a minting limit of 100
        contracts per wallet. <a onClick={() => toggleOpen2(!open2)}>Hide</a>
      </p>
    </>
  );

  const closedContect3 = (
    <p>
      Whenever a user wishes to cash out their rewards, 0xBlock will charge a
      10% fee that will be transferred to the liquidity pool (50% 0xB, 50%
      AVAX). <a onClick={() => toggleOpen3(!open3)}>Read More</a>
    </p>
  );

  const openedContent3 = (
    <p>
      Whenever a user wishes to cash out their rewards, 0xBlock will charge a
      10% fee that will be transferred to the liquidity pool (50% 0xB, 50%
      AVAX). This cashout fee may change at any time in favor of optimal
      protocol improvement and community participation.{" "}
      <a onClick={() => toggleOpen3(!open3)}>Hide</a>
    </p>
  );

  const closedContect4 = (
    <p>
      To maintain sustainability and cultivate advancement of the 0xBlock
      protocol, our team has implemented a decay model that sees rewards
      decrease gradually over time. According to the current decay model,
      contract reward APR will decrease 15%/3 months on a recurring basis.{" "}
      <a onClick={() => toggleOpen4(!open4)}>Read More</a>
    </p>
  );

  const openedContent4 = (
    <>
      <p>
        To maintain sustainability and cultivate advancement of the 0xBlock
        protocol, our team has implemented a decay model that sees rewards
        decrease gradually over time. According to the current decay model,
        contract reward APR will decrease 15%/3 months on a recurring basis.
      </p>
      <p style={{ color: "#FF3535", fontWeight: 500 }}>
        Note: Each minted contract will have its own decay cycle.
      </p>
      <p style={{ color: "#FF3535" }}>
        Example: If you have ten contracts minted on different dates, the decay
        model will implement on each contract individually according to its mint
        date.{" "}
      </p>
      <p>
        Our decay model will be adapted by the team to suit optimal ongoing
        sustainability and maximize user benefits.
      </p>
      <p style={{ fontWeight: 500 }}>
        Here is an example of how 0xBlock’s contract reward decay model will
        work when a member mints a Square contract:{" "}
      </p>
      <p className="w-100">
        <b>First 1-3 months:</b> 0.034 0xB/day
        <br />
        <b>From 4-6 months:</b> 0.034-15% = 0.028 0xB/day
        <br />
        <b>From 7-9 months:</b> 0.028-15% = 0.024 0xB/day
        <br />
        <b>From 10-12 months:</b> 0.024-15% = 0.020 0xB/day{" "}
        <a onClick={() => toggleOpen4(!open4)}>Hide</a>
      </p>
    </>
  );

  const closedContect5 = (
    <p>
      Our team loves to engage with our community and welcome you to join us on
      Discord, where we will share every latest project update.{" "}
      <a onClick={() => toggleOpen5(!open5)}>Read More</a>
    </p>
  );

  const openedContent5 = (
    <>
      <p>
        Our team loves to engage with our community and welcome you to join us
        on Discord, where we will share every latest project update.
      </p>
      <p>
        Make sure you follow us on 0xBlock’s official social channels to be
        first to hear of every development.
      </p>
      <p style={{ color: "#FF3535" }}>
        Remember never to listen to news that is not reported from one of our
        official channels!* <a onClick={() => toggleOpen5(!open5)}>Hide</a>
      </p>
    </>
  );

  const closedContect6 = (
    <p>
      0xB tokens provide holders with 0xBlock platform access. 0xB tokens and
      the 0xBlock platform are not for speculative investment. No promises are
      made regarding the value or future performance of 0xB tokens.{" "}
      <a onClick={() => toggleOpen6(!open6)}>Read More</a>
    </p>
  );

  const openedContent6 = (
    <>
      <p>
        0xB tokens provide holders with 0xBlock platform access. 0xB tokens and
        the 0xBlock platform are not for speculative investment. No promises are
        made regarding the value or future performance of 0xB tokens, nor any
        particular value of 0xB tokens. No other rights associated with the
        holding of 0xB tokens are given. Proceeds of the 0xB token may be spent
        as the company sees appropriate, which may change as deemed necessary by
        the maturation and advancement of the 0xB token and 0xBlock platform.
      </p>
      <p>
        Our team invests heavily in the safety and security of 0xBlock services,
        however we cannot guarantee absolute protection against all possible
        forms of error or malicious deed by any party. Therefore, all risks of
        using the 0xBlock platform in any capacity (as well as transferring,
        receiving and accumulating 0xB tokens) are assumed solely by the user.{" "}
      </p>
      <p>
        0xB tokens are intended to be held and used by those experienced and
        knowledgeable in cryptographic tokens, their acquisition, transfer and
        use, and are to be used only for accessing 0xBlock platform services.{" "}
        <a onClick={() => toggleOpen6(!open6)}>Hide</a>
      </p>
    </>
  );

  return (
    <div className="whitepaper-page-mobile">
      <h3
        style={{
          marginBottom: 34,
        }}
      >
        The 0xB Token &amp; Launch
      </h3>
      <h4
        style={{
          marginBottom: 47,
        }}
      >
        0xB Token
      </h4>
      <img
        style={{
          width: 131,
          height: 134,
          marginBottom: 42,
        }}
        src="images/page12-1.png"
        srcSet="images/page12-1_2x.png"
      ></img>
      {open ? openedContent : closedContect}
      <h4
        style={{
          marginBottom: 47,
        }}
      >
        Token Launch
      </h4>
      {open1 ? openedContent1 : closedContect1}
      <img
        style={{
          marginBottom: 42,
        }}
        src="images/page13-1.svg"
      ></img>
      <small>Distribution of 0xB tokens prior to token launch</small>
      <h4
        style={{
          marginTop: 70,
          marginBottom: 26,
        }}
      >
        Contract Tiers Explained
      </h4>
      <p className="align-self-start">
        Users can buy 0xB tokens to mint contracts of three tiers:{" "}
      </p>
      <img
        style={{
          marginBottom: 30,
          marginTop: 30,
        }}
        src="images/page16-1.png"
        srcSet="images/page16-1_2x.png"
      ></img>
      <b>Square</b>
      <span className="text-primary">(5 0xB)</span>
      <img
        style={{
          marginBottom: 30,
          marginTop: 30,
        }}
        src="images/page16-2.png"
        srcSet="images/page16-2_2x.png"
      ></img>
      <b>Cube</b>
      <span className="text-primary">(15 0xB)</span>
      <img
        style={{
          marginBottom: 30,
          marginTop: 30,
        }}
        src="images/page16-3.png"
        srcSet="/images/page16-3_2x.png"
      ></img>
      <b>Tesseract</b>
      <span className="text-primary">(30 0xB)</span>
      <h4
        style={{
          marginTop: 75,
          marginBottom: 47,
        }}
      >
        Contract Case Example
      </h4>
      {open2 ? openedContent2 : closedContect2}
      <img
        style={{
          marginBottom: 42,
        }}
        src="/images/page15-1.svg"
      ></img>
      <small>Distribution of tokens from purchased contracts</small>
      <h4
        style={{
          marginTop: 45,
          marginBottom: 47,
        }}
      >
        Contract Rewards
      </h4>
      <p>
        Daily rewards will be distributed in 0xB tokens to contract owner
        wallets according to contract tier.
      </p>
      <div
        style={{
          position: "relative",
          width: 225,
          height: 102,
          background: "#FFFFFF",
          border: "1px solid rgba(47, 46, 65, 0.08)",
          boxSizing: "border-box",
          borderRadius: 10,
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 65,
            height: 61,
            left: 18,
            top: 11,
          }}
        >
          <img
            src="/images/page16-1.png"
            srcSet="/images/page16-1_2x.png"
          ></img>
        </div>
        <div
          style={{
            position: "absolute",
            width: 42,
            height: 15,
            left: 20,
            top: 76,
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: 13,
            lineHeight: "112.5%",
            textAlign: "justify",
            color: "#2F2E41",
          }}
        >
          Square
        </div>
        <div
          style={{
            position: "absolute",
            width: 127,
            height: 69,
            left: 95,
            top: 18,
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: 10,
            lineHeight: "228%",
            textAlign: "justify",
            color: "rgba(47, 46, 65, 0.8)",
          }}
        >
          <span style={{ color: "rgba(47, 46, 65, 1)" }}>APR:</span> 250%
          <br />
          <span style={{ color: "rgba(47, 46, 65, 1)" }}>Reward:</span> 0.03 0xB
          / Day
          <br />
          <span style={{ color: "rgba(47, 46, 65, 1)" }}>ROI:</span> Approx 146
          Days
        </div>
      </div>

      <div
        style={{
          marginTop: 54,
          position: "relative",
          width: 225,
          height: 102,
          background: "#FFFFFF",
          border: "1px solid rgba(47, 46, 65, 0.08)",
          boxSizing: "border-box",
          borderRadius: 10,
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 54,
            height: 54,
            left: 19,
            top: 16,
          }}
        >
          <img
            src="/images/page16-2.png"
            srcSet="/images/page16-2_2x.png"
          ></img>
        </div>
        <div
          style={{
            position: "absolute",
            width: 33,
            height: 15,
            left: 27,
            top: 76,
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: 13,
            lineHeight: "112.5%",
            textAlign: "justify",
            color: "#2F2E41",
          }}
        >
          Cube
        </div>
        <div
          style={{
            position: "absolute",
            width: 131,
            height: 69,
            left: 92,
            top: 18,
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: 10,
            lineHeight: "228%",
            textAlign: "justify",
            color: "rgba(47, 46, 65, 0.8)",
          }}
        >
          <span style={{ color: "rgba(47, 46, 65, 1)" }}>APR:</span> 400%
          <br />
          <span style={{ color: "rgba(47, 46, 65, 1)" }}>Reward:</span> 0.16 0xB
          / Day
          <br />
          <span style={{ color: "rgba(47, 46, 65, 1)" }}>ROI:</span> Approx 92
          Days
        </div>
      </div>
      <div
        style={{
          position: "relative",
          marginTop: 54,
          marginBottom: 78,
          width: 225,
          height: 102,
          background: "#FFFFFF",
          border: "1px solid rgba(47, 46, 65, 0.08)",
          boxSizing: "border-box",
          borderRadius: 10,
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 67,
            height: 67,
            left: 21,
            top: 7,
          }}
        >
          <img
            src="/images/page16-3.png"
            srcSet="/images/page16-3_2x.png"
          ></img>
        </div>
        <div
          style={{
            position: "absolute",
            width: 60,
            height: 15,
            left: 21,
            top: 74,
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: 13,
            lineHeight: "112.5%",
            textAlign: "justify",
            color: "#2F2E41",
          }}
        >
          Tesseract
        </div>
        <div
          style={{
            position: "absolute",
            width: 120,
            height: 92,
            left: 99,
            top: 17,
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: 10,
            lineHeight: "163.5%",
            textAlign: "justify",
            color: "rgba(47, 46, 65, 0.8)",
          }}
        >
          <span style={{ color: "rgba(47, 46, 65, 1)" }}>APR:</span> 500%
          <br />
          <span style={{ color: "rgba(47, 46, 65, 1)" }}>Reward:</span> 0.41 0xB
          / Day
          <br />
          <span style={{ color: "rgba(47, 46, 65, 1)" }}>ROI:</span> Approx 73
          Days
        </div>
      </div>
      {open3 ? openedContent3 : closedContect3}
      <h4
        style={{
          marginTop: 45,
          marginBottom: 26,
        }}
      >
        Contract Reward Decay Model
      </h4>
      {open4 ? openedContent4 : closedContect4}
      <img
        style={{
          marginBottom: 42,
        }}
        src="images/page17-1.svg"
      ></img>
      <h4
        style={{
          marginTop: 45,
          marginBottom: 26,
        }}
      >
        Engage with 0xBlock
      </h4>
      <div
        style={{
          width: 297,
          height: 269,
          marginBottom: 39,
        }}
        className="p-relative"
      >
        <div
          style={{
            position: "absolute",
            width: 178.57,
            height: 160,
            left: 59,
            top: 24,
          }}
        >
          <img src="images/page18-1.svg"></img>
        </div>
        <div
          style={{
            position: "absolute",
            width: 40,
            height: 16,
            left: 58,
            top: 0,
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: 10,
            lineHeight: "163.5%",
            textAlign: "justify",
            color: "rgba(47, 46, 65, 0.8)",
          }}
        >
          Discord
        </div>
        <div
          style={{
            position: "absolute",
            width: 40,
            height: 16,
            left: 198,
            top: -4,
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: 10,
            lineHeight: "163.5%",
            textAlign: "justify",
            color: "rgba(47, 46, 65, 0.8)",
          }}
        >
          Twitter
        </div>
        <a
          href="#"
          style={{
            position: "absolute",
            width: 46,
            height: 13,
            left: 192,
            top: 15,
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "medium",
            fontSize: 8,
            lineHeight: "163.5%",
            textAlign: "justify",
            color: "#5C91FF",
          }}
        >
          @0xblockfi
        </a>
        <div
          style={{
            position: "absolute",
            padding: "11px 20px",
            maxWidth: 330,
            width: "100%",
            left: 0,
            top: 216,
            background: "#FFFFFF",
            border: "1px solid #E7E7E7",
            boxSizing: "border-box",
            borderRadius: 11,
            textAlign: "center",
          }}
        >
          <small>
            Alternatively, reach out to our team via email at&nbsp;
            <a href="mailto:support@0xblock.finance">support@0xblock.finance</a>
          </small>
        </div>
      </div>
      {open5 ? openedContent5 : closedContect5}
      <h4
        style={{
          marginTop: 45,
          marginBottom: 26,
        }}
      >
        Disclaimer
      </h4>
      {open6 ? openedContent6 : closedContect6}
    </div>
  );
}

export default TheTokenLaunch;
