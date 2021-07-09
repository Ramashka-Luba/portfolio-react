import s from "./Button.module.scss";

export const Button = (props) => {
    return (
        <button className={s.button}>
            <span className= {s.span}>
                {props.value}
            </span>
        </button>
    );
}

export default Button;