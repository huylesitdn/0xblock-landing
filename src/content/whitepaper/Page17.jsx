import React from "react";

const Page17 = () => {
    return (
        <>
            <div className="whitepaper-page">
            <div style={{
                    position: "absolute",
                    width: 211,
                    height: 23,
                    left: 28,
                    top: 24,
                    fontFamily: "Uxum Grotesque",
                    fontSize: 18,
                    lineHeight: "129%",
                    letterSpacing: "0.055em",
                    color: "#2F2E41"
                }}>Contract Case Example</div>
                <div style={{
                    position: "absolute",
                    width: 21,
                    height: 1,
                    left: 28,
                    top: 50,
                    background: "#0052FF"
                }}></div>
                <div style={{
                    position: "absolute",
                    width: 440,
                    height: 240,
                    left: 28,
                    top: 71,
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: 12,
                    lineHeight: "163.5%",
                    textAlign: "justify",
                    color: "rgba(47, 46, 65, 0.8)"
                }}>A user wishes to purchase a Cube Contract for 15 0xB tokens. 
                <br />
                <br />
                They can use 0xB tokens stored in their MetaMask wallet or convert DEX-listed cryptocurrencies into 0xB. The user then connects to the 0xBlock dApp using his wallet and mints a Cube Contract. The contract is instantly minted and immediately begins delivering daily rewards to the wallet associated with that Cube Contract.
                <br />
                <br />
                Creating a contract is permanent - the user cannot retract their 15 0xB tokens but will enjoy a lifetime of reliable, sizable returns. Due simply to transaction load and limits, there is a minting limit of 100 contracts per wallet.
                </div>
                <div style={{
                    position: "absolute",
                    width: 435,
                    height: 40,
                    left: 28,
                    top: 330,
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: 12,
                    lineHeight: "163.5%",
                    textAlign: "justify",
                    color: "rgba(47, 46, 65, 0.8)"
                }}>0xB tokens acquired by the protocol via contract minting will be distributed as following:</div>
                <div style={{
                    position: "absolute",
                    width: 9,
                    height: 9,
                    left: 30,
                    top: 389
                }}><img src="/images/Mark-Blue.svg"></img></div>
                <div style={{
                    position: "absolute",
                    width: 419,
                    height: 40,
                    left: 47,
                    top: 394,
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: 12,
                    lineHeight: "163.5%",
                    textAlign: "justify",
                    color: "rgba(47, 46, 65, 0.8)"
                }}><span style={{color: "rgba(47, 46, 65, 1)"}}>10%</span> – transferred to the Development/Marketing Funds Wallet (100% USDC).</div>
                <div style={{
                    position: "absolute",
                    width: 9,
                    height: 9,
                    left: 30,
                    top: 449
                }}><img src="/images/Mark-Blue.svg"></img></div>
                <div style={{
                    position: "absolute",
                    width: 420,
                    height: 20,
                    left: 47,
                    top: 456,
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: 12,
                    lineHeight: "163.5%",
                    textAlign: "justify",
                    color: "rgba(47, 46, 65, 0.8)"
                }}><span style={{color: "rgba(47, 46, 65, 1)"}}>20%</span> – provided to the liquidity pool (50% 0xB and 50% AVAX).</div>
                <div style={{
                    position: "absolute",
                    width: 9,
                    height: 9,
                    left: 30,
                    top: 493
                }}><img src="/images/Mark-Blue.svg"></img></div>
                <div style={{
                    position: "absolute",
                    width: 419,
                    height: 60,
                    left: 47,
                    top: 498,
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: 12,
                    lineHeight: "163.5%",
                    textAlign: "justify",
                    color: "rgba(47, 46, 65, 0.8)"
                }}><span style={{color: "rgba(47, 46, 65, 1)"}}>20%</span> – deposited in Treasury Wallet (100% USDC) – funds will be used to invest in other protocols, with all profits from these investments transferred on a recurring basis to the Rewards Wallet.</div>
                <div style={{
                    position: "absolute",
                    width: 9,
                    height: 9,
                    left: 30,
                    top: 575
                }}><img src="/images/Mark-Blue.svg"></img></div>
                <div style={{
                    position: "absolute",
                    width: 419,
                    height: 20,
                    left: 47,
                    top: 580,
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: 12,
                    lineHeight: "163.5%",
                    textAlign: "justify",
                    color: "rgba(47, 46, 65, 0.8)"
                }}><span style={{color: "rgba(47, 46, 65, 1)"}}>50%</span> – transferred to the Rewards Wallet (100% 0xB).</div>

                
                {/* 
                <div style={{
                    position: "absolute",
                    width: 230,
                    height: 64,
                    left: 28,
                    top: 252,
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: 10,
                    lineHeight: "163.5%",
                    textAlign: "justify",
                    color: "rgba(47, 46, 65, 0.8)"
                }}>
                <span style={{fontWeight: "Medium"}}>First 6 months:</span> 0.03 0xB/day
                    <br/>
                <span style={{fontWeight: "Medium"}}>After 6 months:</span>   0.03-15% = 0.0255 0xB/day
                    <br/>
                <span style={{fontWeight: "Medium"}}>After 12 months:</span>   0.0255-15% = 0.0216 0xB/day</div>
                <div style={{
                    position: "absolute",
                    width: 131,
                    height: 69,
                    left: 324,
                    top: 283,
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: 10,
                    lineHeight: "163.5%",
                    textAlign: "justify",
                    color: "rgba(47, 46, 65, 0.8)"
                }}>
                </div>
                <div style={{
                    position: "absolute",
                    width: 10,
                    height: 0,
                    left: 157,
                    top: 371,
                    border: "1px solid #0052FF"
                }}></div>
                <div style={{
                    position: "absolute",
                    width: 168,
                    height: 0,
                    left: 174,
                    top: 371,
                    border: "1px solid #0052FF"
                }}></div> */}
            </div>
        </>
    )
}

export default Page17