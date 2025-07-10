import styles from './index.module.css';
import clsx from 'clsx';

const BannerDetail = () => {
    return (
            <div className ={styles.container}>
                <div className={styles.details}>
                    <h1 className={styles.titles}>Title</h1>
                    <div className={clsx(styles.section, styles.section1)}>
                    <span>2025</span>
                    <i>&#x2022;</i>
                    <span>English</span>
                    </div>
                    <div className={clsx(styles.section, styles.section2)}>
                    <p>TEST OVERVIEW SECTIONTEST OVERVIEW SECTIONTEST OVERVIEW SECTION TEST OVERVIEW SECTION TEST OVERVIEW SECTION TEST OVERVIEW SECTION</p>
                    </div>
                    <div className={clsx(styles.section, styles.section3)}>
                        {['Horror', "Action"].map((genre, index)=> (
                            <>
                            {index > 0 && <span>&#124;</span>}
                            <b key={genre}>{genre}</b>
                            </>
                        ))}
                    </div>
                </div>
            </div>
    );
};

export default BannerDetail