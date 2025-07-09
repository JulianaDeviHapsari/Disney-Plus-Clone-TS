import type { PropsWithChildren } from "react";
import styles from "./index.module.css";
import clsx from "clsx";

    interface MenuItemProps extends PropsWithChildren<unknown> {
        icon: string;
    }
    const MenuItem = (props: PropsWithChildren<MenuItemProps>) => {
        const {children, icon } = props ;

        return (
        <li className = {styles.menuItem}>
            <span className={clsx (["material-symbols-outlined", styles.menuIcon])}>
                {icon}
            </span>
            <span className={styles.menuName}> {children} </span>
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
        <MenuItem icon="search"> Search </MenuItem>
        <MenuItem icon="home"> Home </MenuItem>
        <MenuItem icon="movie"> Movies </MenuItem>
        <MenuItem icon="tv_gen"> Series </MenuItem>
        </ul>
        <div className={styles.overlay} />
        </nav>
    );
};

export default Sidebar;