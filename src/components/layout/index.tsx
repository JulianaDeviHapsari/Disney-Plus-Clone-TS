import styles from  "./index.module.css";
import {PropsWithChildren} from "react";

const Layout = (props : PropsWithChildren <unknown> ) => {
    const {children} = props;
    
    return (
        <div className={styles.container}>
        < Sidebar />
        </div>
    );
};

export default Layout; 