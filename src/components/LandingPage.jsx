import Carousel from "./ui/Carousel";
import Footer from "./ui/Footer";
import LatestNews from "./ui/LatestNews";

export default function LandingPage() {
    return <>
        {/* craousel start */}

        <div className="">
            <Carousel />
            <LatestNews />
            <Footer/>
        </div>

        {/* craousel aend */}
    </>
}