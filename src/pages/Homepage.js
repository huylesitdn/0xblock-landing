import React from "react";
import { NavLink as Link } from "react-router-dom";

import Slider from "../components/slider/Slider";
import Chart from "../components/chart/Chart";
import Graph from "../components/graph/Graph";
import Carousel from "../components/carousel/Carousel";

import Scrollbar from "smooth-scrollbar";
import gsap from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typed from "typed.js";

const container = document.querySelector("#root");
let scrollbar;

gsap.registerPlugin(ScrollTrigger);

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCompact: false,
    };
    this.handleMenuClose = this.handleMenuClose.bind(this);
  }

  handleResize = () => {
    const windowWidth = container.getBoundingClientRect().width;
    if (windowWidth > 991) {
      this.setState({ isCompact: false });
    } else {
      this.setState({ isCompact: true });
      scrollbar = Scrollbar.init(document.querySelector(".rewards-container"), {
        renderByPixels: false,
        damping: 0.075,
        disableScroll: { direction: "y" },
        alwaysShowTracks: false,
      });
    }
  };

  componentDidMount() {
    const windowWidth = container.getBoundingClientRect().width;
    if (windowWidth > 991) {
      this.setState({ isCompact: false });
    } else {
      this.setState({ isCompact: true });
      scrollbar = Scrollbar.init(document.querySelector(".rewards-container"), {
        renderByPixels: false,
        damping: 0.075,
        disableScroll: { direction: "y" },
        alwaysShowTracks: false,
      });
    }
    window.addEventListener("resize", this.handleResize);

    // if (this.state.location == '/') {

    ScrollTrigger.matchMedia({
      "(min-width: 992px)": function () {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".rewards-section",
            pin: ".rewards-section",
            start: "center center",
            end: "+2000",
            onUpdate: ({ progress }) => {
              if (progress > 0.5) {
                let backgrounds = document.querySelectorAll(".bg-shadow");
                for (let i = 0; i < backgrounds.length; i++) {
                  backgrounds[i].classList.remove("disabled");
                }
                let textsToAppear = document.querySelectorAll(".section-two");
                for (let i = 0; i < textsToAppear.length; i++) {
                  textsToAppear[i].classList.add("active");
                }
                let textsToDisappear =
                  document.querySelectorAll(".section-one");
                for (let i = 0; i < textsToDisappear.length; i++) {
                  textsToDisappear[i].classList.add("disabled");
                }
              } else {
                let backgrounds = document.querySelectorAll(".bg-shadow");
                for (let i = 0; i < backgrounds.length; i++) {
                  backgrounds[i].classList.add("disabled");
                }
                let textsToDisappear =
                  document.querySelectorAll(".section-two");
                for (let i = 0; i < textsToDisappear.length; i++) {
                  textsToDisappear[i].classList.remove("active");
                }
                let textsToAppear = document.querySelectorAll(".section-one");
                for (let i = 0; i < textsToAppear.length; i++) {
                  textsToAppear[i].classList.remove("disabled");
                }
              }
            },
            invalidateOnRefresh: true,
          },
        });
      },
    });
    // }

    gsap.to(".head .slide-from-left", {
      ease: "power3.out",
      duration: 2,
      opacity: 1,
      x: 0,
      delay: 0.8,
    });

    gsap.to(".head .slide-from-right", {
      ease: "power3.out",
      duration: 2,
      opacity: 1,
      x: 0,
      delay: 0.8,
    });

    gsap.utils.toArray(".slide-section").forEach((section) => {
      if (section.querySelectorAll(".slide-from-bottom").length) {
        gsap.to(section.querySelectorAll(".slide-from-bottom"), {
          scrollTrigger: section,
          ease: "power3.out",
          duration: 2,
          opacity: 1,
          y: 0,
          stagger: 0.1,
          delay: 0.8,
        });
      }
      if (section.querySelectorAll(".slide-from-right").length) {
        gsap.to(section.querySelectorAll(".slide-from-right"), {
          scrollTrigger: section,
          ease: "power3.out",
          duration: 1.5,
          opacity: 1,
          x: 0,
          stagger: 0.1,
          delay: 0.8,
        });
      }
      if (section.querySelectorAll(".slide-from-left").length) {
        gsap.to(section.querySelectorAll(".slide-from-left"), {
          scrollTrigger: section,
          ease: "power3.out",
          duration: 1.5,
          opacity: 1,
          x: 0,
          stagger: 0.1,
          delay: 0.8,
        });
      }
      if (section.querySelectorAll(".slide-rotate").length) {
        gsap.to(section.querySelectorAll(".slide-rotate"), {
          scrollTrigger: section,
          ease: "power3.out",
          duration: 2,
          opacity: 1,
          rotate: 0,
          stagger: 0.1,
          delay: 0.8,
        });
      }
    });

    let typed = new Typed(".typed-container", {
      strings: [
        "solution at a time",
        "product at a time",
        "strategy at a time",
      ],
      typeSpeed: 100,
      backSpeed: 75,
      backDelay: 1500,
      loop: true,
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
    if (scrollbar) {
      scrollbar.destroy();
    }
    ScrollTrigger.getAll().forEach((st) => st.kill());
    // if (scrolltrigger) {
    //     console.log(scrolltrigger)
    // }
  }

  handleMenuClose = () => {
    window.history.pushState({}, "", "/coming-soon");
    this.props.titleHandler();
    window.scrollTo({
      top: 0,
    });
  };

  handleLaunchApp = () => {
    window.open("https://app.0xblock.finance/", "_blank");
  };

  render() {
    let rewardsDesktop = (
      <div className="container">
        <div className="row mt-4 text-center">
          <div className="col-lg-4 p-relative">
            <div className="bg bg-white bg-shadow disabled">
              <div>
                <video
                  className="scale-1-4"
                  style={{ width: 200, height: 200 }}
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={"/images/square.mp4"} type="video/mp4" />
                </video>
              </div>
            </div>
            <p className="large text-neutral-60 section-two text-left ps-0 pe-0">
              <span className="text-neutral">APR:</span> 250%
              <br />
              <span className="text-neutral">Reward:</span> 0.034 0xB / Day
              <br />
              <span className="text-neutral">ROI:</span> Approx. 146 Days
            </p>
            <p className="large section-one">Square</p>
            <p className="regular text-primary section-one">(5 0xB)</p>
          </div>
          <div className="col-lg-4 p-relative">
            <div className="bg bg-white bg-shadow disabled">
              <div>
                <video
                  className="scale-1-4"
                  style={{ width: 200, height: 200 }}
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={"/images/cube.mp4"} type="video/mp4" />
                </video>
              </div>
            </div>
            <p className="large text-neutral-60 section-two text-left ps-0 pe-0">
              <span className="text-neutral">APR:</span> 400%
              <br />
              <span className="text-neutral">Reward:</span> 0.16 0xB / Day
              <br />
              <span className="text-neutral">ROI:</span> Approx. 92 Days
            </p>
            <p className="large section-one">Cube</p>
            <p className="regular text-primary section-one">(15 0xB)</p>
          </div>
          <div className="col-lg-4 p-relative">
            <div className="bg bg-white bg-shadow disabled">
              <div>
                <video
                  className="scale-1-4"
                  style={{ width: 200, height: 200 }}
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={"/images/tessaract.mp4"} type="video/mp4" />
                </video>
              </div>
            </div>
            <p className="large text-neutral-60 section-two text-left ps-0 pe-0">
              <span className="text-neutral">APR:</span> 500%
              <br />
              <span className="text-neutral">Reward:</span> 0.41 0xB / Day
              <br />
              <span className="text-neutral">ROI:</span> Approx. 73 Days
            </p>
            <p className="large section-one">Tesseract</p>
            <p className="regular text-primary section-one">(30 0xB)</p>
          </div>
        </div>
      </div>
    );

    let rewardsMobile = (
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="rewards-container__inner">
            <div>
              <div className="bg bg-white bg-shadow">
                <img
                  style={{ width: 200, height: 200 }}
                  src="/images/square.gif"
                  alt=""
                />
              </div>
              <p className="large text-neutral-60">
                <span className="text-neutral">APR:</span> 250%
                <br />
                <span className="text-neutral">Reward:</span> 0.034 0xB / Day
                <br />
                <span className="text-neutral">ROI:</span> Approx. 146 Days
              </p>
            </div>
            <div>
              <div className="bg bg-white bg-shadow">
                <img
                  style={{ width: 200, height: 200 }}
                  src="/images/CUBE.gif"
                  alt=""
                />
              </div>
              <p className="large text-neutral-60">
                <span className="text-neutral">APR:</span> 400%
                <br />
                <span className="text-neutral">Reward:</span> 0.16 0xB / Day
                <br />
                <span className="text-neutral">ROI:</span> Approx. 92 Days
              </p>
            </div>
            <div>
              <div className="bg bg-white bg-shadow">
                <img
                  style={{ width: 200, height: 200 }}
                  src="/images/Tessaract.gif"
                  alt=""
                />
              </div>
              <p className="large text-neutral-60">
                <span className="text-neutral">APR:</span> 500%
                <br />
                <span className="text-neutral">Reward:</span> 0.41 0xB / Day
                <br />
                <span className="text-neutral">ROI:</span> Approx. 73 Days
              </p>
            </div>
          </div>
        </div>
      </div>
    );

    let contractTiersDesktop = (
      <section style={{ display: "none" }}>nothing on desktop here</section>
    );

    let contractTiersMobile = (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 text-center">
              <h2 className="heading">Contract Tiers</h2>
              <p className="regular text-neutral-60 px-5">
                0xBlock members can use their 0xB tokens to establish 3 levels
                of 0xRC:
              </p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-4 mb-4 mb-lg-0 text-center">
              <video
                style={{ width: 200, height: 200 }}
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={"/images/square.mp4"} type="video/mp4" />
              </video>
              <p className="large">Square</p>
              <p className="regular text-primary">(5 0xB)</p>
            </div>
            <div className="col-lg-4 mb-4 mb-lg-0 text-center">
              <video
                style={{ width: 200, height: 200 }}
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={"/images/cube.mp4"} type="video/mp4" />
              </video>
              <p className="large">Cube</p>
              <p className="regular text-primary">(15 0xB)</p>
            </div>
            <div className="col-lg-4 text-center">
              <video
                style={{ width: 200, height: 200 }}
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={"/images/tessaract.mp4"} type="video/mp4" />
              </video>
              <p className="large">Tesseract</p>
              <p className="regular text-primary">(30 0xB)</p>
            </div>
          </div>
        </div>
      </section>
    );

    let { isCompact } = this.state;

    return (
      <>
        <section className="head">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 pb-4">
                <div className="align-cols slide-from-left bannerText">
                  <h1 className="mb-4 titleHome">
                    Revolutionizing
                    <br />
                    the DeFi space,
                    <br />
                    one <span className="text-primary typed-container"></span>
                  </h1>
                  <div className="actions">
                    <a
                      aria-label="Launch App"
                      className="btn btn-primary h-button centered btnLaunch"
                      data-text="Launch App"
                      href="#launch"
                      onClick={this.handleLaunchApp}
                    >
                      <span>L</span>
                      <span>a</span>
                      <span>u</span>
                      <span>n</span>
                      <span>c</span>
                      <span>h</span>
                      <span style={{ marginLeft: "5px" }}>A</span>
                      <span>p</span>
                      <span>p</span>
                    </a>
                    <a
                      aria-label="Buy 0xB"
                      className="btn btn-primary btnBuy h-button centered"
                      data-text="Buy 0xB"
                      href="https://app.0xblock.finance/swap"
                      target="_blank"
                      // onClick={this.handleLaunchApp}
                    >
                      <span>B</span>
                      <span>u</span>
                      <span>y</span>
                      <span style={{ marginLeft: "5px" }}>0</span>
                      <span>x</span>
                      <span>B</span>
                    </a>
                  </div>

                  <div className="socialsBy showDesktop">
                    <a
                      href="https://0xblock.finance/files/0xBlock_Audit_Report.pdf"
                      target="_blank"
                      className="cyrex"
                    >
                      <img alt="" src="/images/Cyrex.png" />
                    </a>
                    <a
                      href="https://www.assuredefi.io/projects/0xblock-finance/"
                      target="_blank"
                      className="assure"
                    >
                      <img alt="" src="/images/Assure.png" />
                    </a>
                    <a
                      href="https://cryptexlock.me/pair/43114/0xe66a111aDe51CEc994f3de6cD10fdD0096ee7C28"
                      target="_blank"
                      className="lpLocked"
                    >
                      <img alt="" src="/images/Cryptex.png" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-5 mt-lg-0 viewVideo">
                <div id="hero-video" className="slide-from-right">
                  <video autoPlay muted loop playsInline>
                    <source src={"/images/hero.mp4"} type="video/mp4" />
                  </video>
                </div>
              </div>

              <div className="socialsBy showMobile">
                <a
                  href="https://0xblock.finance/files/0xBlock_Audit_Report.pdf"
                  target="_blank"
                  className="cyrex"
                >
                  <img alt="" src="/images/Cyrex.png" />
                </a>
                <a
                  href="https://www.assuredefi.io/projects/0xblock-finance/"
                  target="_blank"
                  className="assure"
                >
                  <img alt="" src="/images/Assure.png" />
                </a>
                <a
                  href="https://cryptexlock.me/pair/43114/0xe66a111aDe51CEc994f3de6cD10fdD0096ee7C28"
                  target="_blank"
                  className="lpLocked"
                >
                  <img alt="" src="/images/Cryptex.png" />
                </a>
              </div>
            </div>
            <div className="text-center mt-3 d-sm-none d-md-block">
              <a href="#welcome">
                <img
                  className="scroll-updown"
                  src="/images/scroll-bottom.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </section>
        <section className="bg-md-light" id="welcome">
          <div className="container slide-section">
            <div className="row">
              <div className="col text-center">
                <h2 className="slide-from-bottom">Welcome to 0xBlock</h2>
                <p className="regular text-primary slide-from-bottom">
                  The future of crypto hedging
                </p>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-lg-10 offset-lg-1">
                <div className="bg bg-white slide-from-bottom">
                  <div className="row">
                    <div className="col-lg-7">
                      <div className="align-cols">
                        <p className="heading pe-md-5">
                          Our team of blockchain and finance experts aims to
                          create the largest, most transparent hedge fund in the
                          DeFi space, providing members worldwide with an
                          ever-growing range of investment opportunities and
                          unparalleled, protected profitability.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="align-cols">
                        <div className="bg bg-primary-blur coin-white">
                          <img src="/images/coin.gif" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container slide-section">
            <div className="row mt-5 slide-from-bottom">
              <div className="col-lg-5 offset-lg-1">
                <p className="regular welcome-regular px-xxl-5 px-lg-4">
                  Think of 0xBlock as a standard-setting staking app where
                  members fund minting contracts that generate consistent,
                  sizable rewards paid out daily.
                </p>
              </div>
              <div className="col-lg-5 mt-2 mt-lg-0">
                <p className="regular welcome-regular px-xxl-5 px-lg-4">
                  Revenue generated from contracts will be allocated to an
                  ever-growing range of exciting projects as the project
                  continues to expand.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container slide-section">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 text-center">
                <h2 className="heading slide-from-bottom">
                  How do I get started with 0xBlock?
                </h2>
                <p className="regular text-neutral-60 mt-2 slide-from-bottom">
                  0xBlock’s leading accessibility welcomes investors of all
                  experience levels to enjoy unimaginable levels of
                  profitability and utility.
                </p>
              </div>
            </div>
            <div className="row mt-5 slide-from-bottom">
              <Slider isCompact={isCompact} />
            </div>
          </div>
        </section>
        {isCompact ? contractTiersMobile : contractTiersDesktop}
        <section className="rewards-section">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <h2 className="heading p-relative">
                  <span className="section-one">Contract Tiers</span>
                  <span className="section-two">Rewards Explained</span>
                </h2>
                <p className="regular text-neutral-60 px-5 section-two">
                  0xBlock members can use their 0xB tokens to establish 3 levels
                  of 0xRC:
                </p>
              </div>
            </div>
          </div>
          <div className="rewards-container">
            {isCompact ? rewardsMobile : rewardsDesktop}
          </div>
        </section>
        <section className="bg-light">
          <div className="container">
            <div className="row slide-section">
              <div className="col-lg-8 offset-lg-2 text-center slide-from-bottom">
                <h2 className="heading">Contract Tokens Distribution</h2>
                <p className="regular text-neutral-60 slide-from-bottom">
                  Once a contract is minted, our smart contract distributes
                  tokens across a range of wallets to optimize project progress
                  and maximize rewards for our contract holders.
                </p>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-10 offset-lg-1">
                <Chart />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row slide-section">
              <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 text-center">
                <h2 className="heading slide-from-bottom">
                  Benefits of 0xBlock
                </h2>
                <p className="regular text-neutral-60 slide-from-bottom">
                  Life as an 0xBlock member unlocks a range of privileges
                  once-reserved for the crypto trading elite.
                </p>
              </div>
            </div>
            <div className="row mt-5 slide-section">
              <div className="col-lg-8 offset-lg-2">
                <ul className="icon-list">
                  <li className="slide-from-left">
                    <span className="icon icon_loupe"></span>
                    <p>Absolute Transparency</p>
                  </li>
                  <li className="slide-from-right">
                    <span className="icon icon_shield"></span>
                    <p>Security (Multi Sig wallets + 100% Audited Code)</p>
                  </li>
                  <li className="slide-from-left">
                    <span className="icon icon_participation"></span>
                    <p>Non-Tech Participation</p>
                  </li>
                  <li className="slide-from-right">
                    <span className="icon icon_diversification"></span>
                    <p>Portfolio Diversification</p>
                  </li>
                  <li className="slide-from-left">
                    <span className="icon icon_development"></span>
                    <p>Development of World-Class Products</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row slide-section">
              <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 text-center">
                <h2 className="heading slide-from-bottom">
                  Tokenomics Explained
                </h2>
                <p className="regular text-neutral-60 px-5 slide-from-bottom">
                  Discover how 0xB tokens will be distributed for maximum
                  protocol growth and user utility.
                </p>
                <div className="bg bg-border mt-4 slide-from-bottom">
                  <p>
                    <b>Total/Max Supply:</b> 1 million
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-10 offset-lg-1 slide-section">
                <Graph isCompact={isCompact} />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3 text-center">
                <h2 className="heading">Join our community</h2>
              </div>
            </div>
            <div className="row mt-4 mb-5 justify-content-center">
              <div className="col-lg-3 col-md-4 col-sm-5 col-5 text-center mb-3 mt-3">
                <a
                  href="https://twitter.com/0xblockfi"
                  target="_blank"
                  className="bg bg-border pb-0"
                >
                  <p>Twitter</p>
                  <span className="icon icon_twitter ml-5"></span>
                </a>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-5 col-5 text-center mb-3 mt-3">
                <a
                  href="https://medium.com/@0xblockfi"
                  target="_blank"
                  className="bg bg-border pb-0"
                >
                  <p>Medium</p>
                  <span className="icon icon_medium ml-5"></span>
                </a>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-5 col-5 text-center mb-3 mt-3">
                <a
                  href="https://discord.gg/0xblock"
                  target="_blank"
                  className="bg bg-border pb-0"
                >
                  <p>Discord</p>
                  <span className="icon icon_discord ml-5"></span>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Carousel isCompact={isCompact} />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Homepage;
