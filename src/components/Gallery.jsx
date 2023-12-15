/* eslint-disable react/prop-types */
import { Gallery } from "react-grid-gallery";
import { useState } from "react";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";

function MyGallery({ photos, rowHeight }) {
  const [currentImage, setCurrentImage] = useState(null);

  const handleImageClick = (index) => {
    setCurrentImage({ index: index, src: photos[index].src });
  };

  const handleNext = (event) => {
    event.stopPropagation();
    const nextIndex = (currentImage.index + 1) % photos.length;
    setCurrentImage({ index: nextIndex, src: photos[nextIndex].src });
  };

  const handlePrevious = (event) => {
    event.stopPropagation();
    const prevIndex = (currentImage.index - 1 + photos.length) % photos.length;
    setCurrentImage({ index: prevIndex, src: photos[prevIndex].src });
  };

  const handleKeyPress = (event) => {
    if (event.key === "ArrowRight") {
      handleNext(event);
    }
    if (event.key === "ArrowLeft") {
      handlePrevious(event);
    }
    if (event.key === "Escape") {
      setCurrentImage(null);
    }
  };

  // if (currentImage) console.log("currentImage.index :>> ", currentImage.index);
  return (
    <div className="w-[90%] mx-auto relative overflow-y-auto">
      <Gallery
        images={photos}
        rowHeight={rowHeight}
        onClick={handleImageClick}
        margin={4}
      />
      {currentImage && (
        <div
          className="fixed left-0 top-0 z-10 hidden h-full w-full bg-black backdrop-blur-sm bg-opacity-30 lg:block  overflow-y-auto"
          onClick={() => setCurrentImage(null)}
          onKeyDown={handleKeyPress}
          tabIndex="0"
        >
          <div className="relative h-full overflow-y-auto">
            <span
              className="mx-1 cursor-pointer rounded-full bg-[#f5f5f4] bg-opacity-50 p-3"
              onClick={handlePrevious}
            >
              <FaChevronCircleLeft
                className="absolute text-6xl z-20 top-1/2 -translate-y-1/2 hover:scale-110 cursor-pointer text-gray-50 rounded-full p-2 left-[10%]"
                onClick={handlePrevious}
              />
            </span>
            <img
              src={currentImage.src}
              className=" overflow-y-auto rounded-3xl fixed left-[50%] top-[50%] z-50 w-[70vw] -translate-x-1/2 -translate-y-1/2 shadow-2xl border-2 border-black"
            />
            <span
              className="mx-1 cursor-pointer rounded-full bg-[#f5f5f4] bg-opacity-50 p-3"
              onClick={handleNext}
            >
              <FaChevronCircleRight
                className="absolute text-6xl z-20 top-1/2 -translate-y-1/2 hover:scale-110 cursor-pointer text-gray-50 rounded-full p-2 right-[10%]"
                onClick={handleNext}
              />
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyGallery;
