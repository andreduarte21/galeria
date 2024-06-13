'use client'
import Lightbox from 'react-spring-lightbox';
import { useState } from 'react';
import ImageMosaic from './mosaic';
import { mosaicImages, lightboxImages } from "./images";
import Footer from './components/Footer';
import ArrowButton from './components/ArrowButton';


export default function Home() {

  const [currentImageIndex, setCurrentIndex] = useState(0);
  const [isOpen, setOpen] = useState(false);

  const gotoPrevious = () =>
    currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

  const gotoNext = () =>
    currentImageIndex + 1 < lightboxImages.length &&
    setCurrentIndex(currentImageIndex + 1);


  return (
    <>
      <ImageMosaic
        images={mosaicImages}
        handleClick={(e, { index }) => {
          setCurrentIndex(index);
          setOpen(true);
        }}
      />
        <Lightbox
          isOpen={isOpen}
          onPrev={gotoPrevious}
          onNext={gotoNext}
          onClose={() => setOpen(false)}
          images={lightboxImages}
          currentIndex={currentImageIndex}
          renderFooter={() => <Footer />}
          renderPrevButton={({ canPrev }) => (
            <ArrowButton
              position="left"
              onClick={gotoPrevious}
              disabled={!canPrev}
            />
          )}
          renderNextButton={({ canNext }) => (
            <ArrowButton position="right" onClick={gotoNext} disabled={!canNext} />
          )}
          style={{ background: "linear-gradient(45deg, rgb(254, 107, 139, 0.45) 30%, rgb(255, 142, 83, 0.45) 90%)"}} 
        />
        </>
  );
}
