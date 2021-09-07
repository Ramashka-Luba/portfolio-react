import TitleH2 from "../../common/titleH2/TitleH2";
import TitleH3 from "../../common/titleH3/TitleH3";
import Progress from "./../../common/progress/Progress";
import s from "./About.module.scss";
import LinkedIn from "./../../../assets/images/social/LinkedIn.svg";
import Instagram from "./../../../assets/images/social/Instagram.svg";
import Git from "./../../../assets/images/social/Git.svg";
import Telegram from "./../../../assets/images/social/Telegram.svg";
import Email from "./../../../assets/images/social/Email.svg"

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
                                Hi, my name is Luba and I am HTML developer. I develop web and mobile applications of any complexity. I code mobile and web applications. I use React as my main tool.
                            </p>
                            <p className={s.text}>
                                My main skills are: layout of mobile and web applications, adaptive layout, cross-browser layout, sematic layout, working with SVG, animation. I have basic Java Script skills. I also have proficiency in graphic software Figma, Photoshop, Corel Draw, Zeplin.
                            </p>
                            <p className={s.text}>
                                Now I am improving my skills in this direction and expanding them with new technologies. In my spare time I participate in layout marathons and improve my English.
                            </p>
                            <p className={s.text}>
                                In the future I want to continue learning Java Script and move towards Front-end development.
                            </p>
                            <p className={s.text}>
                                I would like to find a project /full-time job in creative company with interesting tasks and modern team!
                            </p>
                            <p className={s.text}>
                                I will be glad to be a part of your team.
                            </p>
                            <div className={s.photo}>
                                <a href="https://www.linkedin.com/in/liubou-ramashka-9b703519a/">
                                    <img src={LinkedIn} alt="Linked In" className={s.photoItem} />
                                </a>
                                <a href="https://github.com/Ramashka-Luba">
                                    <img src={Git} alt="Git" className={s.photoItem} />
                                </a>
                                <a href="https://t.me/Ramashka_Luba">
                                    <img src={Telegram} alt="Telegram" className={s.photoItem} />
                                </a>
                                <a href="mailto:lromashko911@gmail.com">
                                    <img src={Email} alt="Email" className={s.photoItem} />
                                </a>
                                <a href="https://www.instagram.com/ramashka_luba/">
                                    <img src={Instagram} alt="Instagram" className={s.photoItem} />
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
                                    value="50%"
                                    style={{ width: "50%" }}
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
                                    value="10%"
                                    style={{ width: "10%" }}
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