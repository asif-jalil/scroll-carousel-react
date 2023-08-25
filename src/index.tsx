import React from 'react';
import { ScrollCarouselProps } from './interfaces/types';

const ScrollCarousel: React.FC<ScrollCarouselProps> = (
  props: ScrollCarouselProps
) => {
  const { speed } = props;

  console.log(speed);

  return <></>;
};

export default ScrollCarousel;
