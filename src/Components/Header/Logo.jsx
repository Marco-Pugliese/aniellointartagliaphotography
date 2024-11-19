import { useEffect, useState } from "react";

const Logo = () => {
  const [hasPassedThreshold, setHasPassedThreshold] = useState(false);

  const handleScroll = () => {
    if (hasPassedThreshold === false && window.scrollY > 100) {
      console.log("Puoi cambiare il componente ora!");
      setHasPassedThreshold(true);
    } else if (hasPassedThreshold === true && window.scrollY <= 100) {
      console.log("puoi riportarl allo stato precedente");
      setHasPassedThreshold(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasPassedThreshold]);
  return (
    <div>
      <img
        src="../../../public/assets/images/logo-AnielloIntartaglia.jpg"
        className={
          hasPassedThreshold === true
            ? "opacity-0 position-absolute transition-1 "
            : "opacity-1 position-absolute "
        }
        alt="logo"
      />

      <img
        src="../../../public/assets/images/logo-AnielloIntartaglia-Inverted.png"
        className={
          hasPassedThreshold === true ? "opacity-1 " : "opacity-0 transition-1"
        }
        alt="logo"
      />
    </div>
  );
};
export default Logo;
