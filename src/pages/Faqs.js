import React from "react";
import { NavLink as Link } from "react-router-dom"
import Accordion from "../components/accordion/Accordion";

const container = document.querySelector('#root');

const projectOverview = [
    {
        heading: "What is 0xBlock?",
        content: <p>0xBlock aims to become the largest, most transparent hedge fund in the DeFi space, offering an ever-growing range of investments and products to provide unparalleled, protected profitability for members worldwide. 0xBlock is proud to present the future of crypto hedging.</p>
    },
    {
        heading: "Why should I use 0xBlock?",
        content: <><p>0xBlock presents a range of incredible benefits to crypto investors who wish to take their investment strategies and profitability to the next level, including:</p><ul><li>Absolute Transparency</li><li>Security (Multi Sig wallets and 100% Audited Code)</li><li>Non-Tech Participation</li><li>Portfolio Diversification</li><li>Development of World-Class Products</li></ul><p>For more detail on the benefits of using 0xBlock, dive into our whitepaper.</p></>
    },
    {
        heading: "Is 0xBlock trustworthy?",
        content: <><p>Absolutely! 0xBlock champions member trust and demonstrates this focus in the 100% transparency of our platform design. We understand that we are only as strong as the experience of our newest member. </p><p>Our dedicated channels welcome members to seek guidance and clarity directly from our team. In conjunction with our incredible resource base, there will never be a time that you feel left in the dark as you benefit from 0xBlock.</p></>
    }
]

const contracts = [
    {
        heading: "What are the levels of 0xBlock contract?",
        content: <>
            <p>0xBlock members can use their 0xB tokens can be used to mint 3 levels of 0xRC:</p>
            <ul><li>Square (5 0xB)</li><li>Cube (15 0xB)</li><li>Tesseract (30 0xB)</li></ul>
            <p>Each 0xRC level provides a progressively greater level of minting returns.</p>
            <p>Each member is limited to minting 100 0xRCs per tier – however, there is no limit to the profitability that these contracts can bring!</p>
        </>
    },
    {
        heading: "How do I mint a contract on 0xBlock?",
        content: <><p>You can easily mint a contract on 0xBlock app with the following steps:</p><ul className="numbered-list"><li>Connect MetaMask (Network: Avalanche)</li><li>Go to the “Mint Contract” page and choose the contract you want to mint.</li><li>After choosing the contract type, you can mint a new contract by approving and then accepting the transaction.</li></ul></>
    },
    {
        heading: "Can you provide an example of 0xBlock contract use?",
        content: <><p>Certainly!</p><p>Let’s say a user purchases 15 tokens and mints a Cube contract. Now, the user will start receiving rewards for the Cube contract he has minted.</p><p>How will we utilize his 15 tokens? Distribution is as following:</p><ul className="numbered-list"><li>10% Token in Development/Marketing Funds Wallet as 100% USDC</li><li>20% Tokens in Liquidity Pool as 50% 0xB and 50% AVAX</li><li>20% Tokens in Treasury Wallet as 100% USDC</li><li>50% Tokens in Rewards Wallet as 100% 0xB</li></ul></>
    },
    {
        heading: "What are the use cases for each token distribution? ",
        content: <><p>Each distribution destination has its own use case, all of which are vital to the ongoing prosperity of the 0xBlock platform and its users.</p><ul><li>Development/Marketing Funds Wallet to be used in the ongoing development of 0xBlock products and maintenance of the 0xBlock dApp</li><li>Liquidity Pool tokens to be added to 0xBlock’s Liquidity Pool (held on TraderJoe)</li><li>Treasury Wallet funds will be used to make further investments and generate healthy returns. 100% of profits gained from Treasury Wallet fund investments will be transferred to the Rewards Wallet</li><li>Rewards Wallet funds are used to maintain the balance used in providing 0xBlock’s valued members with exciting, exclusive opportunities</li></ul></>
    }
]

const tokenDetails = [
    {
        heading: "What is the 0xBlock token?",
        // content: <><p>The 0xBlock platform is driven by our unique 0xB token based on the AVAX blockchain.</p><p>Holding 0xB opens members up to a range of on-platform benefits and wider utilities, plus empowers them to establish 0xRCs and generate incredible, consistent returns.</p><p>Tokens can be used to establish 3 levels of 0xRC: Square (5 0xB), Cube (15 0xB) and Teressact (30 0xB), with each level providing greater staking returns.</p><p>Join our [Discord] to be first to learn of the 0xB token launch – it’s also a great place to engage directly with our team, chat with like-minded crypto traders, gain exclusive market insights, and much more.</p></>
        content: <><p>The 0xBlock platform is driven by our unique 0xB token based on the AVAX blockchain.</p><p>Holding 0xB opens members up to a range of on-platform benefits and wider utilities, plus empowers them to establish 0xRCs and generate incredible, consistent returns.</p><p>Tokens can be used to establish 3 levels of 0xRC: Square (5 0xB), Cube (15 0xB) and Teressact (30 0xB), with each level providing greater staking returns.</p><p>Join our [Discord] to be first to learn of the 0xB token launch – it’s also a great place to engage directly with our team, chat with like-minded crypto investors, gain exclusive market insights, and much more.</p></>
    }
]

const rewardsAndFunds = [
    {
        heading: "What rewards do I gain from each contract tier?",
        content: <>
            <p>Square Contract Reward: (250% APR)<br />Reward: 0.03 0xB/Day<br />ROI: 146 Days</p>
            <p>Cube Contract Reward: (400% APR)<br />Reward: 0.16 0xB/Day<br />ROI: 92 Days</p>
            <p>Tesseract Contract Reward: (500% APR)<br />Reward: 0.41 0xB/Day <br />ROI: 73 Days</p>
            <p>0xBlock members can track the progress of their rewards in real-time using their platform dashboard – as well as cashout rewards at any time.</p>
        </>
    },
    {
        heading: "Will 0xBlock provide me with lifelong rewards?",
        content: <>
            <p>Yes and no! For optimal protocol growth and longevity, we implement a decay model that will see contract rewards gradually decrease every three months.</p>
            <p>Here is an example of how 0xBlock’s contract reward decay model will work when a member mints a Square contract: </p>
            <ul>
                <li>First 1-3 months: 0.034 0xB/day</li>
                <li>From 4-6 months: 0.034-15% = 0.028 0xB/day</li>
                <li>From 7-9 months: 0.028-15% = 0.024 0xB/day</li>
                <li>From 10-12 months: 0.024-15% = 0.020 0xB/day</li>
            </ul>
            <p style={{color: "#FF3535"}}>Note: Each minted contract will have its own decay cycle.</p>
            <p style={{color: "#FF3535"}}>Example: If you have ten contracts minted on different dates, the decay model will implement on each contract individually according to its mint date.</p>
        </>
    },
    {
        heading: "How do I claim rewards from my 0xBlock contracts?",
        content: <><p>To claim your current reward amount, simply open the 0xBlock dApp and visit the Contracts section.</p><p>You can cashout rewards at any time. All cashout requests will be subject to a 10% fee that will be allocated to our Liquidity Pool (50% 0xB + 50% AVAX).</p><p>This competitive fee allocated to the Liquidity Pool will not be permanent – our team will make a decision as to the most beneficial move for all 0xBlock community members.</p></>
    }
]

const theFuture = [
    {
        heading: "What is the future of the 0xBlock project?",
        content: <p>0xBlock’s transparent DeFi hedge fund is just the first step in our growth trajectory, which will see a range of products established as we grow. Planned projects include our DEX, Launchpad and Wallet – stay tuned as we continue to announce more exciting expansions. As our ecosystem grows, so will the income streams with which we will reward 0xRC holders.</p>
    },
    {
        heading: "How will the 0xBlock project expand?",
        content: <p>The first of our products will be to build a DEX that supports an ever-growing range of blockchains – from Ethereum, Avalanche and Binance Smart Chain to Solana, Fantom and more. This unique move will empower our members to visit our single DEX when trading in tokens from each linked blockchain, saving an incredible amount of time and maximizing potential profits.</p>
    }
]

const engage = (handleMenuClose) => [
    {
        heading: "How can I be first to learn about 0xBlock project updates?",
        content: <>
            <p>Members of our Discord are the first to hear of every update – it’s where our team engages directly with the 0xBlock community.</p>
            <p>Join the conversation <a href="https://discord.gg/0xblock" target="_blank">here</a>.</p>
        </>
    },
    {
        heading: "I have an idea – how can I share it with your team?",
        content: <>
            <p>Fantastic! We love to hear suggestions from our users, who inspire us everyday to take new directions and achieve new milestones in the DeFi space.</p>
            <p>
                Join our Discord <a href="https://discord.gg/0xblock" target="_blank">here</a> to engage directly with our team or reach out to our friendly support team using our website contact form. We'll get back to you as soon as possible!
            </p>
        </>
    }
]

class Faqs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentSection: 'projectOverview',
            isCompact: false,
            activeAccordion: 'projectOverview'
        }
    }

    handleResize = () => {
        const windowWidth = container.getBoundingClientRect().width;
        windowWidth > 991 ? this.setState({isCompact: false}) : this.setState({isCompact: true})
    }

    componentDidMount() {
        const windowWidth = container.getBoundingClientRect().width;
        windowWidth > 991 ? this.setState({isCompact: false}) : this.setState({isCompact: true})
        window.addEventListener("resize", this.handleResize);
    }
        
    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }

    handleSectionChange = (section) => {
        this.setState({
            currentSection: section
        })
    }

    handleMenuClose = () => {
        window.history.pushState({}, '', '/contact');
        this.props.titleHandler()
        window.scrollTo({
          top: 0
        });
    }

    handleActiveAccordion = (faqs) => {
        if (projectOverview == faqs)
            this.setState({
                activeAccordion: 'projectOverview'
            })
        if (contracts == faqs)
            this.setState({
                activeAccordion: 'contracts'
            })
        if (tokenDetails == faqs)
            this.setState({
                activeAccordion: 'tokenDetails'
            })
        if (rewardsAndFunds == faqs)
            this.setState({
                activeAccordion: 'rewardsAndFunds'
            })
        if (theFuture == faqs)
            this.setState({
                activeAccordion: 'theFuture'
            })
        if (engage == faqs)
            this.setState({
                activeAccordion: 'engage'
            })
    }

    render(){
        let {
            currentSection,
            isCompact,
            activeAccordion
        } = this.state;

        let currentAccordion = (() => {
            switch (currentSection) {
              case "projectOverview": return(
                <div className="cards-container__item">
                    <h4 className="cards-container__title">Project Overview</h4>
                    <Accordion name={"projectOverview"} active={currentSection} handleActiveAccordion={this.handleActiveAccordion} faqs={projectOverview} />
                </div>);
              case "tokenDetails": return(
                <div className="cards-container__item">
                    <h4 className="cards-container__title">Token Details</h4>
                    <Accordion name={"tokenDetails"} active={currentSection} handleActiveAccordion={this.handleActiveAccordion} faqs={tokenDetails} />
                </div>);
              case "contracts": return(
                <div className="cards-container__item">
                    <h4 className="cards-container__title">Contracts</h4>
                    <Accordion name={"contracts"} active={currentSection} handleActiveAccordion={this.handleActiveAccordion} faqs={contracts} />
                </div>);
              case "rewardsAndFunds": return(
                <div className="cards-container__item">
                    <h4 className="cards-container__title">Rewards &amp; Funds</h4>
                    <Accordion name={"rewardsAndFunds"} active={currentSection} handleActiveAccordion={this.handleActiveAccordion} faqs={rewardsAndFunds} />
                </div>);
              case "theFuture": return(
                <div className="cards-container__item">
                    <h4 className="cards-container__title">The Future</h4>
                    <Accordion name={"theFuture"} active={currentSection} handleActiveAccordion={this.handleActiveAccordion} faqs={theFuture} />
                </div>);
              case "engage": return(
                <div className="cards-container__item">
                    <h4 className="cards-container__title">Engage</h4>
                    <Accordion name={"engage"} active={currentSection} handleActiveAccordion={this.handleActiveAccordion} faqs={engage(this.handleMenuClose)} />
                </div>);
            }
          })()

        let FullAccordion = (
            <>
                <div className="col-lg-4">
                    <nav className="accordion-menu">
                        <button className={this.state.currentSection == "projectOverview" ? 'active' : ''} onClick={() => this.handleSectionChange("projectOverview")}>
                            Project Overview
                            <span className="icon icon-document"></span>
                        </button>
                        <button className={this.state.currentSection == "tokenDetails" ? 'active' : ''} onClick={() => this.handleSectionChange("tokenDetails")}>
                            Token Details
                            <span className="icon icon-logo-icon"></span>
                        </button>
                        <button className={this.state.currentSection == "contracts" ? 'active' : ''} onClick={() => this.handleSectionChange("contracts")}>
                            Contracts
                            <span className="icon icon-clipboard-alt"></span>
                        </button>
                        <button className={this.state.currentSection == "rewardsAndFunds" ? 'active' : ''} onClick={() => this.handleSectionChange("rewardsAndFunds")}>
                            Rewards &amp; Funds
                            <span className="icon icon-present"></span>
                        </button>
                        <button className={this.state.currentSection == "theFuture" ? 'active' : ''} onClick={() => this.handleSectionChange("theFuture")}>
                            The Future
                            <span className="icon icon-telegram"></span>
                        </button>
                        <button className={this.state.currentSection == "engage" ? 'active' : ''} onClick={() => this.handleSectionChange("engage")}>
                            Engage
                            <span className="icon icon-communication"></span>
                        </button>
                    </nav>
                </div>
                <div className="col-lg-7 offset-lg-1">
                    <div className="cards-container">
                        {currentAccordion}
                    </div>
                </div>
            </>
        )

        let CompactAccordion = (
            <>
                <div className="col">
                    <h4 className="cards-container__title">Project Overview</h4>
                    <Accordion name={"projectOverview"} active={activeAccordion} handleActiveAccordion={this.handleActiveAccordion} faqs={projectOverview} />
                    <h4 className="cards-container__title">Token Details</h4>
                    <Accordion name={"tokenDetails"} active={activeAccordion} handleActiveAccordion={this.handleActiveAccordion} faqs={tokenDetails} />
                    <h4 className="cards-container__title">Contracts</h4>
                    <Accordion name={"contracts"} active={activeAccordion} handleActiveAccordion={this.handleActiveAccordion} faqs={contracts} />
                    <h4 className="cards-container__title">Rewards &amp; Funds</h4>
                    <Accordion name={"rewardsAndFunds"} active={activeAccordion} handleActiveAccordion={this.handleActiveAccordion} faqs={rewardsAndFunds} />
                    <h4 className="cards-container__title">The Future</h4>
                    <Accordion name={"theFuture"} active={activeAccordion} handleActiveAccordion={this.handleActiveAccordion} faqs={theFuture} />
                    <h4 className="cards-container__title">Engage</h4>
                    <Accordion name={"engage"} active={activeAccordion} handleActiveAccordion={this.handleActiveAccordion} faqs={engage(this.handleMenuClose)} />
                </div>
            </>
        )

        return (
            <>
                <section className="head">
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                                <p className="regular text-primary mb-2">Frequently Asked Questions</p>
                                <h1 className="mb-5">Answers for your questions</h1>
                            </div>
                        </div>
                        <div className="row accordion">
                            {isCompact ? CompactAccordion : FullAccordion}
                        </div>
                        <div className="row">
                            <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 text-center">
                                <p className="large mb-2">Still have Questions ?</p>
                                <p className="small text-neutral-60">If you didn't find the answer you needed, message our support team directly. We'll get back to you as soon as possible!</p>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Faqs