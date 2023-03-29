import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AccordionItem = ({ faq, active, onToggle }) => {
    const { heading, content } = faq;
    const thisElement = useRef(null);
    const thisChildElement = useRef(null);
    // console.log(faq, active)

    useEffect(()=>{
      if (active) {
        gsap.to(thisElement.current, {
          height: thisChildElement.current.clientHeight,
          ease: "power3.out",
          duration: .2,
          onComplete: () => {
            if (thisElement.current !== null)
              thisElement.current.style.height = "auto"
          }
        })
      } else {
        gsap.to(thisElement.current, {
          height: 0,
          ease: "power3.out",
          duration: .2
        })
      }
    },[active]);

    return (
      <div className={`card ${active ? "card-active" : ""}`}>
        <button className="card__button" onClick={onToggle}>
          {heading}
          <span className="card__control"></span>
        </button>
        <div ref={thisElement} className="card__answer-wrapper">
          <div ref={thisChildElement} className="card__answer">
            {content}
          </div>
        </div>
      </div>
    );
  };
  
  export default AccordionItem;