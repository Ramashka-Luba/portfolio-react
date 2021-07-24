import s from "./PortfolioItem.module.scss";

const PortfolioItem = (props) => {
    return (
        <div className={s.portfolioItem}>
            <a href={props.href} className={s.link}>
                <img className={s.photo} src={props.src} alt={props.alt}/>  
            </a>
            <div className={s.title}>{props.title}</div>
            <p className={s.text}>{props.text}</p>
        </div>
    );
}

export default PortfolioItem;