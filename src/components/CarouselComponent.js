import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";
import { RECIPES } from "../shared/recipes";

const items = [
  {
    src: RECIPES[0].image,
    altText: RECIPES[0].description,
    caption: RECIPES[0].name
  },
  {
    src: RECIPES[1].image,
    altText: RECIPES[0].description,
    caption: RECIPES[1].name
  },
  {
    src: RECIPES[2].image,
    altText: RECIPES[0].description,
    caption: RECIPES[2].name
  }
];

const CarouselFeature = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src} className="bg-secondary">

            <img className="d-block h-100 w-100 carousel-image" src={item.src} alt={item.altText} />

            <CarouselCaption 
              captionText={item.altText}
              captionHeader={item.caption}
              className="carousel-caption" />
 
 

        <CarouselCaption
          captionText={item.altText}
          captionHeader={item.caption}
          className="carousel-caption"
        />
      </CarouselItem>
    );
  });

  return (
    <div>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
};

export default CarouselFeature;
