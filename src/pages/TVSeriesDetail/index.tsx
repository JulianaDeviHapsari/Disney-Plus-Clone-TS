import ImageBanner from "../../components/ImageBanner";
import BannerMask from "../../components/BannerMask";
import BannerDetail from "../../components/BannerDetail";
import styles from "./index.module.css";
import EpisodeItem from "./EpisodeItem";
 
const TVSeriesDetail = () => {
    return (
        <div> 
            <ImageBanner />
            <BannerDetail/>
            <BannerMask>
                <h1 className={styles.seasonsTitle}>Seasons</h1>
                <div className={styles.tabSection}>
                    <span data-active="true">Season 1</span>
                    <span>Season 2</span>
                    <span>Season 3</span>
                </div>
                <div>
                    <div>
                        {/*Episode item*/}
                        <EpisodeItem 
                        imageUrl=""
                        title='Episode Title'
                        seasons="1"
                        episode="1"
                        duration="32m"
                        date="01-01-2025"
                        desc="Lorem Ipsum"
                        />
                        {/*Episode item*/}
                        <EpisodeItem 
                        imageUrl=""
                        title='Episode Title'
                        seasons="1"
                        episode="1"
                        duration="32m"
                        date="01-01-2025"
                        desc="Lorem Ipsum"
                        />
                    </div>
                    
                </div>
            </BannerMask>
        </div>
    );
};

export default TVSeriesDetail