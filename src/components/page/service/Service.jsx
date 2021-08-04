import TitleH2 from "../../common/titleH2/TitleH2";
import TitleH3 from "../../common/titleH3/TitleH3";
import s from "./Service.module.scss";

import ReactIcons from "./../../../assets/images/serviceIcon/reactIcon.svg";
import CodeIcons from "./../../../assets/images/serviceIcon/codeIcon.svg";
import DesktopIcon from "./../../../assets/images/serviceIcon/desktopIcon.svg";
import ServiceItem from "../../common/serviceItem/ServiceItem";
import Button from "./../../common/button/Button";

import Fade from 'react-reveal/Fade';


const Service = () => {
    return (
        <section className={s.service} id="service">
            <div className={s.blockTop}>
                <div className={s.wrapper}>
                    <div className={s.titleH2}>
                        <TitleH2 value="Services" />
                    </div>
                    <TitleH3 value="What I can do for you" />
                    <div className={s.serviceContainer}>
                        <div className={s.content}>
                            <Fade left>
                                <div className={s.seviceItem}>
                                    <ServiceItem
                                        src={ReactIcons}
                                        alt="react icons"
                                        text="I code sites and applications on React of any complexity (Node.js, NPM, Yarn, plus minimal logic in Java Script)."
                                    />
                                </div>
                            </Fade>
                            <Fade bottom>
                                <div className={s.seviceItem}>
                                    <ServiceItem
                                        src={CodeIcons}
                                        alt="code icons"
                                        text="Adaptive, cross-browser, simantic, valid layout, layout of email newsletters, Mobile first, Pixel-perfect, animation creation."
                                    />
                                </div>
                            </Fade>
                            <Fade right>
                                <div className={s.seviceItem}>
                                    <ServiceItem
                                        src={DesktopIcon}
                                        alt="desktop icon"
                                        text="I own the graphic editors Figma, Photoshop, I have the practice and skill of creating websites, landing pages and mobile and web applications"
                                    />
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>

            <div className={s.blockBotton}>
                <div className={s.titleH3}>
                    <TitleH3 value="Considering options for remote work and work in the office" />
                </div>
                <a className={s.btn} href="#contact">
                    <Button value="CONTACT ME" />
                </a>
            </div>
        </section>
    );
}

export default Service;