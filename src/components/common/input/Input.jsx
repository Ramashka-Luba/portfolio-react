import s from "./Input.module.scss";

const Input = (props) => {
    return (
        <label>
            <span className={s.label}>{props.label}</span>
            <input className={s.input} type={props.type} name={props.name} {...props.formik.getFieldProps(props.name)}/>
        </label>
    );
}

export default Input;