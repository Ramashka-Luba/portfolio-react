import s from "./Button.module.scss";

const Button = (props) => {
    return (
        <button className={s.button} type={props.type}>
            <span className= {s.span}>
                {props.value}
            </span>
        </button>
    );
}

export default Button;