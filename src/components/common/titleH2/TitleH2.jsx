import s from "./TitleH2.module.scss";

export const TitleH2 = (props) => {
    return (
        <h2 className={s.titleH2}>
            {props.value}
        </h2>
    );
}

export default TitleH2;