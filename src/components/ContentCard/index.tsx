import styles from "./index.module.css";

interface Props {
    titles : string;
    description: string;
    posterImage: string;
    bannerImage:  string;
}
const ContentCard = (props : Props) => {
    const { titles, description, posterImage, bannerImage } = props;

    return (
        <div className={styles.container}>
            <div className={styles.content}>
            <div className={styles.poster}>
                <img 
                src={posterImage}
                width="100%"
                />
            </div>
    </div>
            <div className={styles.detail}>
            <div className= {styles.bannerWrapper}>
                <img 
                src={bannerImage} 
                alt="" 
                width="100%"
                />
            </div>
            <div className={styles.detailWrapper}>
                <h3>{titles}</h3>
                <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ContentCard