import React from "react";

const Project = ({ id, imageUrl, title, tech, link, description }) => {
    return (
        <>
            <section id={id} className="work-shots">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="shot">
                                <img
                                    src={imageUrl}
                                    className="lazy"
                                    alt="Project-Img"
                                    height="441"
                                    width="900"
                                />
                            </div>
                            <div className="shot-info">
                                <h2>{title}</h2>
                                <h3>{tech}</h3>
                                <p>{description}</p>
                                <p className="btn-hldr shot-btn">
                                    <a
                                        className="main-btn new-window"
                                        href={link}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Visit Website
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Project;
