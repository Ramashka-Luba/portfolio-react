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
                    <span>PORTFOLIO</span>
                    {/* <ReactTypingEffect text={["PORTFOLIO"]}/> */}
                </div>
                <div className={s.rightBlog}>
                    <Fade right cascade>
                        <div className={s.content}>
                            <div className={s.portfolioItem}>
                                <PortfolioItem
                                    href="https://pavelmalta.github.io/friday-project/#/login"
                                    src={Photo1}
                                    alt="Photo1"
                                    title="Development of Web application for education"
                                    text="This is fully functional application. It was developed in a team with Front-end and Back-end developers. 
                                    My task was to make fully responsive layout. The application was developed in React using SAAS preprocessor (SCSS). 
                                    The Material UI library was also used"
                                />
                            </div>
                            <div className={s.portfolioItem}>
                                <PortfolioItem
                                    href="https://ramashka-luba.github.io/React__shop/"
                                    src={Photo2}
                                    alt="Photo2"
                                    title="Website development for the store"
                                    text="The site was developed in React using Material UI library. It is multipage, fully mobile-responsive.
                                        Also minimal logic in Java Script was implemented to simplify the further work of Front-end developers"
                                />
                            </div>
                            {/* Временно */}
                            <div className={s.portfolioItem}>
                                <a href="" className={s.link}>
                                    <img className={s.photo} src={Photo3} />
                                </a>
                                <div className={s.title}>Landing page</div>
                                <p className={s.text}>The initial task was to create a layout specifically for mobile versions and only then to set up a version for Desktop. 
                                    Pixel-perfect technique was also used</p>
                            </div>
                            <div className={s.portfolioItem}>
                                <a href="" className={s.link}>
                                    <img className={s.photo} src={Photo4} />
                                </a>
                                <div className={s.title}>Layout of Email letters</div>
                                <p className={s.text}>The main task was to create a universal code that would be understandable for various email clients and would be beautifully displayed on all devices at the same time. In particular, table layout was applied instead of block layout, also universal tags and attributes were used</p>
                            </div>

                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;