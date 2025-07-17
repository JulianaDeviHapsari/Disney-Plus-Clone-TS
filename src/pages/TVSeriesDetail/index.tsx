import ImageBanner from "../../components/ImageBanner";
import BannerMask from "../../components/BannerMask";
import BannerDetail from "../../components/BannerDetail";
import styles from "./index.module.css";
import EpisodeItem from "./EpisodeItem";
import { API_KEY } from "../../constants";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
 
const TVSeriesDetail = () => {

    const [activeSeasons, setActiveSeason] = useState(0);

    const { id } = useParams();
    const { data } = useFetch(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`
    );

    const { data : seasonData } = useFetch(`https://api.themoviedb.org/3/tv/${id}/season/${activeSeasons}?api_key=${API_KEY}`)

    return (
        <div> 
            <ImageBanner 
            alt={data?.name}
            src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
            />
            <BannerDetail
                title={data?.name}
                overview={data?.overview}
                releaseDate={data?.first_air_date}
                genres={data?.genres?.map((genre: any) => ({
                    id: genre.id, 
                    name:genre.name,
                }))}
                language={data?.original_language}
            />
            <BannerMask>
                <h1 className={styles.seasonsTitle}>Seasons</h1>
                <div className={styles.tabSection}>
                    {data?.seasons?.map((seasonItem: any, idx: number) => {
                            return (
                            <span data-active={seasonItem.season_number === activeSeasons}
                            onClick= {() => setActiveSeason(seasonItem.season_number)}
                            key={seasonItem.id || idx}>
                                {seasonItem.name}
                            </span>
                        );
                    })}
                </div>
                <div>
                    {
                        seasonData?.episodes?.map((episode: any) => (
                            <EpisodeItem 
                                key={episode.id}
                                imageUrl={`https://image.tmdb.org/t/p/w500/${episode.still_path}`}
                                title={episode.name}
                                seasons={seasonData?.season_number?.toString() || ""}
                                episode={episode.episode_number?.toString() || ""}
                                duration={`${episode.runtime || "?"}m`}
                                date={episode.air_date || ""}
                                desc={episode.overview || ""}
                            />
                        ))             
                    }
                </div>
            </BannerMask>
        </div>
    );
};

export default TVSeriesDetail