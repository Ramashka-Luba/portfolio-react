import TitleH3 from "../../common/titleH3/TitleH3";
import s from "./Home.module.scss";

export const Home = () => {
    return (
        <div className={s.home}>
            <div className={s.wrapper}>
                <div className={s.inner}>
                    <div className={s.homeContent}>
                        <div className="titleH3">
                        <TitleH3 value="Hello, I’m"/>

                        </div>
                        

                    </div>
                    <div className={s.photo}></div>
                </div>
            </div>
        </div>
    );
}

export default Home;