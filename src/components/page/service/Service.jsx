import TitleH2 from "../../common/titleH2/TitleH2";
import TitleH3 from "../../common/titleH3/TitleH3";
import s from "./Service.module.scss";

import ReactIcons from "./../../../assets/images/serviceIcon/reactIcon.svg";
import CodeIcons from "./../../../assets/images/serviceIcon/codeIcon.svg";
import DesktopIcon from "./../../../assets/images/serviceIcon/desktopIcon.svg";
import ServiceItem from "../../common/serviceItem/ServiceItem";
import Button from "./../../common/button/Button";


export const Service = () => {
    return (
        <section className={s.service}>
            <div className={s.blockTop}>
                <TitleH2 value="Services"/>
                <div className={s.titleH3}>
                    <TitleH3 value="What I can do for you"/>
                </div>
                <div className={s.serviceContainer}>
                    <div className={s.content}>
                        <ServiceItem
                        src={ReactIcons}
                        alt="react icons"
                        text="I code sites and applications on React of any complexity (Node.js, NPM, Yarn, plus minimal logic logic in Java Script)."
                        />
                        <ServiceItem
                        src={CodeIcons}
                        alt="code icons"
                        text="Adaptive, cross-browser, simantic, valid layout, layout of email newsletters, Mobile first, Pixel-perfect, animation creation."
                        />
                        <ServiceItem
                        src={DesktopIcon}
                        alt="desktop icon"
                        text="I own the graphic editors Figma, Photoshop, I have the practice and skill of creating websites, landing pages and mobile and web applications"
                        />
                    </div>
                </div>
            </div>
            <div className={s.blockBotton}>
                <TitleH3 value="Considering options for remote work and work in the office"/>
                <Button value="WRITE ME"/>
            </div>
        </section>
    );
}

export default Service;