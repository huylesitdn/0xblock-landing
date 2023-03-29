import React, { useState } from "react";

function OurSolution() {
  const [open, toggleOpen] = useState(false);
  const [open1, toggleOpen1] = useState(false);
  const [open2, toggleOpen2] = useState(false);
  const [open3, toggleOpen3] = useState(false);
  const [open4, toggleOpen4] = useState(false);

  const closedContect = (
    <p>
      A partial or entire lack of transparency is one of the most pressing
      issues in current DeFi projects. The 0xBlock team has worked tirelessly to
      instill its platform and token with 360° transparency in all situations.
      The team welcomes <a onClick={() => toggleOpen(!open)}>Read More</a>
    </p>
  );

  const openedContent = (
    <p>
      {" "}
      A partial or entire lack of transparency is one of the most pressing
      issues in current DeFi projects. The 0xBlock team has worked tirelessly to
      instill its platform and token with 360° transparency in all situations.
      The team welcomes and directly answers questions from users via its social
      channels, for we believe 100% transparency to be key to our protocol’s
      success. <a onClick={() => toggleOpen(!open)}>Hide</a>
    </p>
  );

  const closedContect1 = (
    <p>
      Our wallets will feature Multi-Sig Security, meaning no single party can
      remove funds from the wallet. Rather, both founders will be required to
      sign in order to use wallet funds.{" "}
      <a onClick={() => toggleOpen1(!open1)}>Read More</a>
    </p>
  );

  const openedContent1 = (
    <p>
      Our wallets will feature Multi-Sig Security, meaning no single party can
      remove funds from the wallet. Rather, both founders will be required to
      sign in order to use wallet funds. Before 0xBlock’s official launch, its
      smart contracts and dApp code will be audited by a verified third party to
      ensure zero loopholes regarding fund security.{" "}
      <a onClick={() => toggleOpen1(!open1)}>Hide</a>
    </p>
  );

  const closedContect2 = (
    <p>
      Investments in DeFi become increasingly difficult when project investors
      lack the knowledge and experience to select reliable opportunities without
      being scammed. Our in-house experts evaluate and select{" "}
      <a onClick={() => toggleOpen2(!open2)}>Read More</a>
    </p>
  );

  const openedContent2 = (
    <p>
      Investments in DeFi become increasingly difficult when project investors
      lack the knowledge and experience to select reliable opportunities without
      being scammed. Our in-house experts evaluate and select only the best
      investment opportunities for our users. We possess decades of collective
      crypto and finance knowledge and experience, and conduct high-level
      research into project tokenomics, logic and trajectory before even
      considering investment. Our meticulous due diligence results in increased
      profitability for all 0xBlock contract holders.{" "}
      <a onClick={() => toggleOpen2(!open2)}>Hide</a>
    </p>
  );

  const closedContect3 = (
    <p>
      Allocating investment funds to a range of channels helps create a diverse
      investment portfolio that mitigates risk. Though all investment
      opportunities are closely evaluated and vetted{" "}
      <a onClick={() => toggleOpen3(!open3)}>Read More</a>
    </p>
  );

  const openedContent3 = (
    <p>
      Allocating investment funds to a range of channels helps create a diverse
      investment portfolio that mitigates risk. Though all investment
      opportunities are closely evaluated and vetted, market changes from any
      influence may reduce an asset’s value or cause price volatility. To
      mitigate these risks, we maintain a diversified portfolio with an optimal
      risk/reward balance for our investors. The team’s extensive experience in
      crypto, DeFi and investment strategies enables us to provide levels of
      portfolio diversification and risk minimization that can be impossible to
      achieve for individual investors.{" "}
      <a onClick={() => toggleOpen3(!open3)}>Hide</a>
    </p>
  );

  const closedContect4 = (
    <p>
      The introduction of new tokens to market presents tangible investment
      opportunities, with many newly introduced tokens appreciating rapidly by
      5x, 10x or even 100x for early investors.{" "}
      <a onClick={() => toggleOpen4(!open4)}>Read More</a>
    </p>
  );

  const openedContent4 = (
    <>
      <p>
        The introduction of new tokens to market presents tangible investment
        opportunities, with many newly introduced tokens appreciating rapidly by
        5x, 10x or even 100x for early investors. However, participation in
        these introductory crowdsales is often only profitable when investors
        can allocate large funds and obtain tokens at a significant discount.
        While entry at such price points is unlikely for individual investors,
        0xBlock aggregates investment funds to enter ICOs, IDOs and IGOs at high
        levels and maximize user profits.
      </p>
      <p>
        To facilitate investor earnings, 0xBlock provides users with the ability
        to mint ascending tiers of contract that generate ascending levels of
        reliable, sizable daily returns{" "}
        <a onClick={() => toggleOpen4(!open4)}>Hide</a>
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
        Our Solution
      </h3>
      <p
        style={{
          marginBottom: 34,
        }}
      >
        With 0xBlock, we provide a solution that addresses and overcomes key
        issues in the DeFi space, including:{" "}
      </p>
      <h4
        style={{
          marginBottom: 47,
        }}
      >
        Transparency
      </h4>
      <img
        style={{
          marginBottom: 42,
        }}
        src="/images/page04-2.svg"
      ></img>
      {open ? openedContent : closedContect}
      <h4
        style={{
          marginBottom: 47,
        }}
      >
        Security
      </h4>
      <img
        style={{
          marginBottom: 42,
        }}
        src="/images/page04-1.svg"
      ></img>
      {open1 ? openedContent1 : closedContect1}
      <h4
        style={{
          marginBottom: 47,
        }}
      >
        Intelligent Project Investment
      </h4>
      <img
        style={{
          marginBottom: 42,
        }}
        src="/images/page05-2.svg"
      ></img>
      {open2 ? openedContent2 : closedContect2}
      <h4
        style={{
          marginBottom: 47,
        }}
      >
        Portfolio Diversification
      </h4>
      <img
        style={{
          marginBottom: 42,
        }}
        src="/images/page05-1.svg"
      ></img>
      {open3 ? openedContent3 : closedContect3}
      <h4
        style={{
          marginBottom: 47,
        }}
      >
        Participation in ICOs, IDOs and IGOs{" "}
      </h4>
      <img
        style={{
          marginBottom: 42,
        }}
        src="/images/page06-1.svg"
      ></img>
      {open4 ? openedContent4 : closedContect4}
    </div>
  );
}

export default OurSolution;
