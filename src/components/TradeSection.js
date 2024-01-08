import arrowIcon from "../assets/arrow-icon.png";
import video from "../assets/trade.mp4";
import Spline from '@splinetool/react-spline';


const TradeSection = () => {
    return (
        <>
            <div
                className="topContainer"
                style={{
                    // marginTop: "15vh",
                    // marginBottom: "10vh",
                    position: 'relative',
                    padding: "0 5rem",
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "row",
                    zIndex: "1",
                }}
            >
                <img
                    src={"https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYSjJ9li82RbCAK-i2NPHiLLeU17G4aSkXZs3huMLFKlbvKYtDAOV-Lcuht8RFANEC8yt4vMjUHKasIrDitU92lY9CYL=w1920-h963"}
                    alt="background"
                    style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100vh",
                        zIndex: "-1",
                        opacity: "0.5",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                />
                {/* <video
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    style={{
                        // width: "100%",
                        // height: "100vh",
                        // position: "relative",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100vh",
                        opacity: "0.5",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: "-1",
                    }}
                >
                    <source src={video} type="video/mp4" />
                </video> */}
                <div
                    style={{
                        position: "relative",
                        zIndex: "1",
                    }}
                >
                    <div
                        className="topContainerText"
                        style={{
                            maxWidth: "47.438rem",
                        }}
                    >
                        <div role="heading" aria-level="1" className="h1Container">
                            <h1
                                className="headingTop"
                                style={{
                                    // textAlign: "center",
                                    fontSize: "3.5rem",
                                    fontFamily: "Montreal",
                                    fontWeight: "500",
                                    textAlign: "left",
                                }}
                            >
                                The
                                <span
                                    style={{
                                        fontFamily: "PPEditorialNew-Italic",
                                        // fontStyle: "italic",
                                        fontWeight: "lighter",
                                        marginLeft: "0.5rem",
                                        color: "linear-gradient(102deg, #EDB9FF 10.39 %, #9DC4FF 72 %)",
                                        marginRight: "1rem",
                                        // backgroundClip: "text",
                                    }}
                                >
                                {" "}
                                ultimate
                            </span>
                            <br />trading experience
                            <br />powered by DeFi.
                        </h1>
                    </div>

                    <div
                        style={{
                            color: "#fff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <span
                            className="subTextH1"
                            style={{
                                fontSize: "1.2rem",
                                fontFamily: "Montreal",
                                fontWeight: "normal",
                                textAlign: "left",
                            }}
                        >
                            Trade anything in the world with spot and margin trading with <br />
                            deep liquidity, advanced analytics, no-code algo trading and much more
                        </span>
                    </div>
                    <br />
                </div>
                {/* <div
                        className="GetStartedDiv"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                        }}
                    >
                        <button
                            className="GetStartedbtn"
                            onClick={(e) => {
                                console.log("button click");
                                e.preventDefault();
                                window.open("https://trade.xade.finance", "_blank");
                            }}
                            style={{
                                background: "linear-gradient(89.8deg, #151515 -10.61%, #101010 110.2%), linear-gradient(0deg, #2E2E2E, #2E2E2E)",
                                color: "#fff",
                                border: "1px solid #2E2E2E",
                                height: "70 px",
                                width: "193 px",
                                fontSize: "20px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: "100px",
                                cursor: "pointer",
                            }}
                        >
                            Trade Now
                            <img
                                src={arrowIcon}
                                alt="arrow-icon"
                                style={{
                                    marginLeft: "0.5rem",
                                }}
                            />
                        </button>
                    </div> */}
            </div>
            <div
                style={{
                    // position: "absolute",
                    // top: "0",
                    // left: "0",
                    width: "50%",
                    height: "100%",
                    // zIndex: "-1",
                    // backgroundColor: "#111111",
                    // opacity: "0.5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Spline id="bg-animation" scene="https://prod.spline.design/aAFMY0mBK6-W4dg6/scene.splinecode" />
            </div>
        </div >
            <br />
        </>
    )
}

export default TradeSection;



