import React from 'react';
import { ScrollCarouselProps } from './interfaces/types';
import { ScrollCarousel as ScrollCarouselInstance } from 'scroll-carousel';
import 'scroll-carousel/dist/scroll.carousel.min.css';

const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

class ScrollCarousel extends React.Component<ScrollCarouselProps> {
  carousel: Element | NodeList | string | null;
  scrollCarousel: ScrollCarouselInstance | null;
  constructor(props: ScrollCarouselProps) {
    super(props);

    this.carousel = null;
    this.scrollCarousel = null;
  }

  async componentDidMount() {
    if (!canUseDOM || !this.carousel) return null;
    const {
      onReady,
      onDestroy,
      onMove,
      children,
      className,
      elementType = 'div',
      scRef,
      ...options
    } = this.props;

    const SC = (await import('scroll-carousel')).default;
    this.scrollCarousel = new SC(this.carousel, {
      ...options,
      on: { ready: onReady, destroy: onDestroy, move: onMove },
    });
    if (scRef) scRef(this.scrollCarousel);
  }

  render() {
    return React.createElement(
      this.props.elementType || 'div',
      {
        style: { width: '100%' },
        className: this.props.className,
        ref: (c) => {
          this.carousel = c;
        },
      },
      this.props.children
    );
  }
}

export default ScrollCarousel;
