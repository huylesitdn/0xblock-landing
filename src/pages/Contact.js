import React from "react";
import Form from "../components/form/Form";
import { gsap } from "gsap";

class Contact extends React.Component {
    componentDidMount() {
        const loadScript = function (src) {
            const tag = document.createElement('script');
            tag.async = false;
            tag.src = src;
            tag.id = 'gradient-mesh-script';
            const body = document.querySelector('body');
            body.appendChild(tag);
        }

        gsap.to('.gradient-mesh', {
            duration: 1,
            ease: "power3.out",
            opacity: 1
        })
    
        loadScript('./libs/gradient-mesh.js');

        const c = document.getElementById('mesh')
        const scaleX = document.body.clientWidth / c.width
        const scaleY = (document.body.clientHeight * 1.3) / c.height
        const scaleToCover = Math.max(scaleX, scaleY)
        c.style.transformOrigin = '0 0'
        c.style.transform = 'scale(' + scaleToCover + ')'

        window.addEventListener("resize", this.handleResize)
    }

    handleResize = () => {
        const c = document.getElementById('mesh')
        const scaleX = document.body.clientWidth / c.width
        const scaleY = document.body.clientHeight / c.height
        const scaleToCover = Math.max(scaleX, scaleY)
        c.style.transformOrigin = '0 0'
        c.style.transform = 'scale(' + scaleToCover + ')'
    }

    componentWillUnmount() {
        const removeScript = function (src) {
            const script = document.querySelector('script#gradient-mesh-script');
            script.parentNode.removeChild(script);
        }
    
        removeScript('./libs/gradient-mesh.js');

        gsap.set('.gradient-mesh', {
            opacity: 0
        })

        window.removeEventListener("resize", this.handleResize)
    }

    render(){
        return (
            <>
                <section className="head">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-8 offset-xxl-2 col-lg-10 offset-lg-1 text-center">
                                <h1 className="mb-1">Got a question or suggestion?</h1>
                                <p className="regular sub-title">Send our team a message and we'll get back to you soon!</p>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                                <div className="form bg-white">
                                    <Form />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Contact