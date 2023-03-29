import React from "react";
import { gsap } from "gsap";
import Scrollbar from "smooth-scrollbar";

import Page01 from "../content/whitepaper/Page01";
import Page02 from "../content/whitepaper/Page02";
import Page03 from "../content/whitepaper/Page03";
import Page04 from "../content/whitepaper/Page04";
import Page05 from "../content/whitepaper/Page05";
import Page06 from "../content/whitepaper/Page06";
import Page07 from "../content/whitepaper/Page07";
import Page08 from "../content/whitepaper/Page08";
import Page09 from "../content/whitepaper/Page09";
import Page10 from "../content/whitepaper/Page10";
import Page11 from "../content/whitepaper/Page11";
import Page12 from "../content/whitepaper/Page12";
import Page13 from "../content/whitepaper/Page13";
import Page14 from "../content/whitepaper/Page14";
import Page15 from "../content/whitepaper/Page15";
import Page16 from "../content/whitepaper/Page16";
import Page17 from "../content/whitepaper/Page17";
import Page18 from "../content/whitepaper/Page18";
import Page19 from "../content/whitepaper/Page19";
import Page20 from "../content/whitepaper/Page20";
import Page21 from "../content/whitepaper/Page21";

import OurVision from "../content/whitepaper/OurVision";
import MarketAnalyst from "../content/whitepaper/MarketAnalyst";
import OurSolution from "../content/whitepaper/OurSolution";
import PlatformArchitecture from "../content/whitepaper/PlatformArchitecture";
import TheTokenLaunch from "../content/whitepaper/TheTokenLaunch";

const container = document.querySelector("#root");
const aspect = 498 / 633;
let scrollbar;

class Whitepaper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCompact: false,
      currentSection: "ourVision",
      activePage: 0,
    };
  }

  handleResize = () => {
    const windowWidth = container.getBoundingClientRect().width;
    if (windowWidth > 991) {
      this.setState({ isCompact: false });
      gsap.set(".carousel__item", {
        height: document.querySelector(".carousel__inner").clientHeight,
        width: document.querySelector(".carousel__inner").clientHeight * aspect,
      });
      gsap.set(".whitepaper-page", {
        scale:
          document.querySelector(".carousel__inner").clientHeight /
          document.querySelector(".whitepaper-page").clientHeight,
      });
      scrollbar = Scrollbar.init(document.querySelector(".carousel"), {
        renderByPixels: false,
        damping: 0.075,
        disableScroll: { direction: "y" },
        alwaysShowTracks: true,
      });
      gsap.set(".scrollbar-track", {
        scaleX:
          (document.querySelector(".carousel").clientWidth - 20 * 16) /
          document.querySelector(".scrollbar-track").clientWidth,
        xPercent: -50,
        y: -14,
      });
    } else {
      this.setState({ isCompact: true });
      scrollbar.removeListener((status) => this.handleScroll);
      scrollbar.destroy();
    }
  };

  componentDidMount() {
    const windowWidth = container.getBoundingClientRect().width;
    if (windowWidth > 991) {
      this.setState({ isCompact: false });
      scrollbar = Scrollbar.init(document.querySelector(".carousel"), {
        renderByPixels: false,
        damping: 0.075,
        disableScroll: { direction: "y" },
        alwaysShowTracks: true,
      });
      gsap.set(".scrollbar-track", {
        scaleX:
          (document.querySelector(".carousel").clientWidth - 20 * 16) /
          document.querySelector(".scrollbar-track").clientWidth,
        xPercent: -50,
        y: -14,
      });
      gsap.set(".carousel__item", {
        height: document.querySelector(".carousel__inner").clientHeight,
        width: document.querySelector(".carousel__inner").clientHeight * aspect,
      });
      gsap.set(".whitepaper-page", {
        scale:
          document.querySelector(".carousel__inner").clientHeight /
          document.querySelector(".whitepaper-page").clientHeight,
      });
      scrollbar.addListener((status) => this.handleScroll(status));
    } else {
      this.setState({ isCompact: true });
    }
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
    scrollbar && scrollbar.removeListener((status) => this.handleScroll);
    scrollbar && scrollbar.destroy();
  }

  handleScroll = (status) => {
    if (document.querySelector(".carousel__item") !== null) {
      const position = Math.round(
        scrollbar.scrollLeft /
          (document.querySelector(".carousel__item").clientWidth + 64)
      );
      this.setState({ activePage: position });
    }
  };

  handleSectionChange = (id) => {
    this.setState({ activePage: id });
    scrollbar.scrollTo(
      (document.querySelector(".carousel__item").clientWidth + 64) * id,
      0,
      600
    );
  };

  handlePageLeft = () => {
    if (this.state.activePage > 0) {
      this.setState({ activePage: this.state.activePage - 1 });
      scrollbar.scrollTo(
        (document.querySelector(".carousel__item").clientWidth + 64) *
          (this.state.activePage - 1),
        0,
        600
      );
    }
  };

  handlePageRight = () => {
    if (
      this.state.activePage <
      document.querySelectorAll(".carousel__item").length - 1
    ) {
      this.setState({ activePage: this.state.activePage + 1 });
      scrollbar.scrollTo(
        (document.querySelector(".carousel__item").clientWidth + 64) *
          (this.state.activePage + 1),
        0,
        600
      );
    }
  };

  render() {
    let { isCompact } = this.state;

    if (isCompact) {
      return (
        <section className="head">
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="medium">0xBlock</p>
                <b className="medium">Whitepaper</b>
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <OurVision />
                <MarketAnalyst />
                <OurSolution />
                <PlatformArchitecture />
                <TheTokenLaunch />
              </div>
            </div>
            <div className="whitepaper-download">
              <a
                className="btn btn-primary"
                href="./files/Whitepaper.pdf"
                target="_blank"
              >
                Download Whitepaper{" "}
                <img src="/images/whitepaper-download-icon.svg" />
              </a>
            </div>
          </div>
        </section>
      );
    } else {
      return (
        <>
          <section className="presentation">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <nav className="presentation-menu">
                    <p className="large text-neutral-60">0xBlock</p>
                    <p className="large">Whitepaper</p>
                    <div className="presentation-nav">
                      <button
                        className={this.state.activePage < 2 ? "active" : ""}
                        onClick={() => this.handleSectionChange(0)}
                      >
                        Our Vision
                      </button>
                      <button
                        className={this.state.activePage == 2 ? "active" : ""}
                        onClick={() => this.handleSectionChange(2)}
                      >
                        Market Analysis
                      </button>
                      <button
                        className={
                          this.state.activePage >= 3 &&
                          this.state.activePage < 7
                            ? "active"
                            : ""
                        }
                        onClick={() => this.handleSectionChange(3)}
                      >
                        Our Solution
                      </button>
                      <button
                        className={
                          this.state.activePage >= 7 &&
                          this.state.activePage < 13
                            ? "active"
                            : ""
                        }
                        onClick={() => this.handleSectionChange(7)}
                      >
                        Platform Architecture
                      </button>
                      <button
                        className={
                          this.state.activePage >= 13 &&
                          this.state.activePage < 15
                            ? "active"
                            : ""
                        }
                        onClick={() => this.handleSectionChange(13)}
                      >
                        The 0XB Token
                      </button>
                      <button
                        className={
                          this.state.activePage >= 15 &&
                          this.state.activePage < 19
                            ? "active"
                            : ""
                        }
                        onClick={() => this.handleSectionChange(15)}
                      >
                        Contract Tiers &amp; Rewards
                      </button>
                      <button
                        className={this.state.activePage >= 20 ? "active" : ""}
                        onClick={() => this.handleSectionChange(20)}
                      >
                        Disclaimer
                      </button>
                    </div>
                    <div className="whitepaper-download">
                      <a
                        className="btn btn-primary"
                        href="./files/Whitepaper.pdf"
                        target="_blank"
                      >
                        Download Whitepaper{" "}
                        <img src="/images/whitepaper-download-icon.svg" />
                      </a>
                    </div>
                  </nav>
                </div>
                <div className="col-lg-8">
                  <div className="carousel">
                    <div className="carousel__inner">
                      <div className="carousel__slider">
                        <div className="carousel__item">
                          <Page01 />
                        </div>
                        <div className="carousel__item">
                          <Page02 />
                        </div>
                        <div className="carousel__item">
                          <Page03 />
                        </div>
                        <div className="carousel__item">
                          <Page04 />
                        </div>
                        <div className="carousel__item">
                          <Page05 />
                        </div>
                        <div className="carousel__item">
                          <Page06 />
                        </div>
                        <div className="carousel__item">
                          <Page07 />
                        </div>
                        <div className="carousel__item">
                          <Page08 />
                        </div>
                        <div className="carousel__item">
                          <Page09 />
                        </div>
                        <div className="carousel__item">
                          <Page10 />
                        </div>
                        <div className="carousel__item">
                          <Page11 />
                        </div>
                        <div className="carousel__item">
                          <Page12 />
                        </div>
                        <div className="carousel__item">
                          <Page13 />
                        </div>
                        <div className="carousel__item">
                          <Page14 />
                        </div>
                        <div className="carousel__item">
                          <Page15 />
                        </div>
                        <div className="carousel__item">
                          <Page16 />
                        </div>
                        <div className="carousel__item">
                          <Page17 />
                        </div>
                        <div className="carousel__item">
                          <Page18 />
                        </div>
                        <div className="carousel__item">
                          <Page19 />
                        </div>
                        <div className="carousel__item">
                          <Page20 />
                        </div>
                        <div className="carousel__item">
                          <Page21 />
                        </div>
                      </div>
                    </div>
                  </div>
                  <nav className="carousel-nav">
                    <button onClick={() => this.handlePageLeft()}></button>
                    <button onClick={() => this.handlePageRight()}></button>
                  </nav>
                </div>
              </div>
            </div>
          </section>
        </>
      );
    }
  }
}

export default Whitepaper;
