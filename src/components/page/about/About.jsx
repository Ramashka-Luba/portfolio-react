import TitleH2 from "../../common/titleH2/TitleH2";
import TitleH3 from "../../common/titleH3/TitleH3";
import s from "./About.module.scss";

export const About = () => {
    return (
        <section className={s.about}>
            <div className={s.wrapper}>
                <div className={s.leftBlog}>
                    <div className={s.contentLeftBlog}>
                        <TitleH2 value="About Me" />
                        <div className={s.titleH3}>
                            <TitleH3 value="I’m HTML Developer" />
                        </div>
                        <div className={s.line}>
                            <TitleH2 />
                        </div>
                        <p className={s.text}>
                            Hi, my name is Lyuba and I am an HTML developer. I develop web and mobile applications of any complexity. I have an art education and it helps me to find a common language with a designer, and from this my projects and my code are clean. I can also make decisions on my own.
                        </p>
                        <p className={s.text}>
                            My main skills are: layout of mobile and web applications, adaptive layout, cross-browser layout, sematic layout, working with SVG, animation, I have basic Java Script skills. I also own the graphics programs Figma, Photoshop, Corel Draw, Zeplin.
                        </p>
                        <p className={s.text}>
                            In the past, I worked as a fashion designer and design engineer for 13 year
                        </p>
                        <p className={s.text}>
                            I am hardworking, well-trained, excellent teamworker and on my own I find a common language with different people. I am a motivated person, I want to gain experience and be useful. I will be glad to be part of your team.
                        </p>
                    </div>
                </div>

                <div className={s.rightBlog}>
                    <div className={s.contentRightBlog}>
                        <TitleH2 value="My Skills" />
                        <div className={s.skillsContainer}>
                            <div className={s.prodressContainer}>
                                <span className={s.name}>HTML</span>
                                <span className={s.value}>90%</span>
                                <div className={s.skills}></div>
                            </div>
                            <div className={s.prodressContainer}>
                                <span className={s.name}>CSS</span>
                                <span className={s.value}>85%</span>
                                <div className={s.skills}></div>
                            </div>
                            <div className={s.prodressContainer}>
                                <span className={s.name}>React</span>
                                <span className={s.value}>80%</span>
                                <div className={s.skills}></div>
                            </div>
                            <div className={s.prodressContainer}>
                                <span className={s.name}>Wordpress</span>
                                <span className={s.value}>70%</span>
                                <div className={s.skills}></div>
                            </div>
                            <div className={s.prodressContainer}>
                                <span className={s.name}>Bootstrap</span>
                                <span className={s.value}>60%</span>
                                <div className={s.skills}></div>
                            </div>
                            <div className={s.prodressContainer}>
                                <span className={s.name}>Gulp</span>
                                <span className={s.value}>65%</span>
                                <div className={s.skills}></div>
                            </div>
                            <div className={s.prodressContainer}>
                                <span className={s.name}>Git</span>
                                <span className={s.value}>65%</span>
                                <div className={s.skills}></div>
                            </div>
                            <div className={s.prodressContainer}>
                                <span className={s.name}>Figma</span>
                                <span className={s.value}>90%</span>
                                <div className={s.skills}></div>
                            </div>
                            <div className={s.prodressContainer}>
                                <span className={s.name}>Java Script</span>
                                <span className={s.value}>20%</span>
                                <div className={s.skills}></div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;