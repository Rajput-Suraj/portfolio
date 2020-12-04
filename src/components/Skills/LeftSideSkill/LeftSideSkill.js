import React from "react";

const LeftSideSkill = ({ ImageSrc, title, subtitle }) => {
    return (
        <>
            <div className="row">
                <div className="col-md-12 skills">
                    <div className="col-md-6 css-skill-para">
                        <h3 className="skill-heading">{title}</h3>
                        <p className="skill-para">{subtitle}</p>
                    </div>
                    <div className="col-md-6 css-img">
                        <ImageSrc className="middle-section-avatar-img" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default LeftSideSkill;
