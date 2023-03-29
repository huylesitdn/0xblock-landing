import React from "react"

const tooltipTitle = ["50% Rewards Pool", "20% Treasury Pool", "20% Liquidity Pool", "10% Development Pool"]
const colorMatrix = ["0 0 0 0 0.04 0 0 0 0 0.31 0 0 0 0 0.82 0 0 0 .88 0", "0 0 0 0 1 0 0 0 0 0.47 0 0 0 0 0.31 0 0 0 .88 0", "0 0 0 0 0.380392 0 0 0 0 0.815686 0 0 0 0 0.666667 0 0 0 0.88 0", "0 0 0 0 0.75 0 0 0 0 0.2 0 0 0 0 1 0 0 0 .88 0"]
const tooltipPositionX = ["30%", "75%", "90%", "70%"]
const tooltipPositionY = ["50%", "10%", "50%", "80%"]

class Chart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tooltip: 100
        }
    }

    setIsShown = (index) => {
        this.setState({tooltip: index})
    }

    setIsHidden = () => {
        this.setState({tooltip: 100})
    }

    render() {
        let {
            tooltip
        } = this.state

        return (
            <div className="chart">
                <div className="row">
                    <div className="col-lg-6 slide-section">
                        <div className="chart__graphic">
                            <div className={`tooltip ${tooltip !== 100 ? 'visible' : null}`} style={{top: tooltipPositionY[tooltip], left: tooltipPositionX[tooltip]}}>
                                {tooltipTitle[tooltip]}
                            </div>
                            <svg className="slide-rotate" width='435' height='434' viewBox='0 0 435 434' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <g
                                    onMouseEnter={() => this.setIsShown(0)}
                                    onMouseLeave={() => this.setIsHidden()} 
                                    filter={tooltip == 0 ? 'url(#filter0_d_319_101)' : null}>
                                    <path d="M217.758 0C189.261 -3.39822e-07 161.043 5.61287 134.716 16.5181C108.388 27.4234 84.466 43.4075 64.3156 63.5578C44.1653 83.7081 28.1812 107.63 17.276 133.958C6.37068 160.285 0.757812 188.503 0.757813 217C0.757813 245.497 6.37069 273.715 17.276 300.042C28.1812 326.37 44.1653 350.292 64.3157 370.442C84.466 390.592 108.388 406.577 134.716 417.482C161.043 428.387 189.261 434 217.758 434L217.758 307.962C205.813 307.962 193.984 305.609 182.948 301.038C171.912 296.466 161.885 289.766 153.438 281.32C144.992 272.873 138.292 262.845 133.72 251.809C129.149 240.774 126.796 228.945 126.796 217C126.796 205.055 129.149 193.226 133.72 182.191C138.292 171.155 144.992 161.127 153.438 152.68C161.885 144.234 171.912 137.534 182.948 132.962C193.984 128.391 205.813 126.038 217.758 126.038V0Z" fill="#1350D1" />
                                </g>
                                <g
                                    onMouseEnter={() => this.setIsShown(1)}
                                    onMouseLeave={() => this.setIsHidden()} 
                                    filter={tooltip == 1 ? 'url(#filter0_d_319_101)' : null}>
                                    <path d="M407.528 139.9C392.175 102.112 365.89 69.7685 332.041 47.0122C298.192 24.256 258.32 12.1233 217.533 12.1686L217.659 125.998C235.78 125.978 253.495 131.368 268.533 141.478C283.571 151.588 295.249 165.958 302.07 182.746L407.528 139.9Z" fill="#FF794F" />
                                </g>
                                <g
                                    onMouseEnter={() => this.setIsShown(2)}
                                    onMouseLeave={() => this.setIsHidden()} 
                                    filter={tooltip == 2 ? 'url(#filter0_d_319_101)' : null}>
                                    <path d='M351.875 355.32C379.438 328.594 398.388 294.244 406.294 256.675C414.2 219.105 410.701 180.031 396.247 144.464L301.976 182.775C308.796 199.557 310.447 217.993 306.717 235.72C302.986 253.446 294.045 269.654 281.04 282.264L351.875 355.32Z' fill='#61D0AA'></path>
                                </g>
                                <g
                                    onMouseEnter={() => this.setIsShown(3)}
                                    onMouseLeave={() => this.setIsHidden()} 
                                    filter={tooltip == 3 ? 'url(#filter0_d_319_101)' : null}>
                                    <path d="M217.755 397.495C264.626 397.495 309.66 379.262 343.328 346.652L281.143 282.447C264.148 298.908 241.415 308.112 217.755 308.112L217.755 397.495Z" fill="#BE34FF" />
                                </g>
                                <g clipPath="url(#clip0_319_101)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M216.786 282.075C251.717 282.075 280.034 253.474 280.034 218.193C280.034 182.912 251.717 154.312 216.786 154.312C181.854 154.312 153.537 182.912 153.537 218.193C153.537 253.474 181.854 282.075 216.786 282.075ZM205.511 182.642L197.772 190.458L216.648 209.523L243.264 182.642H227.707L216.648 193.811L205.589 182.642H205.511ZM225.508 218.471L244.384 199.406L252.162 207.262L241.064 218.471L252.535 230.057V245.69L252.496 245.73L225.508 218.471ZM181.036 229.859V229.779L192.233 218.471L181.036 207.162V191.451L207.789 218.471L188.775 237.675L181.036 229.859ZM216.648 227.419L235.662 246.623L228.061 254.3H227.707L216.648 243.13L205.589 254.3H190.033L216.648 227.419Z" fill="#0E51FF" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_319_101" x="-20" y="-20" width="475" height="475" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values={colorMatrix[tooltip]} result="hardAlpha" />
                                        <feOffset dx="2.53801" dy="2.53801" />
                                        <feGaussianBlur stdDeviation="7.19103" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values={colorMatrix[tooltip]} />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_319_101" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_319_101" result="shape" />
                                    </filter>
                                    <clipPath id="clip0_319_101">
                                        <rect width="127.789" height="127.789" fill="white" transform="translate(153.039 154.312)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-0 col-md-6 offset-md-3 col-sm-8 offset-sm-2 ml-sm-3 mt-5 mt-lg-0 slide-section">
                        <div className="align-cols slide-from-bottom">
                            <div
                                onMouseEnter={() => this.setIsShown(0)}
                                onMouseLeave={() => this.setIsHidden()} className="chart__information">
                                <span id="chart-blue" className={`chart__color ${tooltip == 0 ? ' active' : null}`}></span>
                                <p className="large">50% Rewards Wallet</p>
                            </div>
                            <div
                                onMouseEnter={() => this.setIsShown(1)}
                                onMouseLeave={() => this.setIsHidden()}  className="chart__information">
                                <span id="chart-orange" className={`chart__color ${tooltip == 1 ? ' active' : null}`}></span>
                                <p className="large">20% Treasury Wallet</p>
                            </div>
                            <div
                                onMouseEnter={() => this.setIsShown(2)}
                                onMouseLeave={() => this.setIsHidden()}  className="chart__information">
                                <span id="chart-teal" className={`chart__color ${tooltip == 2 ? ' active' : null}`}></span>
                                <p className="large">20% Liquidity Wallet</p>
                            </div>
                            <div
                                onMouseEnter={() => this.setIsShown(3)}
                                onMouseLeave={() => this.setIsHidden()}  className="chart__information">
                                <span id="chart-violet" className={`chart__color ${tooltip == 3 ? ' active' : null}`}></span>
                                <p className="large">10% Development Wallet</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Chart