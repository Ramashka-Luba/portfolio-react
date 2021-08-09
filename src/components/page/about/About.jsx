import TitleH2 from "../../common/titleH2/TitleH2";
import TitleH3 from "../../common/titleH3/TitleH3";
import Progress from "./../../common/progress/Progress";
import s from "./About.module.scss";
import LinkedIn from "./../../../assets/images/social/LinkedIn.svg";
import Instagram from "./../../../assets/images/social/Instagram.svg";
import Fade from 'react-reveal/Fade';


const About = () => {
    return (
        <section className={s.about} id="about">
            <div className={s.wrapper}>
                <div className={s.leftBlog}>
                    <Fade bottom>
                        <div className={s.contentLeftBlog}>
                            <TitleH2 value="About Me" />
                            <div className={s.titleH3}>
                                <TitleH3 value="I’m HTML Developer" />
                            </div>
                            <div className={s.line}>
                                <TitleH2 />
                            </div>
                            <p className={s.text}>
                            Hi, my name is Luba and I am HTML developer. I develop web and mobile applications of any complexity. I have art education and it helps me to find common ground with a designer and this is why my projects and my code are clean. I can also make decisions on my own.
                            </p>
                            <p className={s.text}>
                            My main skills are: layout of mobile and web applications, adaptive layout, cross-browser layout, sematic layout, working with SVG, animation. I have basic Java Script skills. I also have proficiency in graphic software Figma, Photoshop, Corel Draw, Zeplin.
                            </p>
                            <p className={s.text}>
                            Previously I was working as a fashion designer and design engineer for 13 years.
                            </p>
                            <p className={s.text}>
                            I am hardworking, well-learning, excellent teamworker and can find common ground with different people. I am motivated person, that wants to gain experience and be useful. I will be glad to be a part of your team.
                            </p>
                            <div className={s.photo}>
                                <a href="https://www.linkedin.com/in/liubou-ramashka-9b703519a/">
                                    <img src={LinkedIn} alt="Linked In" className={s.photoItem} />
                                </a>
                                <a href="https://www.instagram.com/ramashka_luba/">
                                    <img src={Instagram} alt="Linked In" className={s.photoItem} />
                                </a>
                            </div>
                        </div>
                    </Fade>
                </div>

                <div className={s.rightBlog}>
                    <Fade bottom>
                        <div className={s.contentRightBlog}>
                            <TitleH2 value="My Skills" />
                            <div className={s.skillsContainer}>
                                <Progress
                                    name="HTML5"
                                    value="80%"
                                    style={{ width: "80%" }}
                                />
                                <Progress
                                    name="CSS3"
                                    value="85%"
                                    style={{ width: "85%" }}
                                />
                                <Progress
                                    name="React"
                                    value="40%"
                                    style={{ width: "40%" }}
                                />
                                <Progress
                                    name="Wordpress"
                                    value="30%"
                                    style={{ width: "30%" }}
                                />
                                <Progress
                                    name="Bootstrap"
                                    value="70%"
                                    style={{ width: "70%" }}
                                />
                                <Progress
                                    name="Gulp"
                                    value="60%"
                                    style={{ width: "60%" }}
                                />
                                <Progress
                                    name="Git"
                                    value="40%"
                                    style={{ width: "40%" }}
                                />
                                <Progress
                                    name="Figma"
                                    value="90%"
                                    style={{ width: "90%" }}
                                />
                                <Progress
                                    name="Java Script"
                                    value="20%"
                                    style={{ width: "20%" }}
                                />
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
}

export default About;