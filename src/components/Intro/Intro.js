import React from "react";
import { ReactComponent as Me } from "../../assets/me.svg";
import LineBreak from "../LineBreak/LineBreak";
import Skills from "../Skills/Skills";

const Intro = () => {
    return (
        <>
            <section id="middle">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <article>
                                <Me className="middle-section-avatar-img" />
                                <h3>Hi.</h3>
                                <p className="introduction">
                                    I'm a web designer / developer based in
                                    Karnataka, India. I have a passion for web
                                    design and love to create for web and mobile
                                    devices.
                                </p>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
            <LineBreak />
            <Skills />
            <LineBreak />
        </>
    );
};

export default Intro;
