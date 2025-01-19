/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { H2_STYLE, P_STYLE } from "@/app/styles/common";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

const NewsGrid = ({ news }: { news: any }) => {
  console.log(news);
  return (
    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4">
      {news.map(({ primary, id }: { primary: any; id: string }) => {
        const heading = primary.article_header[0].text;
        const excerpt = primary.article_excerpt[0].text;
        const imageUrl = primary.article_image.url;
        const newsPortal = primary.news_portal[0]?.text;
        const url = primary.article_link.url || "#";
        return (
          <li
            key={id}
            className="flex flex-col gap-3 border-stone-800 border p-4 rounded-lg md:opacity-80 hover:opacity-100 transition"
          >
            <Link href={url} className="flex flex-col gap-2" target="_blank">
              <div className="relative aspect-video w-full rounded-md overflow-hidden border border-stone-800">
                <Image
                  src={imageUrl}
                  fill
                  alt={excerpt}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col grow">
                <h2
                  className={clsx(H2_STYLE, "line-clamp-2 mb-1 text-sm")}
                  title={heading}
                >
                  {heading}
                </h2>
                <p className={clsx(P_STYLE, "line-clamp-3 !text-xs")}>
                  {excerpt}
                </p>

                <span className={"text-sm text-stone-400 mt-auto flex items-center gap-2"}>
                  {newsPortal}{" "}
                  <span>
                    <FiExternalLink />
                  </span>
                </span>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NewsGrid;
