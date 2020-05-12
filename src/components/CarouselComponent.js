import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

const items = [
  {
    src: "/assets/images/classic-beef-stroganoff.png",
    altText: "Classic Beef Stroganoff",
    caption: "Very Delicous!"
  },
  {
    src: "/assets/images/strawberry-chocolate-mousse-cake.png",
    altText: "Strawberry Chocolate Mousse cake",
    caption: "Tasty Delights!"
  },
  {
    src: "/assets/images/fluffy-pancakes.png",
    altText: "Fluffy Pancakes",
    caption: "Syrupy Goodness!"
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
        key={item.src}
      >
        <div className="row justify-content-center">
          <img className="carousel-image" src={item.src} alt={item.altText} />

          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.caption}
          />
        </div>
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
