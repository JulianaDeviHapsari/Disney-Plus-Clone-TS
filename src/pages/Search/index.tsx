import ContentCard from "../../components/ContentCard";
import styles from "./index.module.css";

const Search = () => {
    return (
        <div>
            <div className = {styles.searchBar}>
                <span 
                    style={{
                    color:'white',
                }}
                className="material-symbols-outlined">
                    search
                </span>
                <input type="text" placeholder="Movies, shows, and more"/>
            </div>
            <div className={styles.contentGrid}>
                {
                    Array(15).fill(0).map((_,index) => (
                        <ContentCard
                            titles="Batman"
                            description="The Batman is a 2022 American 
                            superhero film based on the DC Comics character Batman. 
                            Directed by Matt Reeves from a screenplay he wrote with Peter Craig, it is a reboot of the Batman film franchise produced by DC Films. Robert Pattinson stars as Bruce Wayne / Batman alongside Zoë Kravitz, Paul Dano, Jeffrey Wright, John Turturro, Peter Sarsgaard, Andy Serkis, and Colin Farrell. The film sees Batman, in his second year fighting crime in Gotham City, uncover corruption with ties to his own family while pursuing the Riddler (Dano), a mysterious serial killer targeting the city's elite."
                            posterImage="https://images-cdn.ubuy.ae/634d0cc50dae823b9a54f97f-the-batman-movie-poster-i-am-the.jpg"
                            bannerImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFOgNp9sUMI-9pvFItx1AORIHR8Pj3O84oF9CgvaxOH82XN51L2GSJmxrmHR9s9l5gNdY&usqp=CAU"
                        />
                    ))}
            </div>
        </div>
    );
};

export default Search