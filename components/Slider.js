"use client"

import { useCallback } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import pic1 from "./images/climb.png";
import pic2 from "./images/2-ELzxldtU6kACf.png";
import { DotButton, useDotButton } from "./SliderDotButton";

export default function Slider() {
  // { delay: 10000 }
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, slidesToScroll: 3 }, [Autoplay({ stopOnMouseEnter: true, stopOnInteraction: false })]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  return (
    <div className="relative w-full overflow-x-hidden" ref={emblaRef}>
      <div className="grid grid-flow-col auto-cols-[30%]" id="SLIDER_CONTAINER">
        {/* flex-[0_0_33%] min-w-0  */}
        <div className="group/slide relative aspect-square mx-2 flex items-center justify-center rounded overflow-hidden">
          <Image src={pic1} className="h-full w-full object-cover transition-transform duration-300 delay-500 group-hover/slide:duration-0 group-hover/slide:delay-0 group-hover/slide:scale-110" />
          <div className="absolute -bottom-16 inset-x-0 w-full h-16 grid items-center font-bold text-lg text-center bg-slate-800/80 transition-[bottom] duration-300 delay-500 group-hover/slide:duration-0 group-hover/slide:delay-0 group-hover/slide:bottom-0">
            Slide 1
          </div>
        </div>
        {/* flex-[0_0_33%] min-w-0  */}
        <div className="group/slide relative aspect-square mx-2 flex items-center justify-center rounded overflow-hidden">
          <Image src={pic2} className="h-full w-full object-cover transition-transform duration-300 delay-500 group-hover/slide:duration-0 group-hover/slide:delay-0 group-hover/slide:scale-110" />
          <div className="absolute -bottom-16 inset-x-0 w-full h-16 grid items-center font-bold text-lg text-center bg-slate-800/80 transition-[bottom] duration-300 delay-500 group-hover/slide:duration-0 group-hover/slide:delay-0 group-hover/slide:bottom-0">
            Slide 2
          </div>
        </div>
        {/* flex-[0_0_33%] min-w-0  */}
        <div className="group/slide relative aspect-square mx-2 flex items-center justify-center rounded overflow-hidden">
          <Image src={pic1} className="h-full w-full object-cover transition-transform duration-300 delay-500 group-hover/slide:duration-0 group-hover/slide:delay-0 group-hover/slide:scale-110" />
          <div className="absolute -bottom-16 inset-x-0 w-full h-16 grid items-center font-bold text-lg text-center bg-slate-800/80 transition-[bottom] duration-300 delay-500 group-hover/slide:duration-0 group-hover/slide:delay-0 group-hover/slide:bottom-0">
            Slide 3
          </div>
        </div>
        {/* flex-[0_0_33%] min-w-0  */}
        <div className="group/slide relative aspect-square mx-2 flex items-center justify-center rounded overflow-hidden">
          <Image src={pic2} className="h-full w-full object-cover transition-transform duration-300 delay-500 group-hover/slide:duration-0 group-hover/slide:delay-0 group-hover/slide:scale-110" />
          <div className="absolute -bottom-16 inset-x-0 w-full h-16 grid items-center font-bold text-lg text-center bg-slate-800/80 transition-[bottom] duration-300 delay-500 group-hover/slide:duration-0 group-hover/slide:delay-0 group-hover/slide:bottom-0">
            Slide 4
          </div>
        </div>
        {/* flex-[0_0_33%] min-w-0  */}
        <div className="group/slide relative aspect-square mx-2 flex items-center justify-center rounded overflow-hidden">
          <Image src={pic1} className="h-full w-full object-cover transition-transform duration-300 delay-500 group-hover/slide:duration-0 group-hover/slide:delay-0 group-hover/slide:scale-110" />
          <div className="absolute -bottom-16 inset-x-0 w-full h-16 grid items-center font-bold text-lg text-center bg-slate-800/80 transition-[bottom] duration-300 delay-500 group-hover/slide:duration-0 group-hover/slide:delay-0 group-hover/slide:bottom-0">
            Slide 5
          </div>
        </div>
        {/* flex-[0_0_33%] min-w-0  */}
        <div className="group/slide relative aspect-square mx-2 flex items-center justify-center rounded overflow-hidden">
          <Image src={pic2} className="h-full w-full object-cover transition-transform duration-300 delay-500 group-hover/slide:duration-0 group-hover/slide:delay-0 group-hover/slide:scale-110" />
          <div className="absolute -bottom-16 inset-x-0 w-full h-16 grid items-center font-bold text-lg text-center bg-slate-800/80 transition-[bottom] duration-300 delay-500 group-hover/slide:duration-0 group-hover/slide:delay-0 group-hover/slide:bottom-0">
            Slide 6
          </div>
        </div>
      </div>

      <button className="absolute h-[calc(100%-3rem)] top-0 left-0 p-4 text-zinc-800 rounded bg-white" type="button" onClick={scrollPrev}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button className="absolute h-[calc(100%-3rem)] top-0 right-0 p-4 text-zinc-800 rounded bg-white" type="button" onClick={scrollNext}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      <div className="w-max h-4 mx-auto mt-8 flex gap-2">
        {
          scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`size-4 ${index === selectedIndex ? "bg-zinc-200" : "bg-zinc-200/50"} rounded-full border-4 border-zinc-200`}
            />
          ))}
      </div>
    </div>
  )
}