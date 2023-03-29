import React, { useState, useLayoutEffect } from "react";
import { NavLink as Link } from "react-router-dom";
import { gsap } from "gsap";
import { BsMedium, BsTwitter } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";

// import AuditReportPDF from 'files/0xBlock_Audit_Report.pdf'

const container = document.querySelector("#root");

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCompact: false,
      menu: false,
      showDropdown: false,
      width: 0,
    };
  }

  handleShowDropdown = (value) => {
    this.setState({ showDropdown: value });
  };

  handleMenuToggle = () => {
    let menu = this.state.menu;
    this.setState({ menu: !menu });

    document.body.style.overflow = menu ? "auto" : "hidden";
    document.body.style.position = menu ? "unset" : "relative";
    document.body.style.touchAction = menu ? "auto" : "none";

    !menu
      ? gsap.to(".navigation__list", {
          duration: 0.3,
          ease: "power3.out",
          marginTop: 0,
        })
      : gsap.to(".navigation__list", {
          duration: 0.4,
          ease: "power3.out",
          marginTop: "-300%",
        });
  };

  handleMenuClose = () => {
    this.setState({ menu: false });

    document.body.style.overflow = "auto";

    gsap.to(".navigation__list", {
      duration: 0.2,
      ease: "power3.out",
      marginTop: "-300%",
    });

    window.scrollTo({
      top: 0,
    });
  };

  handleResize = () => {
    const windowWidth = container.getBoundingClientRect().width;
    windowWidth > 991
      ? this.setState({ isCompact: false })
      : this.setState({ isCompact: true });
  };

  componentDidMount() {
    const windowWidth = container.getBoundingClientRect().width;
    windowWidth > 991
      ? this.setState({ isCompact: false })
      : this.setState({ isCompact: true });
    window.addEventListener("resize", this.handleResize);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { fixed } = this.props;
    if (!!fixed && fixed !== prevProps.fixed && location.pathname == "/") {
      gsap.to(".header .fade-in-right", {
        ease: "power3.out",
        duration: 0,
        opacity: 1,
        x: 0,
        delay: 0.5,
      });
      gsap.to(".head .fade-in", {
        ease: "power3.out",
        duration: 2,
        opacity: 1,
        x: 0,
        y: 0,
        delay: 0.8,
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    let { isCompact, menu, showDropdown } = this.state;
    const width = window.innerWidth;

    const { fixed } = this.props;
    const is_home_page = location.pathname == "/";
    const is_coming_soon_page = location.pathname == "/coming-soon";
    const animation_only_home_page = is_home_page && fixed;

    let menuButton = (
      <div
        onClick={this.handleMenuToggle}
        className={menu ? "menu header__menu active" : "menu header__menu"}
      >
        <div className="menu__shape menu__shape-1"></div>
        <div className="menu__shape menu__shape-2"></div>
      </div>
    );

    const handleAuditReport = () => {
      window.open("./files/0xBlock_Audit_Report.pdf", "_blank");
    };

    console.log("menu: ", menu);

    return (
      <nav
        className={`${this.props.fixed ? "header fixed" : "header"} ${
          menu ? "showMenu" : ""
        }`}
      >
        <div className="container">
          <div className="header__inner">
            <Link
              onClick={this.handleMenuClose}
              className="logo header__logo"
              exact="true"
              to="/"
            >
              <div className="logo__icon"></div>
              <span>0xBlock</span>
            </Link>
            {isCompact ? menuButton : ""}

            <div
              className={
                isCompact
                  ? "navigation header__navigation"
                  : "navigation header__navigation navigation-static"
              }
            >
              <ul className="navigation__list">
                {/* <li className="navigation__item">
                  <Link onClick={this.handleMenuClose} exact="true" to="/">Home</Link>
                </li> */}
                {is_coming_soon_page ? (
                  <>
                    <li className="navigation__item d-lg-block d-md-none">
                      <a href="https://twitter.com/0xblockfi" target="_blank">
                        <img src={"/images/coming-soon/social-1.png"} alt="" />
                      </a>
                    </li>
                    <li className="navigation__item d-lg-block d-md-none">
                      <a href="https://medium.com/@0xblockfi" target="_blank">
                        <img src={"/images/coming-soon/social-2.png"} alt="" />
                      </a>
                    </li>
                    <li className="navigation__item d-lg-block d-md-none">
                      <a href="https://discord.gg/0xblock" target="_blank">
                        <img src={"/images/coming-soon/social-3.png"} alt="" />
                      </a>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="navigation__item d-md-block d-lg-none">
                      <Link onClick={this.handleMenuClose} exact="true" to="/">
                        Home
                      </Link>
                    </li>
                    <li
                      className={`navigation__item ${
                        animation_only_home_page ? "fade-in-right" : ""
                      }`}
                    >
                      {width > 768 ? (
                        <>
                          <a className="communityMenu">Community</a>

                          <ul className="communitySubmenu">
                            <li className="submenu-item ">
                              <a
                                href="https://twitter.com/0xblockfi"
                                target="_blank"
                              >
                                <BsTwitter className="twitterIcon" /> Twitter
                              </a>
                            </li>
                            <li className="submenu-item ">
                              <a
                                href="https://discord.gg/0xblock"
                                target="_blank"
                              >
                                <FaDiscord className="discordIcon" /> Discord
                              </a>
                            </li>
                            <li className="submenu-item ">
                              <a
                                href="https://medium.com/@0xblockfi"
                                target="_blank"
                              >
                                <BsMedium className="mediumIcon" /> Medium
                              </a>
                            </li>
                          </ul>
                        </>
                      ) : (
                        <>
                          <a
                            href="#"
                            className={showDropdown ? "communityActive" : ""}
                            onClick={() =>
                              this.handleShowDropdown(!showDropdown)
                            }
                          >
                            Community
                          </a>

                          {showDropdown && (
                            <ul className="subCommunity">
                              <li>
                                <a
                                  href="https://twitter.com/0xblockfi"
                                  target="_blank"
                                >
                                  <BsTwitter className="twitterIcon" /> Twitter
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://discord.gg/0xblock"
                                  target="_blank"
                                >
                                  <FaDiscord className="discordIcon" /> Discord
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://medium.com/@0xblockfi"
                                  target="_blank"
                                >
                                  <BsMedium className="mediumIcon" /> Medium
                                </a>
                              </li>
                            </ul>
                          )}
                        </>
                      )}
                    </li>
                    <li
                      className={`navigation__item ${
                        animation_only_home_page ? "fade-in-right" : ""
                      }`}
                    >
                      <Link
                        onClick={this.handleMenuClose}
                        exact="true"
                        to="/whitepaper"
                      >
                        Whitepaper
                      </Link>
                    </li>
                    <li
                      className={`navigation__item ${
                        animation_only_home_page ? "fade-in-right" : ""
                      }`}
                    >
                      <a
                        href="./files/0xBlock_Audit_Report.pdf"
                        target="_blank"
                      >
                        Audit Report
                      </a>
                    </li>
                    <li
                      className={`navigation__item ${
                        animation_only_home_page ? "fade-in-right" : ""
                      }`}
                    >
                      <Link onClick={this.handleMenuClose} to="/faq">
                        FAQ
                      </Link>
                    </li>
                    <li
                      className={`navigation__item ${
                        animation_only_home_page ? "fade-in-right" : ""
                      }`}
                    >
                      <Link onClick={this.handleMenuClose} to="/contact">
                        Contact Us
                      </Link>
                    </li>
                    <li
                      className={`navigation__item ${
                        animation_only_home_page ? "fade-in-right" : ""
                      }`}
                    >
                      <a
                        className={`btn btn-primary ${
                          is_home_page ? "btn-launch-app" : ""
                        } ${animation_only_home_page ? "fade-in" : ""}`}
                        href="https://app.0xblock.finance/"
                        target="_blank"
                      >
                        Launch App
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
