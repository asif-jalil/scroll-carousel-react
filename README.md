<p align="center">
  <img style="width:100%;" src="https://media.giphy.com/media/aOMbzVumN3KsEHnb0h/giphy.gif" />
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/scroll-carousel-react">
    <img alt="top language" src="https://img.shields.io/github/languages/top/asif-jalil/scroll-carousel-react" />
  </a>
  <a href="https://www.npmjs.com/package/scroll-carousel-react">
    <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/scroll-carousel-react">
  </a>
  <a href="https://www.npmjs.com/package/scroll-carousel-react">
    <img alt="npm" src="https://img.shields.io/npm/dw/scroll-carousel-react">
  </a>
  <a href="LICENSE">
    <img alt="GitHub" src="https://img.shields.io/github/license/asif-jalil/scroll-carousel-react">
  </a>
</p>

# Scroll Carousel React

This is the react version of [Scroll Carosel](https://github.com/asif-jalil/scroll-carousel) plugin, which is written in vanilla JavaScript.

[NPM](https://www.npmjs.com/package/scroll-carousel-react) | [Documentation](https://asif-jalil.github.io/scroll-carousel-website) | [Demos](https://asif-jalil.github.io/scroll-carousel-website/#demos)

**Note:** This carousel only operates in browser.

### Install

##### npm

```
npm install scroll-carousel-react
```

### Usages

##### With React JS

```
import React from 'react';
import ScrollCarousel from 'scroll-carousel-react';


const MyComponent = () => {
  return (
    <>
      <h1>This is my component page</h1>
      <p>Now i am showing my creation scroll carousel</p>
      <ScrollCarousel
        autoplay
        autoplaySpeed={8}
        speed={7}
        onReady={() => console.log('I am ready')}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
          <div key={item} className='bg-blue-300/20 border-2 border-blue-300/70 rounded h-36 w-48'>
            {item}
          </div>
        ))}
      </ScrollCarousel>
    </>
  );
};

export default MyComponent;
```

##### With Next JS

1. Make a component with any name `ScrollCarouselComponent` with the following code. This is a wrapper component.

`components/ScrollCarouselComponent.js`

```
// 'use client'; // For Next JS 13 app router


import React from 'react';
import ScrollCarousel from 'scroll-carousel-react';


const ScrollCarouselComponent = () => {
  return (
    <ScrollCarousel
      autoplay
      autoplaySpeed={8}
      speed={7}
      onReady={() => console.log('I am ready')}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
        <div key={item} className='bg-blue-300/20 border-2 border-blue-300/70 rounded h-36 w-48'>
          {item}
        </div>
      ))}
    </ScrollCarousel>
  );
};

export default ScrollCarouselComponent;
```

2. Import this component where you need it. But it should be dynamic import. This is because the next js tries to run the plugin in its server side. But as it is only available for client side. That's why it does not find `window` or `document`

```
// 'use client'; // For Next JS 13 app router

import React from 'react';

import dynamic from 'next/dynamic';

const ScrollCarousel = dynamic(() => import('@/components/ScrollCarouselComponent'), { ssr: false });

const MyComponent = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='text-center'>
        <h2 className='text-4xl font-bold'>This is our about page</h2>
      </div>

      <ScrollCarousel />
    </div>
  );
};

export default MyComponent;
```

### Props

- All props are optional

| Option        | Type                            | Default | Description                                                                                                                |
| ------------- | ------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------- |
| speed         | `number`                        | 7       | The value given is how fast you want to move on the scroll. It needs to be greater than 0.                                 |
| smartSpeed    | `boolean`                       | false   | To calculate the speed of how fast or slow you are scrolling a website.                                                    |
| margin        | `number`                        | 10      | To make gap between two slide                                                                                              |
| slideSelector | `string`                        | null    | Select the slides with a class name you want to select for the carousel. Other elements will behave as simple.             |
| autoplay      | `boolean`                       | false   | The option will allow the slides move automatically and still you will have the ability to handle sliding speed on scroll. |
| autoplaySpeed | `number`                        | 5       | Control autoplay speed. It needs to be greater than 0                                                                      |
| direction     | `string`                        | 'rtl'   | Control direction left to right or right to left. Two possible option - `ltr` or `rtl`                                     |
| onReady       | `() => void`                    |         | When the carousel is ready to perform its action, that time this event will be fired.                                      |
| onMove        | `(progress: number) => void`    |         | When the carousel is on move (i,e at the time of scrolling, when autoplay enabled), the event will be fired continuously.  |
| onDestroy     | `() => void`                    |         | At the time of destroy function, this event will be fired.                                                                 |
| className     | `string`                        |         | For using with extra class                                                                                                 |
| elementType   | `string`                        | div     | Tag, that will be used to create the carousel.                                                                             |
| scRef         | `(ref: ScrollCarousel) => void` |         | This will give you an instance of scroll carousel. You can use it for method call.                                         |

**For better documentaion, please have a look on the website of [Scroll Carousel](https://asif-jalil.github.io/scroll-carousel-website/)**

## License

The code and the documentation are released under the [MIT License](LICENSE).
