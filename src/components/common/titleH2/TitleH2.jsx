import s from "./TitleH2.module.scss";

export const TitleH2 = (props) => {
    return (
        <h3 className={s.titleH2}>
            {props.value}
        </h3>
    );
}

export default TitleH2;