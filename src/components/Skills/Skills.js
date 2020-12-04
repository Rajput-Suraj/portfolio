import React from "react";
import RightSideSkill from "./RightSideSkill.js/RightSideSkill";
import LeftSideSkill from "./LeftSideSkill/LeftSideSkill";
import { ReactComponent as HTML5 } from "../../assets/html5.svg";
import { ReactComponent as CSS3 } from "../../assets/css.svg";
import { ReactComponent as JSLogo } from "../../assets/javascript.svg";

const Skills = () => {
    return (
        <>
            <section id="what-i-can-do">
                <div className="container">
                    <div className="row">
                        <div className="head col-md-12">
                            <h2>My Skills.</h2>
                        </div>
                    </div>
                    <RightSideSkill
                        ImageSrc={HTML5}
                        title="Design what you want"
                        subtitle="I like to keep it simple. My goals are to focus on typography, content and conveying the message that you want to send."
                    />
                    <LeftSideSkill
                        ImageSrc={CSS3}
                        title="Develop what you need"
                        subtitle="I'm a developer, so I know how to create your website to run across devices using the latest technologies available."
                    />
                    <RightSideSkill
                        ImageSrc={JSLogo}
                        title="Design interactive UIs"
                        subtitle="I love to transform ideas into reality using code. I am passionate about using Javascript and animations to create awesome user experiences."
                    />
                </div>
            </section>
        </>
    );
};

export default Skills;
