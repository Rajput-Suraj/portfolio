import React from "react";
import { ReactComponent as Logo } from "../../assets/pencil.svg";
import LineBreak from "../../components/LineBreak/LineBreak";
import Project from "../../components/Project/Project";
import Ecommerce from "../../assets/ecommerce.png";
import Global from "../../assets/globalscholarship.png";
import Vruk from "../../assets/vruk.png";
import Cfolios from "../../assets/cfolios.png";
import Equi from "../../assets/equi.png";
import Tazor from "../../assets/tazor.png";
import Spotify from "../../assets/spotify.png";
import Youtube from "../../assets/youtube.png";

const Work = () => {
    return (
        <>
            <section id="middle">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <article>
                                <Logo className="middle-section-avatar-img" />
                                <h3>What I've been up to.</h3>
                                <p className="introduction">
                                    Here's a selection of some recent work.
                                </p>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
            <LineBreak />
            <Project
                id="project-one"
                imageUrl={Ecommerce}
                title="Mini E-Commerce Store"
                tech="React.js, Material-UI, Commerce.js"
                link="https://suraj-rajput-ecommerce.netlify.app/"
                description="E-Commerce Store is an online mini web store, Front-end is build using React.js, Material UI and for back-end I've used commerce.js API which provides complete back-end functionality. User can add, remove, and view items from the cart. And for payment gateway I've used Stripe Payment Gateway."
            />
            <Project
                id="project-two"
                imageUrl={Spotify}
                title="Spotify Clone"
                tech="React.js, Material-UI, Spotify API"
                link="#"
                description="Build on react.js this spotify clone has little bit similar design of original spotify, and also used Spotify API for user login(Authentication), Whenever user logs in using there spotify account, playlists of that user is fetched from api and displayed under sidebar section."
            />
            <Project
                id="project-three"
                imageUrl={Youtube}
                title="Youtube Clone"
                tech="React.js, Material-UI, YouTube API"
                link="https://rajput-suraj.github.io/youtube-clone/"
                description="YouTube Clone developed using React.js, React-Router-Dom and Material UI provides the same interface like YouTube and we have a static search feature where user can type anything clicks on search button then that user is redirected to search page."
            />
            <Project
                id="project-one"
                imageUrl={Global}
                title="The Global Scholarship"
                tech="CodeIgniter 3, HTML5, CSS3, Bootstrap 4, JS"
                link="https://www.theglobalscholarship.org/"
                description="TheGlobalScholarship is endeavoring to bridge the gap between scholarship providers and scholarship seekers. It allows both seekers and providers to access curated scholarship information across the globe."
            />
            <Project
                id="project-two"
                imageUrl={Vruk}
                title="Vrukshathon"
                tech="CodeIgniter 3, HTML5, CSS3, Bootstrap 4, JS"
                link="https://www.vrukshathon.in/"
                description="Vrukshathon is a social event to bring in awareness to the society with the benefits of being in Nature and environmental protection. It is a marathon, going to be conducted with the motive of forestation."
            />
            <Project
                id="project-three"
                imageUrl={Cfolios}
                title="Cfolios Website"
                tech="CodeIgniter 3, HTML5, CSS3, Bootstrap 4"
                link="http://cfoliosweb.tdc3030.com/homepage"
                description="CFOLIOS is one of the best emerging companies in designing and construction solution providers. We have developed cfolios website to make it mobile responsive."
            />
            <Project
                id="project-four"
                imageUrl={Equi}
                title="Equiventas Website"
                tech="CodeIgniter 3, HTML5, CSS3, Bootstrap 4"
                link="https://equiventas.com/"
                description="Basically i've revamped website to make it responsive."
            />
            <Project
                id="project-three"
                imageUrl={Tazor}
                title="Tazor"
                tech="CodeIgniter 3, HTML5, CSS3, Bootstrap 4"
                link="https://www.tazor.ly/"
                description="Tazor is Event management based company located in Libya. We have developed front-end as well as back-end of the website."
            />
        </>
    );
};

export default Work;
