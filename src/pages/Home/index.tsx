import ImageBanner from "../../components/ImageBanner";
import BannerMask from "../../components/BannerMask";
import BannerDetail from "../../components/BannerDetail";
import ContentCard from "../../components/ContentCard";
import ScrollableSection from "../../components/ScrollableSection";
import SectionItem from "../../components/ScrollableSection/SectionItem";


const Home = () => {

    return (
        <div>
            <ImageBanner />
            <BannerDetail/>
            <BannerMask>
            <ScrollableSection title="Popular Movies"  >
             { Array(12).fill(0).map((_, index)=> (  
         <SectionItem> 
            <ContentCard
                titles="Batman"
                description="The Batman is a 2022 American 
                superhero film based on the DC Comics character Batman. 
                Directed by Matt Reeves from a screenplay he wrote with Peter Craig, it is a reboot of the Batman film franchise produced by DC Films. Robert Pattinson stars as Bruce Wayne / Batman alongside Zoë Kravitz, Paul Dano, Jeffrey Wright, John Turturro, Peter Sarsgaard, Andy Serkis, and Colin Farrell. The film sees Batman, in his second year fighting crime in Gotham City, uncover corruption with ties to his own family while pursuing the Riddler (Dano), a mysterious serial killer targeting the city's elite."
                posterImage="https://images-cdn.ubuy.ae/634d0cc50dae823b9a54f97f-the-batman-movie-poster-i-am-the.jpg"
                bannerImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFOgNp9sUMI-9pvFItx1AORIHR8Pj3O84oF9CgvaxOH82XN51L2GSJmxrmHR9s9l5gNdY&usqp=CAU"
            />
           </SectionItem> 
            ))}  
            </ScrollableSection>
            </BannerMask>
        </div>
    );
};

export default Home