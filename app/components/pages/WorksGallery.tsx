"use client";

import { useEffect, useState } from "react";
import VideoModal from "../interaction/VideoModal";
import WorksSlider from "./WorksSlider";

const WorksGallery = ({ products }: { products: any }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVimeoId, setCurrentVimeoId] = useState<string | null>(null);

  useEffect(() => {
    setIsModalOpen(!!currentVimeoId);
  }, [currentVimeoId]);
  return (
    <>
      {currentVimeoId && (
        <VideoModal
          open={isModalOpen}
          currentVimeoId={currentVimeoId}
          setCurrentVimeoId={setCurrentVimeoId}
        />
      )}
      <div className="w-full px-6 flex flex-col gap-3">
        <h1 className="text-base font-medium uppercase tracking-widest opacity-50">
          Nuestros Trabajos
        </h1>
        <ul className="flex flex-col gap-10">
          {Object.entries(products).map((category, idx) => {
            return (
              category[0] != "null" && (
                <li key={idx} className="flex flex-col gap-2">
                  <h2 className="capitalize text-xl font-semibold">
                    {category[0]}
                  </h2>
                  <WorksSlider
                    category={category[1]}
                    setCurrentVimeoId={setCurrentVimeoId}
                  />
                </li>
              )
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default WorksGallery;
