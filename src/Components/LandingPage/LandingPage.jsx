import Aside from "./Aside/Aside";
import HeroSection from "./HeroSection/HeroSection";

const LandingPage = () => {
  return (
    <>
      <div id="LandingPage">
        <HeroSection />
      </div>
      <div className="my-5">
        <Aside />
      </div>
    </>
  );
};
export default LandingPage;
