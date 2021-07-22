import s from "./Progress.module.scss";

const Progress= ( props ) => {
    return (
        <div className={s.progress}>
            <span className={s.name}>{props.name}</span>
            <span className={s.value}>{props.value}</span>
            <div className={s.skills} style={props.style}></div>
        </div>
    )
}

export default Progress;