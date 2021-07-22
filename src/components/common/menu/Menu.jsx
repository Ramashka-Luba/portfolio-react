import s from "./Menu.module.scss";

const Menu = ({ items, active, setActive }) => {
    return (
        <div className={active ? `${s.menu} ${s.menuActive}` : s.menu} onClick={() => setActive(false)}>
            <div className={s.blur}/>
            <div className={s.menuContent} onClick={e => e.stopPropagation()}>
                <ul>
                    {items.map(item =>
                        <li>
                            <a className={s.link} href={item.href}>{item.value} </a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Menu;