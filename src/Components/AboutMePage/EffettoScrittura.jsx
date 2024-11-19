import { useEffect, useState } from "react";

const EffettoScrittura = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout); // Pulizia per evitare problemi
    }
  }, [index, text, speed]);

  return <div className="px-5 mx-5">{displayedText}</div>;
};
export default EffettoScrittura;
