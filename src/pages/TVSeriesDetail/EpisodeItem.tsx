import styles from "./EpisodeItem.module.css";

interface Props {
    imageUrl: string;
    title: string;
    seasons: string;
    episode: string;
    date: string;
    desc:string;
    duration: string;
}

const EpisodeItem = (props:Props) => {
    const { imageUrl, title, seasons, episode, date, desc, duration } = props;

    return (
        <div className={styles.Container}>
            <div className={styles.imageWrapper}>
                <img src= {imageUrl} alt="episode" />
            </div>
            <div className={styles.detailWrapper}>
                <h3>{title}</h3>
                <p className={styles.episodeSummary}>
                    <span>S{seasons} E{episode}</span>
                    <b>&#x2022;</b>
                    <span>{date}</span>
                    <b>&#x2022;</b>
                    <span>{duration}</span>
                </p>
                <p className={styles.desc}>{desc}</p>
            </div>
        </div>
    );
};

export default EpisodeItem