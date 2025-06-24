import { useState } from "react";
import LeftArrow from "../../assets/icons/LeftArrow.svg";
import RightArrow from "../../assets/icons/RightArrow.svg";
import Icon from "../UI/Icon";

const ImageCarousel = ({ images = [], alt = "", className = "" }) => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={`relative ${className}`}>
      <img
        src={images[current]}
        alt={alt}
        className="w-full h-full object-cover object-center"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute right-0 top-3/4 bg-c-black/50 px-1 py-1 rounded -translate-x-[150%] z-10"
          >
            <Icon icon={LeftArrow} size={10} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-3/4 bg-c-black/50 px-1 py-1 rounded z-10"
          >
            <Icon icon={RightArrow} size={10} />
          </button>
        </>
      )}
    </div>
  );
};

export default ImageCarousel;
