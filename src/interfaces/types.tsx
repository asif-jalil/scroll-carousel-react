import React from 'react';
import ScrollCarousel from 'scroll-carousel';

export interface ScrollCarouselProps {
  /**
   * Movement speed of the carousel
   */
  speed?: number;
  /**
   * Handle the speed according to acceleration
   */
  smartSpeed?: boolean;
  /**
   * Margin between two slides
   */
  margin?: number;
  /**
   * Slide will play auto
   */
  autoplay?: boolean;
  /**
   * Speed control for autoplay
   */
  autoplaySpeed?: number;
  /**
   * select slide with class name which you want to select for carousel.
   *  other element will behave as simple
   */
  slideSelector?: string;
  /**
   * moving direction of the slides
   */
  direction?: 'rtl' | 'ltr';

  /**
   * Triggered after ScrollCarousel has been activated.
   */
  onReady?: () => void;

  /**
   * Triggered when the slider moves.
   */
  onMove?: (progress: number) => void;

  /**
   * Triggered when the carousel destroyed
   */
  onDestroy?: () => void;

  children?: React.ReactNode;
  className?: string;
  elementType?: string;
  scRef?: (ref: ScrollCarousel) => void;
}
