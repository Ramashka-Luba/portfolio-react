import PortfolioItem from "../../common/portfolioItem/PortfolioItem";
import s from "./Portfolio.module.scss";
import Photo1 from "./../../../assets/images/portfolio/project1.jpg";
import Photo2 from "./../../../assets/images/portfolio/project2.jpg";
import Photo3 from "./../../../assets/images/portfolio/project3.jpg";
import Photo4 from "./../../../assets/images/portfolio/project4.jpg";

import Fade from 'react-reveal/Fade';

import ReactTypingEffect from 'react-typing-effect';



const Portfolio = () => {
    return (
        <section className={s.portfolio} id="portfolio">
            <div className={s.wrapper}>
                <div className={s.leftBlog}>
                <ReactTypingEffect text={["PORTFOLIO"]}/>
                </div>
                <div className={s.rightBlog}>
                    <Fade right cascade>
                        <div className={s.content}>
                            <div className={s.portfolioItem}>
                                <PortfolioItem
                                    href="https://pavelmalta.github.io/friday-project/#/login"
                                    src={Photo1}
                                    alt="Photo1"
                                    title="Development of a Web application for training. Learning web applications."
                                    text="This is a fully fnctional application. It was developed in a team with Front-end and Back-end developers. My task was to make a fully responsive layout. The application was developed in React using the SAAS preprocessor (SCSS). The Material UI library was also used."
                                />
                            </div>
                            <div className={s.portfolioItem}>
                                <PortfolioItem
                                    // href=""
                                    src={Photo2}
                                    alt="Photo2"
                                    title="Website development for the store."
                                    text="The site was developed in React using the Material UI library. It is versatile, fully mobile-responsive. Also, minimal logic in Java Script was connected to simplify the further work of Front-end developers."
                                />
                            </div>
                            <div className={s.portfolioItem}>
                                <PortfolioItem
                                    // href=""
                                    src={Photo3}
                                    alt="Photo3"
                                    title="Landing page."
                                    text="The task was to initially create a layout specifically for mobile versions, and only then set up a version for Desctop. The Pixel-perfect technique was also used."
                                />
                            </div>
                            <div className={s.portfolioItem}>
                                <PortfolioItem
                                    // href=""
                                    src={Photo4}
                                    alt="Photo4"
                                    title="Layout of Email letters."
                                    text="The main task was to create a universal code that would be understandable for various email clients and would be equally beautifully displayed on all devices. In particular, instead of a block layout, a table layout was applied, universal tags and attributes were used."
                                />
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;