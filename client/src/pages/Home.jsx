import HeroSection from "../components/HomeComponents/HeroSection";
import HomeServices from "../components/HomeComponents/HomeServices";
import Plan from "../components/HomeComponents/Plan";
import YouTubeEmbed from "../components/HomeComponents/YoutubeEmbed";



const Home = () => {
    return (
      <>
        <HeroSection />
        <YouTubeEmbed />
        <HomeServices />
        <Plan/>
      </>
    );
}
export default Home;