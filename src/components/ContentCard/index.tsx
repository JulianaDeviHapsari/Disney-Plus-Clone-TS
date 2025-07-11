import styles from "./index.module.css";


const ContentCard = () => {

    return (
        <div className={styles.container}>
            <div className={styles.content}>
            <div className={styles.poster}>
                <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuzXWWnCDypZVqZgbLfKB2x8d_Is9HeNbpRQ&s"
                width="100%"
                />
            </div>
    </div>
            <div className={styles.detail}>
            <div className= {styles.bannerWrapper}>
                <img 
                src="https://i.ytimg.com/vi/KdA82prVlAw/maxresdefault.jpg" 
                alt="" 
                width="100%"
                />
            </div>
            <div className={styles.detailWrapper}>
                <h3>Title</h3>
                <p>description</p>
                </div>
            </div>
        </div>
    );
};

export default ContentCard