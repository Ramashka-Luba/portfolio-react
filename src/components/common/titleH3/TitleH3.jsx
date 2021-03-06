import s from "./TitleH3.module.scss";

const TitleH3 = (props) => {
    return (
        <h3 className={s.titleH3}>
            {props.value}
        </h3>
    );
}

export default TitleH3;