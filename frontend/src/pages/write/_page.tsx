import { NarrativeType, SSNovelBody } from "@/types/typs";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { memo, useState } from "react";

export const Page = memo(
  ({
    ssnovelBody,
    bgColor,
    style,
  }: {
    ssnovelBody: SSNovelBody;
    bgColor: string;
    style?: React.CSSProperties;
  }) => {
    const [movePage, setMovePage] = useState(0);
    const [readPage, setReadPage] = useState(false);

    const handleClick = () => {
      setMovePage(100);
      setReadPage(true);
    };

    const handleBack = () => {
      setMovePage(-100);
      setReadPage(false);
    };

    return (
      <>
        <section
          className={`absolute h-[630px] shadow-md hover:translate-x-10 transition-all cursor-pointer p-4 ${bgColor}`}
          style={{ ...style, transform: `translateX(${movePage}%)` }}
          onClick={handleClick}
        >
          <div className="flex justify-between p-2">
            <h2 className="text-2xl">
              {
                NarrativeType[
                  ssnovelBody.narrative_stage as keyof typeof NarrativeType
                ]
              }
            </h2>
            <h4 className="text-xl pb-8">{ssnovelBody.user.name}</h4>
          </div>
          <div>
            <p className="whitespace-pre-wrap tracking-[0.25em] leading-10 text-xl mt-4">
              {ssnovelBody.content}
            </p>
          </div>
        </section>
        <div
          className={`absolute bottom-0 right-1/2  ${
            readPage ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            className={`border hover:border-slate-300 hover:${bgColor} bg-opacity-20 hover:bg-opacity-70 transition-all w-full p-4 my-4 text-gray-600 flex flex-col justify-between items-center tracking-[32px] gap-2 ${bgColor} text-slate-500`}
            onClick={handleBack}
          >
            <ArrowBackIosNewIcon />
          </button>
        </div>
      </>
    );
  }
);