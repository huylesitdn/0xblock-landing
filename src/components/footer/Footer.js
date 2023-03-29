import React from "react"
import { NavLink as Link } from "react-router-dom"

const Footer = ({backgroundLight}) => {
    return (
        <div className={backgroundLight ? 'footer footer-light' : 'footer'}>
            <div className="container">
                <div className="row">
                    <div className="col d-flex flex-column flex-sm-row">
                        <span>©  2022 0xBlock</span>
                        {/* <nav>
                            <ul>
                                <li>
                                    <Link to="/terms">Terms of Services</Link>
                                </li>
                                <li>
                                    <Link to="/privacy">Privacy Policy</Link>
                                </li>
                            </ul>
                        </nav> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer