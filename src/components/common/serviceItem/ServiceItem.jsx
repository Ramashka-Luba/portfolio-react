import s from "./ServiceItem.module.scss";
// import ReactIcons from "./../../../assets/images/serviceIcon/reactIcon.svg";
// import CodeIcons from "./../../../assets/images/serviceIcon/codeIcon.svg";
// import DesktopIcon from "./../../../assets/images/serviceIcon/desktopIcon.svg";



export const ServiceItem= ( props ) => {
    return (
        <div className={s.serviceItem} style={props.style}>
            <img className={s.icon} src={props.src} alt={props.alt}/>
            <p className={s.text}>{props.text}</p>
        </div>
    )
}

export default ServiceItem;