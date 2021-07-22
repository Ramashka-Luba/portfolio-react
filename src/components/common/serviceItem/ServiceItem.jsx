import s from "./ServiceItem.module.scss";


const ServiceItem= ( props ) => {
    return (
        <div className={s.serviceItem} style={props.style}>
            <img className={s.icon} src={props.src} alt={props.alt}/>
            <p className={s.text}>{props.text}</p>
        </div>
    )
}

export default ServiceItem;