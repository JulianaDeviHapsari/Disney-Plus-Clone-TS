import styles from "./index.module.css";
import type { PropsWithChildren } from "react";

const BannerMask = (props: PropsWithChildren<unknown>) => {
  const { children } = props;
  return (
            <div className={styles.container}>
            <div className={styles.topMask}/>
             <div className={styles.bottomMask}>
              {children}
             </div>
            </div>
    );
};

export default BannerMask;