'use client';

import { Carousel } from 'flowbite-react';

function CarouselComponent() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." className='h-48' />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg"  className='h-48' alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" className='h-48' alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" className='h-48' alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" className='h-48' alt="..." />
      </Carousel>
    </div>
  );
}

export default CarouselComponent