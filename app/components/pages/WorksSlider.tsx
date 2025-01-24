/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Splide } from "@splidejs/react-splide";
import WorkSlide from "./WorkSlide";

const WorksSlider = ({
  category,
  setCurrentVimeoId,
}: {
  category: any;
  setCurrentVimeoId: any;
}) => {
  return (
    <Splide
      options={{
        pagination: false,
        perPage: 5,
        gap: 8,
        type: "loop",
        breakpoints: {
          540: {
            perPage: 1,
          },
          720: {
            perPage: 2,
          },
          1080: {
            perPage: 3,
          },
          1260: {
            perPage: 4,
          },
        },
      }}
    >
      {category.map((item: any, idx: number) => (
        <WorkSlide item={item} setCurrentVimeoId={setCurrentVimeoId} key={idx}/>
      ))}
    </Splide>
  );
};

export default WorksSlider;
