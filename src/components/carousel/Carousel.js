import React from "react";
import { gsap } from "gsap";
import Scrollbar from "smooth-scrollbar";

let scrollbar;

const carousels = [
  {
    img: "/images/we/1.png",
    imgSet:
      "/images/we/1.png",
    name: "Professor",
    subName: "Co-Founder, Head of Design and Development",
  },
  {
    img: "/images/we/2.png",
    imgSet:
      "/images/we/2.png",
    name: "Andres",
    subName: "Co-Founder, Head of Operations",
  },
  {
    img: "/images/we/14.png",
    imgSet:
      "/images/we/14.png",
    name: "Inflame",
    subName: "Chief Marketing Officer",
  },
  {
    img: "/images/we/3.png",
    imgSet:
      "/images/we/3.png",
    name: "Maverick",
    subName: "Project Manager",
  },
  {
    img: "/images/we/4.png",
    imgSet:
      "/images/we/4.png",
    name: "Eureka",
    subName: "Blockchain/Solidity Developer",
  },
  {
    img: "/images/we/5.png",
    imgSet:
      "/images/we/5.png",
    name: "Eagle Eye",
    subName: "Blockchain/Solidity Developer",
  },
  {
    img: "/images/we/6.png",
    imgSet:
      "/images/we/6.png",
    name: "Dr. Devvo",
    subName: "React Developer",
  },
  {
    img: "/images/we/7.png",
    imgSet:
      "/images/we/7.png",
    name: "Sharky",
    subName: "React/Web3 Expert",
  },
  {
    img: "/images/we/8.png",
    imgSet:
      "/images/we/8.png",
    name: "Visario",
    subName: "UI/UX Expert",
  },
  {
    img: "/images/we/9.png",
    imgSet:
      "/images/we/9.png",
    name: "Stitch",
    subName: "3D Designer",
  },
  {
    img: "/images/we/10.png",
    imgSet:
      "/images/we/10.png",
    name: "Inspector",
    subName: "QA",
  },
  {
    img: "/images/we/11.png",
    imgSet:
      "/images/we/11.png",
    name: "Sergeant Biz",
    subName: "Business Analyst",
  },
  {
    img: "/images/we/12.png",
    imgSet:
      "/images/we/12.png",
    name: "Cruncher",
    subName: "Economist",
  },
  {
    img: "/images/we/13.png",
    imgSet:
      "/images/we/13.png",
    name: "Scribbles",
    subName: "Copywriter",
  },
];

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSection: 0,
      activePage: 0,
    };
  }

  handleResize = () => {
    scrollbar = Scrollbar.init(
      document.querySelector(".carousel-homepage__inner"),
      {
        renderByPixels: false,
        damping: 0.075,
        disableScroll: { direction: "y" },
        alwaysShowTracks: true,
      }
    );
    if (this.props.isCompact) {
      gsap.to(".scrollbar-track", {
        scaleX:
          document.querySelector(".carousel-homepage__inner").clientWidth /
          document.querySelector(".scrollbar-track").clientWidth,
        xPercent: 0,
        y: -6,
        duration: 0.01,
      });
    } else {
      gsap.to(".scrollbar-track", {
        scaleX:
          (document.querySelector(".scroll-content").clientWidth - 5 * 16) /
          document.querySelector(".scrollbar-track").clientWidth,
        xPercent: 0,
        y: -6,
        duration: 0.01,
      });
    }
  };

  componentDidMount() {
    scrollbar = Scrollbar.init(
      document.querySelector(".carousel-homepage__inner"),
      {
        renderByPixels: false,
        damping: 0.075,
        disableScroll: { direction: "y" },
        alwaysShowTracks: true,
      }
    );
    if (this.props.isCompact) {
      gsap.to(".scrollbar-track", {
        scaleX:
          document.querySelector(".carousel-homepage__inner").clientWidth /
          document.querySelector(".scrollbar-track").clientWidth,
        xPercent: 0,
        y: -6,
        duration: 0.01,
      });
    } else {
      gsap.to(".scrollbar-track", {
        scaleX:
          (document.querySelector(".scroll-content").clientWidth - 5 * 16) /
          document.querySelector(".scrollbar-track").clientWidth,
        xPercent: 0,
        y: -6,
        duration: 0.01,
      });
    }
    scrollbar.addListener((status) => this.handleScroll(status));
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
    scrollbar.removeListener((status) => this.handleScroll);
    scrollbar.destroy();
  }

  handleScroll = (status) => {
    if (document.querySelector(".carousel-homepage__item") !== null) {
      const position = Math.round(
        scrollbar.scrollLeft /
          (document.querySelector(".carousel-homepage__item").clientWidth + 64)
      );
      this.setState({ activePage: position });
    }
  };

  handlePageLeft = () => {
    if (this.state.activePage > 0) {
      this.setState({ activePage: this.state.activePage - 1 });
      scrollbar.scrollTo(
        (document.querySelector(".carousel-homepage__item").clientWidth + 64) *
          (this.state.activePage - 1),
        0,
        600
      );
    }
  };

  handlePageRight = () => {
    if (
      this.state.activePage <
      document.querySelectorAll(".carousel-homepage__item").length - 1
    ) {
      this.setState({ activePage: this.state.activePage + 1 });
      scrollbar.scrollTo(
        (document.querySelector(".carousel-homepage__item").clientWidth + 64) *
          (this.state.activePage + 1),
        0,
        600
      );
    }
  };

  render() {
    return (
      <div className="carousel-homepage">
        <div className="carousel-homepage__content">
          <p className="regular text-primary mb-2">We're 0xBlock</p>
          <h4 className="heading">
            The Minds behind <br />
            0xBlock
          </h4>
          <p className="text-neutral-60 regular we-re-regular">
            Our team was founded by two highly qualified software engineers who
            have over two years of involvement at the head of the blockchain and
            DeFi sectors.
          </p>
        </div>
        <div className="carousel-homepage__carousel">
          <div className="carousel-homepage__inner">
            <div className="carousel-homepage__slider">
              {carousels.map((item, k) => (
                <div key={k} className="carousel-homepage__item">
                  <img src={item.img} srcSet={item.imgSet} alt="" />
                  <span>{item.name}</span>
                  <p>({item.subName})</p>
                </div>
              ))}
            </div>
          </div>
          <nav className="carousel-homepage-nav">
            <button onClick={() => this.handlePageLeft()}></button>
            <button onClick={() => this.handlePageRight()}></button>
          </nav>
        </div>
      </div>
    );
  }
}

export default Carousel;
