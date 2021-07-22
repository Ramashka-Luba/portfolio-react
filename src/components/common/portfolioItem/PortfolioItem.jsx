import s from "./PortfolioItem.module.scss";

const PortfolioItem = (props) => {
    return (
        <div className={s.portfolioItem}>
            <img className={s.photo} src={props.src} alt={props.alt}/>
            <div className={s.title}>{props.title}</div>
            <p className={s.text}>{props.text}</p>
        </div>
    );
}

export default PortfolioItem;