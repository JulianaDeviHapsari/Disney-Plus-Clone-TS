import ImageBanner from "../../components/ImageBanner";
import BannerMask from "../../components/BannerMask";
import BannerDetail from "../../components/BannerDetail";
import ContentCard from "../../components/ContentCard";
import ScrollableSection from "../../components/ScrollableSection";
import SectionItem from "../../components/ScrollableSection/SectionItem";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch.ts";

const API_KEY = "8fafde118eb2356812eb809bc7fa4ca5";
 
const Home = () => {
    const navigate = useNavigate();
    const {loading, data } = useFetch(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`);

        console.log({
            loading,
            data,
        });

    return (
        <div> 
            <ImageBanner />
            <BannerDetail/>
            <BannerMask>
            <ScrollableSection title="Popular"> 
             {!loading && data && data.results.map((content, index)=> (  
         <SectionItem> 
            <ContentCard
                onClick={()=> navigate("/content/bla")}
                titles={content.title}
                description={content.overview}
                posterImage={`https://image.tmdb.org/t/p/w500/${content.poster_path}`}
                bannerImage={`https://image.tmdb.org/t/p/w500/${content.backdrop_path}`}
            />
           </SectionItem> 
            ))}  
            </ScrollableSection>
            </BannerMask>
        </div>
    );
};

export default Home