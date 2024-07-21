import Carousel from "./ui/Carousel";
import LatestNews from "./ui/Latest News";


export default function LandingPage() {
    return <>
        {/* crousel  */}
        <div><Carousel /></div>
        <div>
           <LatestNews/>
        </div>

    </>
}