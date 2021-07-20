import s from "./Menu.module.scss";

export const Menu = ({ header, items, active, setActive }) => {
    return (
        <div className={active ? s.menuActive : s.menu} onClick={() => setActive(false)}>
            <div className={s.blur}/>
            <div className={s.menuContent} onClick={e => e.stopPropagation()}>
                {/* <div className={s.menuHeader}>{header}</div> */}
                <ul>
                    {items.map(item =>
                        <li>
                            <a href={item.href}>{item.value}</a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Menu;