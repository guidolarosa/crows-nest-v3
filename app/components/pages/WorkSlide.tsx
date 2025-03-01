"use client";

import { SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import { Ref, useRef } from "react";

const WorkSlide = ({
  item,
  setCurrentVimeoId,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  item: any;
  setCurrentVimeoId: (vimeoId: string) => void;
}) => {
  const imageRef: Ref<HTMLImageElement> = useRef(null);
  const product = item.primary;
  const title = product.product_title[0].text;
  const year = product.product_year[0]?.text;
  const thumbnail = product.product_thumbnail.url;
  const vimeoId = product.product_vimeo_id[0].text;

  return (
    <SplideSlide
      key={thumbnail}
      onClick={() => {
        setCurrentVimeoId(vimeoId);
      }}
      className="group"
    >
      <div className="relative h-full flex flex-col gap-2">
        <div className="relative aspect-video rounded-md overflow-hidden transition-all group-hover:shadow-[0_30px_60px_-15px_rgba(255,255,255,0.3)] cursor-pointer">
          <Image
            src={thumbnail}
            fill
            alt={title}
            className="object-cover"
            ref={imageRef}
          />
        </div>
        <div className="flex flex-col gap-0.5">
          <h3 className="font-medium">{title}</h3>
          <span className="text-sm opacity-50">{year}</span>
        </div>
      </div>
    </SplideSlide>
  );
};

export default WorkSlide;
