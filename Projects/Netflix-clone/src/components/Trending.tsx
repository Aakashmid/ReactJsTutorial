import TrendingData from "@/constants/trendingData"
import TrendingCard from "./TrendingCard"

import { Carousel, CarouselContent, CarouselItem, useCarousel } from "./ui/carousel"
import { ChevronLeft, ChevronRight } from "lucide-react"

const ScrollNextBtn = () => {
  const { scrollNext, canScrollNext } = useCarousel();
  return (
    <div className={` absolute right-0 top-0 h-full  w-fit pl-3 transition duration-700 ${canScrollNext ? 'translate-x-0' : 'translate-x-100'} bg-black `}>
      <button className="bg-gray-dark transition-colors hover:bg-gray-md active:bg-gray-md h-[7.5rem] rounded-[0.5rem]  relative top-1/2  -translate-y-1/2" onClick={scrollNext}>
        <ChevronRight
          className="size-6 text-white" />
      </button>
    </div>
  )
}
const ScrollPrevBtn = () => {
  const { scrollPrev, canScrollPrev } = useCarousel();
  return (
    <div className={` absolute left-0 top-0 h-full  w-fit pr-3 transition duration-700 ${canScrollPrev ? 'translate-x-0' : '-translate-x-100'} bg-black `}>
      <button className="bg-gray-dark transition-colors hover:bg-gray-md active:bg-gray-md h-[7.5rem] rounded-[0.5rem]  relative top-1/2  -translate-y-1/2" onClick={scrollPrev}>
        <ChevronLeft
          className="size-6 text-white" />
      </button>
    </div>
  )
}

const Trending = () => {
  return (
    <div className="trending-wrapper">
      <h2 className="text-lg text-white my-2 font-medium">Trending Now</h2>
      <div className="carousel-container">
        <Carousel className="relative">
          <CarouselContent className="-">
            {TrendingData.map((movies, index) => (
              <CarouselItem key={index + 1} className="h-[10rem] basis-[8.5rem] md:basis-1/4 lg:basis-1/3 pl-5">
                <TrendingCard img={movies.imageUrl} number={index + 1} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <ScrollNextBtn />
          <ScrollPrevBtn />

        </Carousel>
      </div>
    </div>
  )
}

export default Trending