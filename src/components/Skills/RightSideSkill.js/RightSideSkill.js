import React from "react";

const RightSideSkill = ({ ImageSrc, title, subtitle }) => {
    return (
        <>
            <div className="row">
                <div className="col-md-12 skills">
                    <div className="col-md-6 html5-img">
                        <ImageSrc className="middle-section-avatar-img" />
                    </div>
                    <div className="col-md-6 html-skill-para">
                        <h3 className="skill-heading">{title}</h3>
                        <p className="skill-para">{subtitle}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RightSideSkill;
