"use client";

import { Carousel } from "flowbite-react";

const CarouselComponent = () => {
  return (
    <div className="my-[100px]  mx-[100px] h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={5000}>
        <img
          src="https://i.pinimg.com/564x/e6/87/7a/e6877acbe2aa8dd66adddbe8193a3c7d.jpg"
          alt="Slide 1"
        />
        <img
          src="https://i.pinimg.com/564x/d7/ce/2e/d7ce2e83c4dacb47b965c8a1cd8a848d.jpg"
          alt="Slide 2"
        />
        <img
          src="https://i.pinimg.com/564x/b5/b4/e1/b5b4e1bed38c103a787f43f51c4969ee.jpg"
          alt="Slide 3"
        />
        <img
          src="https://i.pinimg.com/564x/06/8c/dd/068cdd53d9a29f7fc89e327d8f516068.jpg"
          alt="Slide 4"
        />
        <img
          src="https://i.pinimg.com/564x/23/8e/66/238e6665ae776a4aea07d95c6b66bd2a.jpg"
          alt="Slide 5"
        />
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
