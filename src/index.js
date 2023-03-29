import React, {Suspense} from "react"
import ReactDOM from "react-dom"
import { gsap } from "gsap"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Loading from "./components/loading"
import Homepage from "./pages/Homepage"
import ComingSoon from "./pages/ComingSoon"
import Faqs from "./pages/Faqs"
import Contact from "./pages/Contact"
import Whitepaper from "./pages/Whitepaper"
import NotFound from "./pages/NotFound"

const LOCATION = {
  HOME_PAGE: '/',
  FAQ_PAGE: '/faq',
  CONTACT_PAGE: '/contact',
  WHITEPAPER_PAGE: '/whitepaper',
  COMING_SOON_PAGE: '/coming-soon',
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: location.pathname,
      isFixed: false,
      video: false,
      footerBackgroundLight: false,
      loading: true,
    }
  }

  updateTitle = (location) => {
    document.title = (() => {
      switch (location) {
        case LOCATION.HOME_PAGE: return 'Welcome to 0xBlock — The future of crypto hedging';
        case LOCATION.FAQ_PAGE: return '0xBlock — Frequently Asked Questions';
        case LOCATION.CONTACT_PAGE: return 'Contact us — Got a question or suggestion?';
        case LOCATION.WHITEPAPER_PAGE: return 'Whitepaper — 0xBlock';
        case LOCATION.COMING_SOON_PAGE: return 'Coming Soon — 0xBlock';
        default: return '404 not-found';
      }
    })()
  }

  componentDidMount() {
    window.document.onreadystatechange = () => {
      console.log('====document.readyState', window.document.readyState)
      this.setState({loading: !document.readyState === "complete"});
    }
    this.setState({ location: location.pathname })
    this.updateTitle(location.pathname)
    location.pathname == '/' ? this.setState({ footerBackgroundLight: true }) : this.setState({ footerBackgroundLight: false })
    window.addEventListener("scroll", this.handleScroll)
    gsap.to('#root section, #root .footer', {
      ease: "power3.out",
      opacity: 1,
      y: 0,
      duration: .3,
      delay: .5
    })
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = (event) => {
    const scroll = window.scrollY
    if (scroll > 0) {
      this.setState({isFixed: true})
    } else {
      this.setState({isFixed: false})
    }
    event.preventDefault()
  }

  titleHandler = () => {
    if (this.state.location !== location.pathname) {
      gsap.to('section, #root .footer, .gradient-mesh', {
        ease: "power3.out",
        opacity: 0,
        duration: .3,
        onComplete: () => {
          this.setState({ location: location.pathname })
          gsap.fromTo('section, #root .footer, .gradient-mesh', {
            y: -50,
            opacity: 0
          }, {
            ease: "power3.out",
            y: 0,
            opacity: 1,
            duration: 1
          })
        }
      })
      location.pathname == '/' ? this.setState({ footerBackgroundLight: true }) : this.setState({ footerBackgroundLight: false })
    }
    this.updateTitle(location.pathname)
  }

  render() {
    let {
      location,
      isFixed,
      video,
      footerBackgroundLight,
      loading
    } = this.state;

    let className = (() => {
      switch (location) {
        case LOCATION.HOME_PAGE: return 'homepage'
        case LOCATION.FAQ_PAGE: return 'faqs'
        case LOCATION.CONTACT_PAGE: return 'contact'
        case LOCATION.WHITEPAPER_PAGE: return 'whitepaper'
        case LOCATION.COMING_SOON_PAGE: return 'coming-soon'
        default: return 'not-found'
      }
    })()

    let gradientBackground = className == "contact" ? (
        <canvas id="mesh" width="16" height="16"></canvas>
    ) : ''

    return (
      <div className={isFixed ? 'header-fixed ' + className : className}>
        {!!loading && <Loading />}
        <div className="gradient-mesh">
            {gradientBackground}
        </div>
        <Router>
          <div onClick={() => this.titleHandler()}>
            <Navbar fixed={isFixed} />
          </div>
          {/* <p onClick={this.titleHandler}>change class here please</p> */}
          <Routes location={location}>
            <Route path={LOCATION.HOME_PAGE} element={<Homepage video={video} titleHandler={this.titleHandler} />} />
            <Route path={LOCATION.FAQ_PAGE} element={<Faqs titleHandler={this.titleHandler} />} />
            <Route path={LOCATION.CONTACT_PAGE} element={<Contact />} />
            <Route path={LOCATION.WHITEPAPER_PAGE} element={<Whitepaper />} />
            <Route path={LOCATION.COMING_SOON_PAGE} element={<ComingSoon titleHandler={this.titleHandler} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          {
            ![LOCATION.COMING_SOON_PAGE].includes(location) && <Footer backgroundLight={footerBackgroundLight} />
          }
        </Router>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);