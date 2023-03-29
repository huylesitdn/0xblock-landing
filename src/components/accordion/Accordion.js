import React from "react"
import AccordionItem from '../accordionItem/AccordionItem'

const container = document.querySelector('#root')

class Accordion extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clicked: 0,
            isCompact: false
        }
    }

    // handleResize = () => {
    //     const windowWidth = container.getBoundingClientRect().width;
    //     windowWidth > 991 ? this.setState({ isCompact: false }) : this.setState({ isCompact: true, clicked: "0" });
    //     if (this.props.active == this.props.name) {
    //         this.setState({ clicked: 0 })
    //     }
    // }

    componentDidMount() {
        const windowWidth = container.getBoundingClientRect().width;
        windowWidth > 991 ? this.setState({ isCompact: false }) : this.setState({ isCompact: true, clicked: "0" });
        // window.addEventListener("resize", this.handleResize);
        if (this.props.active == this.props.name) {
            this.setState({ clicked: 0 })
        }
    }

    componentWillUnmount() {
        // window.removeEventListener("resize", this.handleResize);
    }

    handleToggle = (index, faqs) => {
        this.props.handleActiveAccordion(faqs)
        if (this.state.clicked === index) {
            this.setState({ clicked: "0" })
        } else {
            this.setState({ clicked: index })
        }
    };

    componentDidUpdate(prevProps) {
        if (this.state.isCompact) {
            if ((prevProps.active !== this.props.active) && (this.props.active !== this.props.name))
                this.setState({ clicked: "0" })
        } else {
            if ((prevProps.active !== this.props.active) && (this.props.active == this.props.name))
                this.setState({ clicked: 0 })
        }
    }

    render() {
        let {
            clicked
        } = this.state;

        return (
            <>
                {this.props.faqs && this.props.faqs.length > 0 && this.props.faqs.map((faq, index) => (
                    <AccordionItem
                        key={index}
                        faq={faq}
                        onToggle={() => this.handleToggle(index, this.props.faqs)}
                        active={clicked === index ? 1 : 0}
                    />
                ))}
            </>
        )
    }
}

export default Accordion