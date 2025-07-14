import type { PropsWithChildren } from "react";
import styles from "./index.module.css";
import clsx from "clsx";
import { Link } from "react-router-dom";

    interface MenuItemProps extends PropsWithChildren<unknown> {
        icon: string;
        url?: string
    }
    const MenuItem = (props: PropsWithChildren<MenuItemProps>) => {
        const {children, icon, url } = props ;

        return (
        <li className = {styles.menuItem}>
            <Link to={url ?? "#"} className={styles.link}>
            <span className={clsx (["material-symbols-outlined", styles.menuIcon])}>
                {icon}
            </span>
            <span className={styles.menuName}> {children} </span>
            </Link>
        </li>
    );
};
    
    const Sidebar = () => {
    return (
        <nav className={styles.container}>
         <img 
         width= "51px"
         className={styles.logo} 
         src="https://img.hotstar.com/image/upload/f_auto,q_90,w_3840/v1710482713/feature/rebranding/disney-plus-hotstar-logo.svg" 
         />
        <ul className={styles.menuWrapper}>
        <MenuItem url="/search" icon="search"> Search </MenuItem>
        <MenuItem url="/" icon="home"> Home </MenuItem>
        <MenuItem url="/movies" icon="movie"> Movies </MenuItem>
        <MenuItem url="/tvseries" icon="tv_gen"> Series </MenuItem>
        </ul>
        <div className={styles.overlay} />
        </nav>
    );
};

export default Sidebar;