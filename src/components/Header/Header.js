import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/me.svg";
import { ReactComponent as Cloud } from "../../assets/cloud.svg";
import Mountain from "../../assets/land.svg";
import Flag1 from "../../assets/flag.svg";

const Header = () => {
    let location = useLocation();

    const homepage = location.pathname === "/" ? "active" : "";
    const workpage = location.pathname === "/work" ? "active" : "";
    return (
        <>
            <section id={location.pathname === "/" ? "top" : "top-work"}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-xs-4 custom-width">
                            <Link to="/">
                                <Logo className="img-responsive" />
                            </Link>
                        </div>
                        <div className="col-md-8 col-xs-8 custom-width">
                            <ul className="nav">
                                <li className="nav-item">
                                    <Link
                                        className={`nav-link ${homepage}`}
                                        to="/"
                                    >
                                        About
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className={`nav-link ${workpage}`}
                                        to="/work"
                                    >
                                        Work
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {location.pathname === "/" ? (
                    <>
                        <div className="top-container">
                            <div className="brief">
                                <h1 className="text-color">I'm Suraj</h1>
                                <p className="text-color web">
                                    a web developer
                                </p>
                            </div>
                        </div>
                        <div className="middle-container">
                            <div className="">
                                <div className="right-cloud">
                                    <Cloud />
                                </div>
                                <div className="mountain col-md-12">
                                    <img
                                        className="mountain-img"
                                        src={Mountain}
                                        alt="Mountain-Img"
                                    ></img>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="top-container">
                            <div className="brief">
                                <h1 className="text-color">Work</h1>
                                <p className="text-color web"></p>
                            </div>
                        </div>
                        <div className="middle-container">
                            <div className="">
                                <div className="right-cloud">
                                    <Cloud
                                        className={
                                            location.pathname === "/work"
                                                ? "work-cloud"
                                                : ""
                                        }
                                    />
                                </div>
                                <div className="mountain col-md-12 col-xs-6">
                                    <img
                                        className="flag-img"
                                        src={Flag1}
                                        alt="Flag-Img"
                                    />
                                </div>
                                <div className="col-xs-6">
                                    <img
                                        className="flag-img2"
                                        src={Flag1}
                                        alt="Flag-Img"
                                    />
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </section>
        </>
    );
};

export default Header;
