import React from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const fills = ["#6FDCFF", "#BE34FF", "#FF794F", "#00E878", "#0052FF"]
const headings = [
    "Founder’s Wallet (0xB) ",
    "Founder’s Wallet (0xB) ",
    "Development/Marketing Wallet",
    "10% in Liquidity Wallet (0xB)",
    "70% in Rewards Wallet (0xB)"
]
const content = [
    "This wallet will be completely dedicated to the co-founder.",
    "This wallet will be completely dedicated to the co-founder.",
    "Fund 0xBlock protocol development costs, plus fund the development of additional products we wish to establish.",
    "Increase circulation supply if needed or be burned if desired (we will always make decisions based on platform profitability and growth, and member benefit).",
    "Pay out rewards to our 0xRC operators."
]

class Graph extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 100,
            currentHover: 100,
            contentOpened: false
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.isCompact !== prevProps.isCompact) {
            gsap.registerPlugin(ScrollTrigger)
            let section = document.querySelector('.graph')
            if (section.querySelectorAll(".slide-from-bottom").length) {
                gsap.to(section.querySelectorAll(".slide-from-bottom"), {
                    scrollTrigger: section,
                    ease: "power3.out",
                    duration: .3,
                    opacity: 1,
                    y: 0,
                    stagger: 0.1,
                    delay: .5
                })
            }
            if (section.querySelectorAll(".slide-from-right").length) {
                gsap.to(section.querySelectorAll(".slide-from-right"), {
                    scrollTrigger: section,
                    ease: "power3.out",
                    duration: .3,
                    opacity: 1,
                    x: 0,
                    stagger: 0.1,
                    delay: .5
                })
            }
            if (section.querySelectorAll(".slide-from-left").length) {
                gsap.to(section.querySelectorAll(".slide-from-left"), {
                    scrollTrigger: section,
                    ease: "power3.out",
                    duration: .3,
                    opacity: 1,
                    x: 0,
                    stagger: 0.1,
                    delay: .5
                })
            }
            if (section.querySelectorAll(".slide-rotate").length) {
                gsap.to(section.querySelectorAll(".slide-rotate"), {
                    scrollTrigger: section,
                    ease: "power3.out",
                    duration: .3,
                    opacity: 1,
                    rotate: 0,
                    stagger: 0.1,
                    delay: .5
                })
            }
        }
    }

    setIsShownHover = (index) => {
        this.setState({ currentHover: index })
    }

    setIsShown = (index) => {
        this.setState({ current: index })
    }

    setIsHidden = () => {
        if (!this.state.contentOpened) {
            this.setState({ currentHover: 100 })
        }
    }

    openContent = (index) => {
        this.setIsShown(index)
        gsap.to('.graph__content + .row .slide-rotate', {
            opacity: 0,
            rotate: 150,
            ease: "power3.out",
            duration: .3,
            onComplete: () => { this.setState({ contentOpened: true }) },
            delay: 0
        })
        gsap.to('.graph__content + .row .slide-from-right', {
            x: 640,
            opacity: 0,
            ease: "power3.out",
            duration: .2,
            delay: 0
        })
        gsap.fromTo('.graph__content .slide-from-bottom', {
            opacity: 0,
            y: 64
        }, {
            ease: "power3.out",
            duration: .2,
            opacity: 1,
            y: 0,
            delay: .2
        })
        gsap.fromTo('.graph__content .slide-from-left', {
            opacity: 0,
            x: -640
        }, {
            ease: "power3.out",
            duration: .2,
            opacity: 1,
            x: 0,
            delay: .2
        })
        gsap.fromTo('.graph__content .slide-from-right', {
            opacity: 0,
            x: 640
        }, {
            ease: "power3.out",
            duration: .2,
            opacity: 1,
            x: 0,
            delay: .2
        })
    }

    closeContent = () => {
        gsap.fromTo('.graph__content .slide-from-bottom', {
            opacity: 1,
            y: 0
        }, {
            ease: "power3.out",
            duration: .2,
            opacity: 0,
            y: -64,
            delay: 0
        })
        gsap.fromTo('.graph__content .slide-from-left', {
            opacity: 1,
            x: 0
        }, {
            ease: "power3.out",
            duration: .2,
            opacity: 0,
            x: -100,
            delay: 0
        })
        gsap.fromTo('.graph__content .slide-from-right', {
            opacity: 1,
            x: 0
        }, {
            ease: "power3.out",
            duration: .2,
            opacity: 0,
            x: 100,
            onComplete: () => {
                this.setState({ contentOpened: false })
                this.setState({ current: 100 })
            },
            delay: 0
        })
        gsap.fromTo('.graph__content + .row .slide-rotate', {
            opacity: 0,
            rotate: -150
        }, {
            opacity: 1,
            rotate: 0,
            ease: "power3.out",
            duration: .2,
            delay: .2
        })
        gsap.to('.graph__content + .row .slide-from-right', {
            x: 0,
            opacity: 1,
            ease: "power3.out",
            duration: .2,
            delay: .2
        })
    }

    render() {
        let {
            current,
            contentOpened,
            currentHover
        } = this.state

        let idName = (() => {
            switch (current) {
                case 0: return 'graph-lightblue'
                case 1: return 'graph-violet'
                case 2: return 'graph-orange'
                case 3: return 'graph-green'
                case 4: return 'graph-blue'
                default: return 'graph-blue'
            }
        })()

        if (this.props.isCompact) {
            return (

                <div className="graph">
                    <div className="row mt-5">
                        <div className="col">
                            <div className="align-cols">
                                <div className="graph__information slide-from-bottom">
                                    <span id="graph-lightblue" className="graph__color"></span>
                                    <p>5% in Founder’s Wallet (0xB) (1-Year Vesting)</p>
                                    <small className="text-neutral-60">{content[0]}</small>
                                </div>
                                <div className="graph__information slide-from-bottom">
                                    <span id="graph-violet" className="graph__color"></span>
                                    <p>5% in Founder’s Wallet (0xB) (1-Year Vesting)</p>
                                    <small className="text-neutral-60">{content[1]}</small>
                                </div>
                                <div className="graph__information slide-from-bottom">
                                    <span id="graph-orange" className="graph__color"></span>
                                    <p>10% in Development/Marketing Wallet (0xB)</p>
                                    <small className="text-neutral-60">{content[2]}</small>
                                </div>
                                <div className="graph__information slide-from-bottom">
                                    <span id="graph-green" className="graph__color"></span>
                                    <p>10% in Liquidity Wallet (0xB)</p>
                                    <small className="text-neutral-60">{content[3]}</small>
                                </div>
                                <div className="graph__information slide-from-bottom">
                                    <span id="graph-blue" className="graph__color"></span>
                                    <p>70% in Rewards Wallet (0xB)</p>
                                    <small className="text-neutral-60">{content[4]}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {

            return (
                <div className="graph">
                    <div className={`graph__content ${contentOpened ? " active" : ""}`}>
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 d-flex">
                                <button onClick={() => this.closeContent()} className="graph__back-button slide-from-left"></button>
                                <div>
                                    <span id={idName} className="graph__color slide-from-bottom"></span>
                                    <span className="graph__title slide-from-bottom">{headings[current]}</span>
                                    <p className="slide-from-right">{content[current]}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`row graph__chart ${contentOpened ? "disable" : ""}`}>
                        <div className="col-lg-5">
                            <div className="align-cols">
                                <div className="graph__graphic">
                                    <svg className="slide-rotate" width="556" height="544" viewBox="0 0 556 544" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle className={currentHover !== 100 ? "active" : ""} cx="270" cy="274" r="251.889" stroke={currentHover == 100 ? "#F4F4F4" : fills[currentHover]} strokeWidth="5.07857" />
                                        <g
                                            onMouseEnter={() => this.setIsShownHover(4)}
                                            onMouseLeave={() => this.setIsHidden()}
                                            onClick={() => this.openContent(4)}
                                            filter="url(#filter0_d_153_7276)">
                                            <circle cx="270" cy="274" r="222.857" fill={currentHover == 4 ? fills[4] : "#AAC5FF"} />
                                        </g>
                                        <g
                                            onMouseEnter={() => this.setIsShownHover(1)}
                                            onMouseLeave={() => this.setIsHidden()}
                                            onClick={() => this.openContent(1)}
                                            filter="url(#filter1_d_153_7276)">
                                            <path d="M314.653 55.6619C360.998 65.1399 403.124 89.1187 434.936 124.128L270 274L314.653 55.6619Z" fill={currentHover == 1 ? fills[1] : "#DAC5FF"} />
                                        </g>
                                        <g
                                            onMouseEnter={() => this.setIsShownHover(3)}
                                            onMouseLeave={() => this.setIsHidden()}
                                            onClick={() => this.openContent(3)}
                                            filter="url(#filter2_d_153_7276)">
                                            <path d="M508.991 376.387C530.843 325.381 535.803 268.721 523.146 214.694L270 274L508.991 376.387Z" fill={currentHover == 3 ? fills[3] : "#B4F5D6"} />
                                        </g>
                                        <g
                                            onMouseEnter={() => this.setIsShownHover(2)}
                                            onMouseLeave={() => this.setIsHidden()}
                                            onClick={() => this.openContent(2)}
                                            filter="url(#filter3_dd_153_7276)">
                                            <path d="M523.375 215.681C510.928 161.605 481.508 112.93 439.415 76.7726L270 274L523.375 215.681Z" fill={currentHover == 2 ? fills[2] : "#FBD6CA"} />
                                        </g>
                                        <g
                                            onMouseEnter={() => this.setIsShownHover(0)}
                                            onMouseLeave={() => this.setIsHidden()}
                                            onClick={() => this.openContent(0)}
                                            filter="url(#filter4_dd_153_7276)">
                                            <path d="M359.894 30.0348C330.657 19.2617 299.721 13.8318 268.563 14.004L270 274L359.894 30.0348Z" fill={currentHover == 0 ? fills[0] : "#CAF2FF"} />
                                        </g>
                                        <defs>
                                            <filter id="filter0_d_153_7276" x="0.143066" y="4.14258" width="539.714" height="539.714" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset />
                                                <feGaussianBlur stdDeviation="23.5" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.9125 0 0 0 0 0.9125 0 0 0 0 0.9125 0 0 0 1 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_153_7276" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_153_7276" result="shape" />
                                            </filter>
                                            <filter id="filter1_d_153_7276" x="223" y="8.66211" width="258.936" height="312.338" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset />
                                                <feGaussianBlur stdDeviation="23.5" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.9125 0 0 0 0 0.9125 0 0 0 0 0.9125 0 0 0 1 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_153_7276" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_153_7276" result="shape" />
                                            </filter>
                                            <filter id="filter2_d_153_7276" x="251.379" y="192.687" width="304.014" height="205.707" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dx="3.38571" />
                                                <feGaussianBlur stdDeviation="11.0036" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.913725 0 0 0 0 0.913725 0 0 0 0 0.913725 0 0 0 1 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_153_7276" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_153_7276" result="shape" />
                                            </filter>
                                            <filter id="filter3_dd_153_7276" x="253.071" y="60.7725" width="289.689" height="229.228" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dx="-3.38571" />
                                                <feGaussianBlur stdDeviation="6.77143" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.411765 0 0 0 0 0.411765 0 0 0 0 0.411765 0 0 0 0.5 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_153_7276" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dx="3.38571" />
                                                <feGaussianBlur stdDeviation="8" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.411765 0 0 0 0 0.411765 0 0 0 0 0.411765 0 0 0 0.4 0" />
                                                <feBlend mode="normal" in2="effect1_dropShadow_153_7276" result="effect2_dropShadow_153_7276" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_153_7276" result="shape" />
                                            </filter>
                                            <filter id="filter4_dd_153_7276" x="251.634" y="0.457143" width="125.189" height="287.086" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dx="-3.38571" />
                                                <feGaussianBlur stdDeviation="6.77143" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.411765 0 0 0 0 0.411765 0 0 0 0 0.411765 0 0 0 0.31 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_153_7276" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dx="3.38571" />
                                                <feGaussianBlur stdDeviation="6.77143" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.4125 0 0 0 0 0.4125 0 0 0 0 0.4125 0 0 0 0.4 0" />
                                                <feBlend mode="normal" in2="effect1_dropShadow_153_7276" result="effect2_dropShadow_153_7276" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_153_7276" result="shape" />
                                            </filter>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="align-cols">
                                <div
                                    onMouseEnter={() => this.setIsShownHover(0)}
                                    onMouseLeave={() => this.setIsHidden()}
                                    onClick={() => this.openContent(0)}
                                    className={`graph__information slide-from-right ${currentHover == 0 ? " active" : ""}`}>
                                    <span id="graph-lightblue" className="graph__color"></span>
                                    <p>5% in Founder’s Wallet (0xB) (1-Year Vesting)</p>
                                </div>
                                <div
                                    onMouseEnter={() => this.setIsShownHover(1)}
                                    onMouseLeave={() => this.setIsHidden()}
                                    onClick={() => this.openContent(1)}
                                    className={`graph__information slide-from-right ${currentHover == 1 ? " active" : ""}`}>
                                    <span id="graph-violet" className="graph__color"></span>
                                    <p>5% in Founder’s Wallet (0xB) (1-Year Vesting)</p>
                                </div>
                                <div
                                    onMouseEnter={() => this.setIsShownHover(2)}
                                    onMouseLeave={() => this.setIsHidden()}
                                    onClick={() => this.openContent(2)}
                                    className={`graph__information slide-from-right ${currentHover == 2 ? " active" : ""}`}>
                                    <span id="graph-orange" className="graph__color"></span>
                                    <p>10% in Development/Marketing Wallet (0xB)</p>
                                </div>
                                <div
                                    onMouseEnter={() => this.setIsShownHover(3)}
                                    onMouseLeave={() => this.setIsHidden()}
                                    onClick={() => this.openContent(3)}
                                    className={`graph__information slide-from-right ${currentHover == 3 ? " active" : ""}`}>
                                    <span id="graph-green" className="graph__color"></span>
                                    <p>10% in Liquidity Wallet (0xB)</p>
                                </div>
                                <div
                                    onMouseEnter={() => this.setIsShownHover(4)}
                                    onMouseLeave={() => this.setIsHidden()}
                                    onClick={() => this.openContent(4)}
                                    className={`graph__information slide-from-right ${currentHover == 4 ? " active" : ""}`}>
                                    <span id="graph-blue" className="graph__color"></span>
                                    <p>70% in Rewards Wallet (0xB)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Graph