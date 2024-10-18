import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import EmblaSlide from "./EmblaSlide";

const SliderComponent = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container gap-x-4">
          {slides.map((item, index) => (
            <EmblaSlide
              key={item.id}
              desc={item.desc}
              bg={item.bg}
              textColor={item.textColor}
              title={item.title}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center w-full mt-6 bg-transparent gap-x-2">
        <div className="flex justify-center w-full bg-transparent gap-x-2 ">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} /> 
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SliderComponent;
