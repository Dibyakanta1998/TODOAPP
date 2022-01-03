import { useState, useEffect } from "react";

const Carousel = () => {
  const imageUrl = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
    "img6.jpg",
    "img7.jpg",
  ];

  const [carouselIndex, setCarouselIndex] = useState("");

    useEffect(() => {
      setCarouselIndex(0);
    }, []);

  //   useEffect(() => {}, [carouselIndex]);

  const previousImage = () => {
    if (carouselIndex === 0) setCarouselIndex(6);
    else setCarouselIndex(carouselIndex - 1);
  };
  const nextImage = () => {
    if (carouselIndex === 6) setCarouselIndex(0);
    else setCarouselIndex(carouselIndex + 1);
  };
  return (
    <>
      <div className="main-container">
        <button id="prev" onClick={previousImage}>
          &lt;
        </button>

        <img id="image" src={imageUrl[carouselIndex]} />

        <button id="next" onClick={nextImage}>
          &gt;
        </button>
      </div>
    </>
  );
};
export default Carousel;
