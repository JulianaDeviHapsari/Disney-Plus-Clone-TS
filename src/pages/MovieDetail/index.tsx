import ImageBanner from "../../components/ImageBanner";
import BannerMask from "../../components/BannerMask";
import BannerDetail from "../../components/BannerDetail";
import ContentCard from "../../components/ContentCard";
import ScrollableSection from "../../components/ScrollableSection";
import SectionItem from "../../components/ScrollableSection/SectionItem";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { API_KEY } from "../../constants";
 
const MoviesDetail = () => {
    const navigate = useNavigate();
    const { id}  = useParams();

    const { data } = useFetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
    const { data: similarMoviesData } = useFetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}`);

    console.log({
        data,
        similarMoviesData,
    });

    return (
        <div> 
            <ImageBanner 
            alt={ data?.title}
            src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
            />
            <BannerDetail
            title={data?.title}
            overview={data?.overview}
            releaseDate={data?.release_date}
            genres={data?.genres?.map((genre: any) => ({
                id: genre.id, 
                name:genre.name,
            }))}

            language={data?.original_language}
            />
            <BannerMask>
            <ScrollableSection title="Similar Movies"> 
             {similarMoviesData?.results.map((movieItem: any)=> (  
            <SectionItem key={movieItem.id}> 
            <ContentCard
                onClick={()=> navigate(`/movie/${movieItem.id}`)}
                title={movieItem.title}
                description={movieItem.overview}
                posterImage={`https://image.tmdb.org/t/p/original/${movieItem.poster_path}`}
                bannerImage={`https://image.tmdb.org/t/p/original/${movieItem.backdrop_path}`}
            />
            </SectionItem> 
            ))}
            </ScrollableSection>
            </BannerMask>
        </div>
    );
};

export default MoviesDetail