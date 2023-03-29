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

class ComingSoon extends React.Component {
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
    }
  };

  componentDidMount() {
    const windowWidth = container.getBoundingClientRect().width;
    if (windowWidth > 991) {
      this.setState({ isCompact: false });
    } else {
      this.setState({ isCompact: true });
    }
    window.addEventListener("resize", this.handleResize);

    // gsap.to('.head .slide-from-left', {
    //     ease: "power3.out",
    //     duration: 2,
    //     opacity: 1,
    //     x: 0,
    //     delay: .8
    // })

    // gsap.to('.head .slide-from-right', {
    //     ease: "power3.out",
    //     duration: 2,
    //     opacity: 1,
    //     x: 0,
    //     delay: .8
    // })

    gsap.utils.toArray(".slide-section").forEach((section) => {
      if (section.querySelectorAll(".slide-from-top").length) {
        gsap.to(section.querySelectorAll(".slide-from-top"), {
          scrollTrigger: section,
          ease: "power3.out",
          duration: 1.5,
          opacity: 1,
          y: 0,
          stagger: 0.1,
          delay: 0.8,
        });
      }
      if (section.querySelectorAll(".slide-from-top-short").length) {
        gsap.to(section.querySelectorAll(".slide-from-top-short"), {
          scrollTrigger: section,
          ease: "power3.out",
          duration: 1.5,
          opacity: 1,
          y: 0,
          stagger: 0.1,
          delay: 0.8,
        });
      }
      if (section.querySelectorAll(".slide-from-bottom").length) {
        gsap.to(section.querySelectorAll(".slide-from-bottom"), {
          scrollTrigger: section,
          ease: "power3.out",
          duration: 1.5,
          opacity: 1,
          y: 0,
          stagger: 0.1,
          delay: 0.8,
        });
      }
      if (section.querySelectorAll(".slide-from-bottom-short").length) {
        gsap.to(section.querySelectorAll(".slide-from-bottom-short"), {
          scrollTrigger: section,
          ease: "power3.out",
          duration: 1.5,
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
      if (section.querySelectorAll(".slide-from-right-short").length) {
        gsap.to(section.querySelectorAll(".slide-from-right-short"), {
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
      if (section.querySelectorAll(".slide-from-left-short").length) {
        gsap.to(section.querySelectorAll(".slide-from-left-short"), {
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
    window.history.pushState({}, "", "/contact");
    this.props.titleHandler();
    window.scrollTo({
      top: 0,
    });
  };

  render() {
    let { isCompact } = this.state;

    return (
      <>
        <div className="slide-section">
          <ul className="navigation-list d-lg-none d-md-block text-center">
            <li className="">
              <a href="https://twitter.com/0xblockfi" target="_blank">
                <img
                  src={
                    "/images/coming-soon/social-1.png"
                  }
                  alt=""
                />
              </a>
            </li>
            <li className="">
              <a href="https://medium.com/@0xblockfi" target="_blank">
                <img
                  src={
                    "/images/coming-soon/social-2.png"
                  }
                  alt=""
                />
              </a>
            </li>
            <li className="">
              <a href="https://discord.gg/0xblock" target="_blank">
                <img
                  src={
                    "/images/coming-soon/social-3.png"
                  }
                  alt=""
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="slide-section">
          <img
            className="coming-soon__bg coming-soon__bg__1 slide-from-bottom-short"
            src={
              "/images/coming-soon/bg-1.svg"
            }
            alt=""
          />
          <img
            className="coming-soon__bg coming-soon__bg__2 slide-from-top-short"
            src={
              "/images/coming-soon/bg-2.svg"
            }
            alt=""
          />
        </div>
        <section className="head">
          <div className="coming-soon-content">
            <div className="container-fluid slide-section">
              <div>
                <img
                  className={`icon icon-4 ${
                    isCompact ? "slide-from-left-short" : "slide-from-top-short"
                  }`}
                  src={
                    "/images/coming-soon/icon-4.svg"
                  }
                  alt=""
                />
                <img
                  className={`icon icon-1 ${
                    isCompact
                      ? "slide-from-right-short"
                      : "slide-from-left-short"
                  }`}
                  src={
                    "/images/coming-soon/icon-1.png"
                  }
                  alt=""
                />
                <img
                  className="icon icon-2 slide-from-left-short"
                  src={
                    "/images/coming-soon/icon-2.png"
                  }
                  alt=""
                />
                <img
                  className="icon icon-3 slide-from-right-short"
                  src={
                    "/images/coming-soon/icon-3.png"
                  }
                  alt=""
                />
              </div>
              <img
                className="img-content slide-from-top"
                src={
                  "/images/coming-soon/content.png"
                }
                alt=""
              />
              <h1 className="slide-from-bottom">Coders At Work</h1>
              <h3 className="slide-from-bottom">-Coming Soon-</h3>
              <Link
                className="slide-from-bottom"
                to="/"
                onClick={() => this.handleMenuClose()}
              >
                {"< Back to home"}
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default ComingSoon;
