import React, { useState } from "react";

function PlatformArchitecture() {
  const [open, toggleOpen] = useState(false);
  const [open2, toggleOpen2] = useState(false);
  const [open3, toggleOpen3] = useState(false);
  const [open4, toggleOpen4] = useState(false);
  const [open5, toggleOpen5] = useState(false);
  const [open6, toggleOpen6] = useState(false);

  const closedContect = (
    <p>
      0xBlock is set to become a leading, trusted and broadly used crypto DeFi
      hedge fund, providing superior yields and daily returns for cryptocurrency
      holders via DeFi contract minting.{" "}
      <a onClick={() => toggleOpen(!open)}>Read More</a>
    </p>
  );

  const openedContent = (
    <>
      <p>
        0xBlock is set to become a leading, trusted and broadly used crypto DeFi
        hedge fund, providing superior yields and daily returns for
        cryptocurrency holders via DeFi contract minting.
      </p>

      <p>
        0xBlock's state-of-the-art technological platform is based on the
        Avalanche Blockchain, which we have selected for its low cost, rapid
        transfer speeds and scalable transactional infrastructure.{" "}
      </p>

      <p>
        Our team deemed Avalanche best to support the high levels of service and
        expansion we will require in delivering unparalleled profitability and
        experience to users. We deem Avalanche to also best-suit the broadening
        of contract volume and variety needed as the 0xBlock platform grows.{" "}
      </p>

      <p>
        Additionally, the Avalanche blockchain guarantees faster, qualitative
        development of Solidity-compatible dApps, as well as rapid maintenance
        in supporting 0xBlock’s increasing innovations. Our team is confident in
        the reliability of Avalanche as the backbone of 0xBlock operations,
        though will adapt intelligently in the future if required.{" "}
        <a onClick={() => toggleOpen(!open)}>Hide</a>
      </p>
    </>
  );

  const closedContect2 = (
    <p>
      In the months following the launch of the 0xBlock protocol, the team has
      plans to launch a range of 0xBlock NFTs.{" "}
      <a onClick={() => toggleOpen2(!open2)}>Read More</a>
    </p>
  );

  const openedContent2 = (
    <>
      <p>
        In the months following the launch of the 0xBlock protocol, the team has
        plans to launch a range of 0xBlock NFTs.
      </p>

      <p>
        NFTs will be mintable by community members who wish to further boost
        their reward levels and unlock additional utility as the 0xBlock
        platform grows.{" "}
      </p>

      <p>
        Crafted by our in-house designers, 0xBlock NFTs will also stand as
        beautiful, unique artworks that can be held, traded and collected as
        community members desire.{" "}
        <a onClick={() => toggleOpen2(!open2)}>Hide</a>
      </p>
    </>
  );

  const closedContect3 = (
    <p>
      0xBlock plans to develop a fully secure DEX that integrates all
      blockchains and supports the trade of any cryptocurrency they list.{" "}
      <a onClick={() => toggleOpen3(!open3)}>Read More</a>
    </p>
  );

  const openedContent3 = (
    <>
      <p>
        0xBlock plans to develop a fully secure DEX that integrates all
        blockchains and supports the trade of any cryptocurrency they list.{" "}
      </p>

      <p>
        Our advanced DEX will provide new heights of flexibility via multi-chain
        technology, enabling users to trade and convert 0xB tokens as well as
        those listed on all DEX-featured blockchain. The DEX will initially be
        constructed on Avalanche then be gradually expanded to support
        multi-chain operations between Ethereum, Binance Smart Chain, Solana,
        Fantom and more blockchains.{" "}
      </p>

      <p>
        To carry out these operations, we will develop a multi-chain interface
        system based on order books and atomic swaps that enables a new standard
        in cryptocurrency pair trades and conversions. This system will provide
        a one-stop multi-chain DEX solution that eliminates the need to conduct
        parallel trades in cryptocurrencies managed on different DEXs.
        <a onClick={() => toggleOpen3(!open3)}>Hide</a>
      </p>
    </>
  );

  const closedContect4 = (
    <p>
      The business model of our advanced DEX will be based on a small percentage
      commission of a transaction fee for every trade it completes.
      Pancakeswap’s estimated transaction fee revenue is approximately $500,000
      USD a week or over $25 million USD a year (Dang, 2021), and this is only
      expected to increase as platform adoption broadens.{" "}
      <a onClick={() => toggleOpen4(!open4)}>Read More</a>
    </p>
  );

  const openedContent4 = (
    <>
      <p>
        The business model of our advanced DEX will be based on a small
        percentage commission of a transaction fee for every trade it completes.
        Pancakeswap’s estimated transaction fee revenue is approximately
        $500,000 USD/week or over $25 million USD/year (Dang, 2021), and is only
        expected to increase as platform adoption broadens.
      </p>

      <p>
        Pancakeswap charges 0.25% of trade values as commission – of which 0.17%
        is returned to liquidity pools to reward liquidity providers, 0.03% is
        sent as fees to Pancakeswap's treasury, and 0.05% is dedicated to
        supporting its proprietary $CAKE token via buybacks and burns Trader
        Joe, an Avalanche-based DEX, charges 0.3% on trades – of which 0.25% is
        returned to liquidity pools to reward liquidity providers, and 0.05% is
        sent as fees to Trader Joe's treasury.{" "}
      </p>

      <p>
        Our DEX will propose similar yet more competitive transaction fees and
        will increase the share of rewards provided to liquidity providers.
      </p>

      <p>
        By implementing our multi-chain DEX, we will generate additional streams
        of income that can be shared with 0xBlock contract owners.
        Implementation of our DEX will also enable contract holders to benefit
        additionally from its profit-sharing plan and expansion of supported
        blockchains, user base and volume transactions.{" "}
      </p>

      <p>
        As well as profiting from increasingly advanced project modules,
        0xBlock's income from transaction fees will open a further revenue
        stream in the form of compounded DeFi revenue investments. Since 0xBlock
        already evaluates DeFi investment alternatives for users, the share of
        DEX revenues sent to 0xBlock's treasury will also be routed to superior
        investment opportunities that generate compound revenues over time.
      </p>

      <p>
        Hence, 0xBlock's treasury will also function in part as its Nostro
        account (internal investment fund for liquidity), generating additional
        profits for contract owners.{" "}
        <a onClick={() => toggleOpen4(!open4)}>Hide</a>
      </p>
    </>
  );

  const closedContect5 = (
    <p>
      The 0xBlock Launchpad will function as a supportive platform for new
      ventures in the protocol's fields of specialization: crypto-financing,
      DeFi, financial services and investments.{" "}
      <a onClick={() => toggleOpen5(!open5)}>Read More</a>
    </p>
  );

  const openedContent5 = (
    <>
      <p>
        The 0xBlock Launchpad will function as a supportive platform for new
        ventures in the protocol's specialized fields of crypto-financing, DeFi,
        financial services and investments.{" "}
      </p>

      <p>
        The Launchpad will incorporate investors into cryptocurrencies and
        projects, advise in launching new ICOs, IDOs and IGOs, and provide all
        necessary services to a selected group of entrepreneurs in return for a
        share of raised funds or minted tokens.{" "}
        <a onClick={() => toggleOpen5(!open5)}>Hide</a>
      </p>
    </>
  );

  const closedContect6 = (
    <p>
      The 0xBlock crypto wallet will stand as a multi-chain wallet (similar to
      MetaMask design) and, in its first stage of development, support the
      protocol’s 0xB token (as well as AVAX and other Avalanche-based tokens).{" "}
      <a onClick={() => toggleOpen6(!open6)}>Read More</a>
    </p>
  );

  const openedContent6 = (
    <>
      <p>
        The 0xBlock crypto wallet will stand as a multi-chain wallet (similar to
        MetaMask design) and, in its first stage of development, support the
        protocol’s 0xB token (as well as AVAX and other Avalanche-based tokens).
      </p>
      <p>
        These exciting projects mark the first developments beyond 0xBlock’s
        core protocol. As the protocol gains momentum in the months ahead, the
        number of thrilling, sector-evolving developments will grow similarly.
        Stay tuned to our Discord to be first to hear of more details…{" "}
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
        Platform Architecture
      </h3>
      <h4
        style={{
          marginBottom: 47,
        }}
      >
        Background
      </h4>
      <img
        style={{
          marginBottom: 42,
        }}
        src="/images/page07-1.svg"
      ></img>
      {open ? openedContent : closedContect}
      <h4
        style={{
          marginBottom: 47,
        }}
      >
        Upcoming Developments
      </h4>
      <img
        style={{
          marginBottom: 42,
        }}
        src="/images/page08-1.svg"
      ></img>
      <p>
        Beyond the core modules of the 0xBlock platform, the next developments
        shall be our proprietary 0xBlock NFTs, multi-chain DEX, Launchpad and
        crypto wallet to support increasing protocol and token utility.
      </p>
      <h4
        style={{
          marginBottom: 47,
        }}
      >
        0xBlock NFTs
      </h4>
      <img
        style={{
          marginBottom: 42,
        }}
        src="/images/page08-2.svg"
      ></img>
      {open2 ? openedContent2 : closedContect2}
      <h4
        style={{
          marginBottom: 29,
        }}
      >
        0xBlock DEX
      </h4>
      <img
        style={{
          marginBottom: 42,
        }}
        src="/images/page12-1.png"
      ></img>
      {open3 ? openedContent3 : closedContect3}
      <h4
        style={{
          marginBottom: 47,
        }}
      >
        DEX Business Model
      </h4>
      <img
        style={{
          marginBottom: 42,
        }}
        src="/images/page09-1.svg"
      ></img>
      {open4 ? openedContent4 : closedContect4}
      <h4
        style={{
          marginBottom: 47,
        }}
      >
        0xBlock Launchpad
      </h4>
      <img
        style={{
          marginBottom: 42,
        }}
        src="/images/page10-1.svg"
      ></img>
      {open5 ? openedContent5 : closedContect5}
      <h4
        style={{
          marginBottom: 47,
        }}
      >
        0xBlock Crypto Wallet
      </h4>
      <img
        style={{
          marginBottom: 42,
        }}
        src="/images/page11-1.svg"
      ></img>
      {open6 ? openedContent6 : closedContect6}
    </div>
  );
}

export default PlatformArchitecture;
