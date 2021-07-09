import Button from "../../common/button/Button";
import TitleH2 from "../../common/titleH2/TitleH2";
import TitleH3 from "../../common/titleH3/TitleH3";
import s from "./Home.module.scss";
import homePhoto from "./../../../assets/images/homePhoto.png";

export const Home = () => {
    return (
        <div className={s.home}>
            <div className={s.wrapper}>

                <div className={s.content}>
                    <div className={s.contentText}>
                        <div className={s.titleH3}><TitleH3 value="Hello, I’m" /></div>
                        <div className={s.name} >LUBA RAMASHKA</div>
                        <div className={s.titleH2}><TitleH2 value="HTML Developer" /></div>
                        <div className={s.btn}> <Button value="DOWNLOAD CV" /></div>
                    </div>
                </div>

                <div className={s.photo}>
                    <img className={s.img} src={homePhoto} alt="photo" />
                </div>
            </div>
        </div>
    );
}

export default Home;