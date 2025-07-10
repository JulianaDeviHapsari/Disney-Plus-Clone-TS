import ImageBanner from "../../components/ImageBanner";
import BannerMask from "../../components/BannerMask";
import BannerDetail from "../../components/BannerDetail";
import ContentCard from "../../components/ContentCard";


const Home = () => {

    return (
        <div>
            <ImageBanner />
            <BannerMask/>
            <BannerDetail/>
            <div style={{
                width:"200px", 
            }}
            >     
                    </div>   
            <ContentCard/>
        </div>
    );
};

export default Home