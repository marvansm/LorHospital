"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  onPrev?: () => void;
  onNext?: () => void;
  isBeginning?: boolean;
  isEnd?: boolean;
  variant?: "light" | "dark";
}

const SectionHeader = ({
  title,
  onPrev,
  onNext,
  isBeginning,
  isEnd,
  variant = "light",
}: SectionHeaderProps) => {
  const isDark = variant === "dark";

  return (
    <div className="flex items-center justify-between mb-12">
      <h2
        className={`text-[40px] md:text-[55px] font-bold font-inter leading-tight ${
          isDark ? "text-[#3F3F3F]" : "text-white"
        }`}
      >
        {title}
      </h2>

      {(onPrev || onNext) && (
        <div className="flex items-center gap-3">
          <button
            onClick={onPrev}
            disabled={isBeginning}
            className={`w-[48px] h-[48px] rounded-full flex items-center justify-center transition-all duration-300 border ${
              isBeginning
                ? "border-gray-200 opacity-50 cursor-not-allowed"
                : isDark
                  ? "border-gray-300 bg-white shadow-md hover:bg-gray-50 cursor-pointer"
                  : "bg-white shadow-lg text-[#009EE2] cursor-pointer"
            }`}
          >
            <ArrowLeft
              size={22}
              className={
                isBeginning
                  ? "text-gray-300"
                  : isDark
                    ? "text-[#3F3F3F]"
                    : "text-[#009EE2]"
              }
              strokeWidth={1.5}
            />
          </button>

          <button
            onClick={onNext}
            disabled={isEnd}
            className={`w-[48px] h-[48px] rounded-full flex items-center justify-center transition-all duration-300 border ${
              isEnd
                ? "border-gray-200 opacity-50 cursor-not-allowed"
                : isDark
                  ? "bg-[#009EE2] border-[#009EE2] shadow-md text-white hover:brightness-110 cursor-pointer"
                  : "bg-white shadow-lg text-[#009EE2] hover:bg-gray-50 cursor-pointer"
            }`}
          >
            <ArrowRight
              size={22}
              className={
                isEnd
                  ? "text-gray-300"
                  : isDark
                    ? "text-white"
                    : "text-[#009EE2]"
              }
              strokeWidth={1.5}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
