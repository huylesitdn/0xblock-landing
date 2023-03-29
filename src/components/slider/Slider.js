import React from "react";
import gsap from "gsap/gsap-core";

const stepTitle = ["Step 1", "Step 2", "Step 3"];
const stepContent = [
  "Purchase 0xB tokens to mint an 0xBlock Reward Contract (0xRC) on the 0xBlock dApp",
  "Choose from a Square, Cube or Tesseract 0xRC, each providing a greater level of returns",
  "Once your 0xRC is minted, you begin to receive 0xB tokens in rewards on a daily basis",
];

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0,
      stepTwoHoverReady: false,
      userControls: false,
    };
  }

  changePrevStep = () => {
    const currentStep = this.state.currentStep;
    if (currentStep > 0) {
      const nextStep = this.state.currentStep - 1;
      this.setState({ currentStep: nextStep });
      gsap.to(".slider span, .slider p", {
        opacity: 0,
        y: -20,
        ease: "power3.out",
        duration: 0.2,
      });
      gsap.set(".slider span, .slider p", {
        opacity: 0,
        y: 20,
        delay: 0.3,
      });
      gsap.to(".slider span, .slider p", {
        opacity: 1,
        y: 0,
        ease: "power3.out",
        duration: 0.2,
        delay: 0.3,
      });
    }
    if (currentStep - 1 == 1) {
      gsap.to("#step-one, #step-two-hover, #step-three", {
        opacity: 0,
        duration: 0.3,
      });
      gsap.set("#step-two", {
        opacity: 1,
      });
      gsap.to("#step-two", {
        duration: 4,
        onComplete: () => {
          this.setState({ stepTwoHoverReady: true });
        },
      });
      document.getElementById("step-two").play();
      document.addEventListener("mouseover", this.hoverStepTwo);
    }
    if (currentStep - 1 == 0) {
      gsap.to("#step-two, #step-two-hover, #step-three", {
        opacity: 0,
        duration: 0.3,
      });
      gsap.set("#step-one", {
        opacity: 1,
      });
      document.getElementById("step-one").play();
      document.removeEventListener("mouseover", this.hoverStepTwo);
    }
  };

  changeNextStep = () => {
    const currentStep = this.state.currentStep;
    this.setState({ stepTwoHoverReady: false });
    if (currentStep < 2) {
      const nextStep = this.state.currentStep + 1;
      this.setState({ currentStep: nextStep });
      gsap.to(".slider span, .slider p", {
        opacity: 0,
        y: -20,
        ease: "power3.out",
        duration: 0.2,
      });
      gsap.set(".slider span, .slider p", {
        opacity: 0,
        y: 20,
        delay: 0.3,
      });
      gsap.to(".slider span, .slider p", {
        opacity: 1,
        y: 0,
        ease: "power3.out",
        duration: 0.2,
        delay: 0.3,
      });
    }
    if (currentStep + 1 == 1) {
      gsap.to("#step-one, #step-two-hover, #step-three", {
        opacity: 0,
        duration: 0.3,
      });
      gsap.set("#step-two", {
        opacity: 1,
      });
      gsap.to("#step-two", {
        duration: 4,
        onComplete: () => {
          this.setState({ stepTwoHoverReady: true });
        },
      });
      document.getElementById("step-two").play();
      document.addEventListener("mouseover", this.hoverStepTwo);
    }
    if (currentStep + 1 == 2) {
      gsap.to("#step-one, #step-two, #step-two-hover", {
        opacity: 0,
        duration: 0.3,
      });
      gsap.set("#step-three", {
        opacity: 1,
      });
      document.getElementById("step-three").play();
      document.removeEventListener("mouseover", this.hoverStepTwo);
    }
  };

  componentDidMount() {}

  componentWillUnmount() {
    document.removeEventListener("mouseover", this.hoverStepTwo);
    window.removeEventListener("resize", this.handleResize);
  }

  hoverStepTwo = () => {
    if (this.state.stepTwoHoverReady) {
      gsap.to("#step-one, #step-two, #step-three", {
        opacity: 0,
        duration: 0.3,
      });
      gsap.set("#step-two-hover", {
        opacity: 1,
      });
      document.getElementById("step-two-hover").play();
    }
  };

  render() {
    let { currentStep } = this.state;

    if (this.props.isCompact) {
      return (
        <div className="col how-do">
          <span className="text-primary large mb-3">{stepTitle[0]}</span>
          <p className="mb-3 slider-text">{stepContent[0]}</p>
          <div className="slider mb-5">
            <div className="slider__item"></div>
            <div className="slider__steps">
              <video autoPlay muted loop playsInline>
                <source src={"/images/step-one.mp4"} type="video/mp4" />
              </video>
            </div>
          </div>
          <span className="text-primary large mb-3">{stepTitle[1]}</span>
          <p className="mb-3 slider-text">{stepContent[1]}</p>
          <div className="slider mb-5">
            <div className="slider__item"></div>
            <div className="slider__steps">
              <video autoPlay muted loop playsInline>
                <source src={"/images/step-two.mp4"} type="video/mp4" />
              </video>
            </div>
          </div>
          <span className="text-primary large mb-3">{stepTitle[2]}</span>
          <p className="mb-3 slider-text">{stepContent[2]}</p>
          <div className="slider">
            <div className="slider__item"></div>
            <div className="slider__steps">
              <video autoPlay muted loop playsInline>
                <source src={"/images/step-three.mp4"} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="slider">
          <div className="slider__item">
            <div className="slider__inner">
              <span className="text-primary regular mb-2">
                {stepTitle[currentStep]}
              </span>
              <p className="mb-4 regular slider-regular">
                {stepContent[currentStep]}
              </p>
              <nav>
                <div
                  className={`slider__button left-button ${
                    currentStep == 0 ? " not-active" : null
                  }`}
                  onClick={this.changePrevStep.bind(this)}
                ></div>
                <div
                  className={`slider__button right-button ${
                    currentStep == 2 ? " not-active" : null
                  }`}
                  onClick={this.changeNextStep.bind(this)}
                ></div>
              </nav>
            </div>
          </div>
          <div className="slider__steps">
            <video id="step-one" autoPlay loop muted playsInline>
              <source
                src={
                  "/images/step-one.mp4"
                }
                type="video/mp4"
              />
            </video>
            <video id="step-two" muted playsInline>
              <source
                src={
                  "/images/step-two.mp4"
                }
                type="video/mp4"
              />
            </video>
            <video id="step-two-hover" muted loop playsInline>
              <source
                src={
                  "/images/step-two-hover.mp4"
                }
                type="video/mp4"
              />
            </video>
            <video id="step-three" muted playsInline>
              <source
                src={
                  "/images/step-three.mp4"
                }
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      );
    }
  }
}

export default Slider;
