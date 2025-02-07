import React, { useState } from "react";
import "./Gallery.css";
import clientImage1 from "../../assets/pics/Pic1.jpg";
import clientImage2 from "../../assets/pics/Pic2.jpg";
import clientImage3 from "../../assets/pics/Pic3.jpg";
import clientImage4 from "../../assets/pics/Pic4.jpg";
import clientImage5 from "../../assets/pics/Pic5.jpg";
import clientImage6 from "../../assets/pics/Pic6.jpg";
import clientImage7 from "../../assets/pics/pic7.jpg";
import clientImage8 from "../../assets/pics/pic8.jpg";
import clientImage9 from "../../assets/pics/pic12.jpg";
import clientImage10 from "../../assets/pics/pic10.jpg";
import clientImage11 from "../../assets/pics/pic11.jpg";
import clientImage12 from "../../assets/pics/pic13.jpg";
import clientImage13 from "../../assets/pics/pic14.jpg";
import clientImage14 from "../../assets/pics/pic16.png";
import clientImage15 from "../../assets/pics/pic17.jpg";
import clientImage16 from "../../assets/pics/pic18.jpg";
import Testimonials from "../Testimonial/Testimonials";



const GallerySection = ({ title, images }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex + images.length - 1) % images.length);
  };

  return (
    <div className="gallery-section"
    style={{
      maxWidth: "1440px",
      margin: "0 auto"
    }}
    >
      <h2
      >{title}</h2>
      <div className="image-grid">
        {images.map((image, index) => (
          <div
            key={index}
            className="image-card"
            onClick={() => openModal(index)}
          >
            <img src={image.url} alt={image.alt} />
          </div>
        ))}
      </div>
      {modalOpen && (
        <div className="gallery-modal-backdrop">
          <div className="gallery-modal-content">
            <button onClick={closeModal} className="gallery-modal-close-btn">
              ✖
            </button>
            <button
              onClick={prevImage}
              className="gallery-modal-nav-btn-prevbtn"
            >
              &#8249;
            </button>
            <img
              src={images[currentIndex].url}
              alt={images[currentIndex].alt}
              className="gallery-modal-image"
            />
            <button
              onClick={nextImage}
              className="gallery-modal-nav-btn-nextbtn"
            >
              &#8250;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const GalleryHero = () => {
  const receptionImages = [
    { url: clientImage1, alt: "Reception Image 1" },
    { url: clientImage2, alt: "Reception Image 2" },
    { url: clientImage3, alt: "Reception Image 3" },
    { url: clientImage4, alt: "Reception Image 4" },
    { url: clientImage5, alt: "Reception Image 5" },
    { url: clientImage6, alt: "Reception Image 6" },
    { url: clientImage7, alt: "Reception Image 7" },
    { url: clientImage8, alt: "Reception Image 8" },
    { url: clientImage9, alt: "Reception Image 9" },
    { url: clientImage10, alt: "Reception Image 10" },
    { url: clientImage11, alt: "Reception Image 11" },
    { url: clientImage12, alt: "Reception Image 12" },
    { url: clientImage13, alt: "Reception Image 13" },
    { url: clientImage14, alt: "Reception Image 14" },
    { url: clientImage15, alt: "Reception Image 15" },
    { url: clientImage16, alt: "Reception Image 16" },
  ];

  return (
    <>
      <div className="gallery-hero"></div>
      <GallerySection
        title="Our Work and Clients images"
        images={receptionImages}
      />

<Testimonials/>
    </>
  );
};

export default GalleryHero;