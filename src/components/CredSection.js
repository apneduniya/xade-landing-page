import "./styles.css";
import React, {
  useRef,
  useEffect,
  useLayoutEffect,
  forwardRef,
  useState,
} from "react";
import "../styles/style.css";
const App = () => {
  return (
    <>
      <>
        <>
          <section class="container">
            <div class="left-half" style={{}}>
              <div className="line2">
                <div
                  style={{
                    fontFamily: "Benzin-Medium",
                    fontSize: "0.6rem",
                    letterSpacing: "10px",
                    color:
                      "var(--linnn, linear-gradient(113deg, #8C46FF -2.72%, #B080FF 111.29%))",
                  }}
                >
                  <span className="gradient1">GLOBAL PAYMENTS </span>{" "}
                </div>
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    fontFamily: "Benzin-Bold",
                  }}
                >
                  <h3 style={{ fontSize: "32px", lineHeight: "1.2" }}>
                    GLOBAL GASLESS PAYMENTS TO ANY IDENTITY
                  </h3>
                </div>
                <div style={{ fontSize: "1rem", fontFamily: "Regular" }}>
                  <span>
                    Send Payments to any email address, mobile number, DID and
                    more in a gasless manner irrespective of the fact whether
                    the recipient has a wallet or not with programmable
                    payments.
                  </span>
                </div>
              </div>
            </div>
            <div class="right-half">
              <img
                className="credimg"
                src={process.env.PUBLIC_URL + "/Media/newhomeimage.png"}
                alt="payment image"
              ></img>
            </div>
          </section>
          <section class="container" id="container4">
            <div class="left-half">
              <img
                className="credimg"
                src="/Media/newinvestmentsimage.png"
                alt="image"
              ></img>
            </div>
            <div class="right-half">
              <div className="line2" style={{ textAlign: "left" }}>
                <div
                  style={{
                    fontFamily: "Benzin-Medium",
                    fontSize: "0.6rem",
                    letterSpacing: "10px",
                    color: "rgb(232, 109, 111)",
                  }}
                >
                  <span className="gradient1" >PRO TRADING </span>
                </div>
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    fontFamily: "Benzin-Bold",
                  }}
                >
                  <h3 style={{ fontSize: "32px", lineHeight: "1.2" }}>
                    TRADE ANYTHING WITH 10X LEVERAGE
                  </h3>
                </div>
                <div style={{ fontSize: "1rem", fontFamily: "Regular" }}>
                  <span>
                    {" "}
                    Go Long or Short with upto 10x leverage on stocks, crypto, forex
                    and more powered by DeriveX with almost guranteed liquidity and
                    improved risk engines.{" "}
                  </span>
                </div>
                <br></br>
              </div>
            </div>
          </section>
        </>
        {/* <section class="container">
          <div class="left-half" style={{}}>
            <div className="line2" style={{}}>
              <div
                style={{
                  fontFamily: "Benzin-Medium",
                  fontSize: "0.6rem",
                  letterSpacing: "10px",
                  color: "#40CEFF",
                }}
              >
                <span>PRO TRADING </span>
              </div>
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 500,
                  lineHeight: 1.2,
                  fontFamily: "Benzin-Bold",
                }}
              >
                <h3 style={{ fontSize: "32px", lineHeight: "1.2" }}>
                  FINANCE YOUR LOANS EASILY AND INSTANTLY
                </h3>
              </div>
              <div style={{ fontSize: "1rem", fontFamily: "Regular" }}>
                <span>
                  {" "}
                  Finance your real world loans such as EMIs or Mortgages or
                  against ERC-20 Tokens in various manners with no paperwork
                  powered by SabeX.
                </span>{" "}
              </div>
            </div>
          </div>
          <div class="right-half">
            <img
              className="credimg"
              src="https://res.cloudinary.com/xade-finance/image/upload/v1684697495/payments-3_ccnbii.png"
              alt="image"
            ></img>
          </div>
        </section> */}
      </>
      <section class="container">
        <div class="left-half" style={{}}>
          <div className="line2" style={{}}>
            <div
              style={{
                fontFamily: "Benzin-Medium",
                fontSize: "0.6rem",
                letterSpacing: "10px",
                color: "#FFCE40",
              }}
            >
              <span className="gradient1">SPEND SEAMLESSLY </span>
            </div>
            <div
              style={{
                fontSize: "2rem",
                fontWeight: 500,
                lineHeight: 1.2,
                fontFamily: "Benzin-Bold",
              }}
            >
              <h3 style={{ fontSize: "32px", lineHeight: "1.2" }}>
                SPEND GLOBALLY WITH YOUR NON CUSTODIAL PERSONALISED CARD
              </h3>
            </div>
            <div style={{ fontSize: "1rem", fontFamily: "Regular" }}>
              <span>
                {" "}
                Spend globally with your personalised virtual card powered by
                Visa and earn exclusive rewards.
              </span>{" "}
            </div>
          </div>
        </div>
        <div class="right-half">
          <img
            className="credimg"
            src="/Media/newcardimage.png"
            alt="image"
          ></img>
        </div>
      </section>
      <section class="container" id="container2">
        <div class="left-half">
          <img
            className="credimg"
            src="/Media/newsavingsimage.png"
            alt="image"
          ></img>
        </div>
        <div class="right-half">
          <div className="line2" style={{ textAlign: "left" }}>
            <div
              style={{
                fontFamily: "Benzin-Medium",
                fontSize: "0.6rem",
                letterSpacing: "10px",
                color: "#A15EFF",
              }}
            >
              <span className="gradient1"> HIGH YIELD SAVINGS </span>{" "}
            </div>
            <div
              style={{
                fontSize: "2rem",
                fontWeight: 500,
                lineHeight: 1.2,
                fontFamily: "Benzin-Bold",
              }}
            >
              <h3 style={{ fontSize: "32px", lineHeight: "1.2" }}>
                BEAT INFLATION WITH A STABLE SAVINGS ACCOUNT
              </h3>
            </div>
            <div style={{ fontSize: "1rem", fontFamily: "Regular" }}>
              <span>
                Get a savings account created specifically to beat inflation
                by financing real world loans powered by our innovative
                savings protocol SabeX.
              </span>
            </div>
          </div>
        </div>
      </section>

      <br />
      <br />

      <div className="Partnersdiv" style={{ backgroundColor: "black" }}>
        <div
          className="header3"
          id="he3"
          style={{
            marginTop: "2%",
            fontFamily: "Benzin-Medium",
            color: "#ddd",
            paddingTop: "5%",
            backgroundColor: "black",
          }}
        >
          PARTNERS & BACKERS{" "}
        </div>
        <div
          className="header"
          id="cardh"
          style={{ fontFamily: "Benzin-Bold", color: "#fff" }}
        >
          <h2>We are working with the best</h2>
        </div>
        <div
          className="topText"
          id="cardtt"
          style={{ fontFamily: "Regular", color: "#B3C5BB" }}
        >
          We are working with the best projects in the space across
          community,infrastructure and more while we are backed by some
          reputable companies in the space
        </div>
        <br></br>
        <div class="slider1">
          <div class="slide-track">
            <div class="slide">
              <img
                src="https://res.cloudinary.com/xade-finance/image/upload/v1684873941/Untitled_design-6_px1l3a.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://res.cloudinary.com/xade-finance/image/upload/v1684873941/Untitled_design-7_ukycnc.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://res.cloudinary.com/xade-finance/image/upload/v1684875583/Untitled_design-11_kvwtp6.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://res.cloudinary.com/xade-finance/image/upload/v1684876252/Untitled_design-17_rc6m3r.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://res.cloudinary.com/xade-finance/image/upload/v1684874141/Untitled_design-10_ucyjce.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://res.cloudinary.com/xade-finance/image/upload/v1684876252/Untitled_design-16_utgxlo.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <a href="https://www.tradingview.com/symbols/TVC-DXY/">
                <img
                  src="/Media/TRADINGVIEW.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </a>
            </div>
            <div class="slide">
              <img
                src="https://res.cloudinary.com/xade-finance/image/upload/v1684873941/Untitled_design-6_px1l3a.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://res.cloudinary.com/xade-finance/image/upload/v1684873941/Untitled_design-7_ukycnc.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://res.cloudinary.com/xade-finance/image/upload/v1684875583/Untitled_design-11_kvwtp6.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://res.cloudinary.com/xade-finance/image/upload/v1684876252/Untitled_design-17_rc6m3r.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://res.cloudinary.com/xade-finance/image/upload/v1684874141/Untitled_design-10_ucyjce.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://res.cloudinary.com/xade-finance/image/upload/v1684876252/Untitled_design-16_utgxlo.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
          </div>
        </div>

        <div
          class="slider2"
          style={{
            paddingBottom: "1%",
            background: "rgb(18, 19, 20)",
            backgroundColor: "black",
          }}
        >
          <div class="slide-track">
            <div class="slide">
              <img
                src="https://res.cloudinary.com/xade-finance/image/upload/v1684876827/Untitled_design-15_istprd.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://res.cloudinary.com/xade-finance/image/upload/v1684874140/Untitled_design-8_gy9tfa.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://res.cloudinary.com/xade-finance/image/upload/v1684875583/Untitled_design-12_egkocd.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://res.cloudinary.com/xade-finance/image/upload/v1684874141/Untitled_design-9_mk3u1v.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://res.cloudinary.com/xade-finance/image/upload/v1684875584/Untitled_design-14_n1b6iz.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://res.cloudinary.com/xade-finance/image/upload/v1684875584/Untitled_design-13_qtoz2g.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://res.cloudinary.com/xade-finance/image/upload/v1684876827/Untitled_design-15_istprd.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://res.cloudinary.com/xade-finance/image/upload/v1684874140/Untitled_design-8_gy9tfa.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://res.cloudinary.com/xade-finance/image/upload/v1684875583/Untitled_design-12_egkocd.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://res.cloudinary.com/xade-finance/image/upload/v1684874141/Untitled_design-9_mk3u1v.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://res.cloudinary.com/xade-finance/image/upload/v1684875584/Untitled_design-14_n1b6iz.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://res.cloudinary.com/xade-finance/image/upload/v1684875584/Untitled_design-13_qtoz2g.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
