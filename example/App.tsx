import React, { useState } from 'react';
import ScrollCarousel from '../src';
import './App.css';
import { ScrollCarousel as ScrollCarouselInstance } from 'scroll-carousel';

function App() {
  const [scrollCarousel, setScrollCarousel] =
    useState<ScrollCarouselInstance>();

  const handleToggle = () => {
    if (scrollCarousel?.isActive) {
      scrollCarousel?.destroy();
    } else {
      scrollCarousel?.reinit();
    }
  };

  return (
    <>
      <main>
        <button onClick={handleToggle}>Destroy / Re Init</button>
        <br />
        <br />
        <ScrollCarousel
          autoplay
          autoplaySpeed={8}
          smartSpeed
          direction="rtl"
          speed={7}
          margin={20}
          onReady={() => console.log('I am ready')}
          onDestroy={() => console.log('Destroyed')}
          onMove={(progress) => {
            if (progress > 50 && progress < 60)
              console.log('Scrolling', progress);
          }}
          scRef={(sc: ScrollCarouselInstance) => setScrollCarousel(sc)}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
            <div key={item} className="item">
              {item}
            </div>
          ))}
        </ScrollCarousel>
      </main>
    </>
  );
}

export default App;
