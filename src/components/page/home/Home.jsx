import Button from "../../common/button/Button";
import TitleH2 from "../../common/titleH2/TitleH2";
import TitleH3 from "../../common/titleH3/TitleH3";
import s from "./Home.module.scss";
import homePhoto from "./../../../assets/images/homePhoto.png";
import decor1 from "./../../../assets/images/decor/decor1.png";
import decor2 from "./../../../assets/images/decor/decor2.png";
import decor3 from "./../../../assets/images/decor/decor3.png";
import decor4 from "./../../../assets/images/decor/decor4.png";
import decor5 from "./../../../assets/images/decor/decor5.png";
import decor6 from "./../../../assets/images/decor/decor6.png";
import decor7 from "./../../../assets/images/decor/decor7.png";
import decor8 from "./../../../assets/images/decor/decor8.png";
import decor9 from "./../../../assets/images/decor/decor9.png";
import decor10 from "./../../../assets/images/decor/decor10.png";


export const Home = () => {
    return (
        <div className={s.home}>
            <div className={s.wrapper}>

                <div className={s.content}>
                    <div className={s.decor}>
                        <img className={s.shape1} src={decor1} alt="shape"/> 
                        <img className={s.shape2} src={decor2} alt="shape"/>
                        <img className={s.shape1} src={decor3} alt="shape"/>
                        <img className={s.shape2} src={decor4} alt="shape"/>
                        <img className={s.shape1} src={decor5} alt="shape"/>
                    </div>
                    
                    <div className={s.contentText}>
                        <div className={s.titleH3}><TitleH3 value="Hello, I’m" /></div>
                        <div className={s.name} >LUBA RAMASHKA</div>
                        <div className={s.titleH2}><TitleH2 value="HTML Developer" /></div>
                        <div className={s.btn}> <Button value="DOWNLOAD CV" /></div>
                    </div>

                    <div className={s.decor}>
                        <img className={s.shape2} src={decor6} alt="shape"/> 
                        <img className={s.shape1} src={decor7} alt="shape"/>
                        <img className={s.shape2} src={decor8} alt="shape"/>
                        <img className={s.shape1} src={decor9} alt="shape"/>
                        <img className={s.shape2} src={decor10} alt="shape"/>
                    </div>
                </div>
                    
                
                <img className={s.img} src={homePhoto} alt="photo" />
                
            </div>
        </div>
    );
}

export default Home;