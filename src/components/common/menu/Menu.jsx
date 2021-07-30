import s from "./Menu.module.scss";
import { Link, animateScroll as scroll } from "react-scroll";

const Menu = ({ items, active, setActive }) => {
    return (
        <div className={active ? `${s.menu} ${s.menuActive}` : s.menu} onClick={() => setActive(false)}>
            <div className={s.blur}/>
            <div className={s.menuContent}>
                <ul>
                    {items.map(item =>
                        <li>
                            {/* <a className={s.link} href={item.href}>{item.value}</a> */}
                            <Link
                                className={s.link}
                                // activeClass="active"
                                to={item.href}
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                onSetActive={()=>setActive(false)}
                            >{item.value}</Link>
                        </li>
                        
                    )}
                </ul>
                
            </div>
        </div>
    );
}

export default Menu;