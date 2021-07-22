import PortfolioItem from "../../common/portfolioItem/PortfolioItem";
import s from "./Portfolio.module.scss";
import Photo1 from "./../../../assets/images/portfolio/project1.jpg";
import Photo2 from "./../../../assets/images/portfolio/project2.jpg";
import Photo3 from "./../../../assets/images/portfolio/project3.jpg";
import Photo4 from "./../../../assets/images/portfolio/project4.jpg";





const Portfolio = () => {
    return (
        <section className={s.portfolio}>
            <div className={s.wrapper}>
                <div className={s.leftBlog}>
                    <div className={s.title}>
                        PORTFOLIO
                    </div>
                </div>
                <div className={s.rightBlog}>
                    <div className={s.content}>
                        <div className={s.portfolioItem}>
                            <PortfolioItem 
                                src={Photo1}
                                alt="Photo1"
                                title="Development of a Web application for training."
                                text="This is a fully functional application. It was developed in a team with Front-end and Back-end developers. My task was to make a fully responsive layout. The application was developed in React using the SAAS preprocessor (SCSS). The Material UI library was also used."
                            />
                        </div>
                        <div className={s.portfolioItem}>
                            <PortfolioItem 
                                src={Photo2}
                                alt="Photo2"
                                title="Development of a Web application for training."
                                text="This is a fully functional application. It was developed in a team with Front-end and Back-end developers. My task was to make a fully responsive layout. The application was developed in React using the SAAS preprocessor (SCSS). The Material UI library was also used.This is a fully functional application. It was developed in a team with Front-end and Back-end developers. My task was to make a fully responsive layout. The application was developed in React using the SAAS preprocessor (SCSS). The Material UI library was also used."
                            />
                        </div>
                        <div className={s.portfolioItem}>
                            <PortfolioItem 
                                src={Photo3}
                                alt="Photo3"
                                title="Development of a Web application for training."
                                text="This is a fully functional application. It was developed in a team with Front-end and Back-end developers. My task was to make a fully responsive layout. The application was developed in React using the SAAS preprocessor (SCSS). The Material UI library was also used."
                            />
                        </div>
                        <div className={s.portfolioItem}>
                            <PortfolioItem 
                                src={Photo4}
                                alt="Photo4"
                                title="Development of a Web application for training."
                                text="This is a fully functional application. It was developed in a team with Front-end and Back-end developers. My task was to make a fully responsive layout. The application was developed in React using the SAAS preprocessor (SCSS). The Material UI library was also used."
                            />
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default Portfolio;