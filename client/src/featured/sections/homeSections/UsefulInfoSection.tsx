"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { useQuery } from "@tanstack/react-query";
import { InfoCard } from "@/types";
import api from "@/services/api";
import Reveal from "@/components/ui/Reveal";

import "swiper/css";

const UsefulInfoSection = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const { data: infoCards, isLoading } = useQuery({
    queryKey: ["info-cards"],
    queryFn: async () => {
      return await api.getData("info-cards");
    },
  });

  const handleSwiper = (s: SwiperType) => {
    setSwiper(s);
    setIsBeginning(s.isBeginning);
    setIsEnd(s.isEnd);
  };

  return (
    <section className="bg-[#F8F9FA] py-20">
      <Container>
        <Reveal>
          <SectionHeader
            title="Faydalı Məlumatlar"
            onPrev={() => swiper?.slidePrev()}
            onNext={() => swiper?.slideNext()}
            isBeginning={isBeginning}
            isEnd={isEnd}
            variant="dark"
          />
        </Reveal>

        <Reveal delay={0.4} y={50}>
          <div className="w-full">
            <Swiper
              modules={[Navigation]}
              onSwiper={handleSwiper}
              onSlideChange={handleSwiper}
              spaceBetween={30}
              slidesPerView={4}
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              className="info-swiper"
            >
              {isLoading
                ? [1, 2, 3, 4].map((i) => (
                    <SwiperSlide key={i}>
                      <div className="bg-white rounded-[15px] overflow-hidden shadow-sm h-[400px] animate-pulse">
                        <div className="bg-gray-200 h-[308px] w-full" />
                        <div className="p-6 flex flex-col gap-3">
                          <div className="h-4 bg-gray-200 w-1/3 rounded" />
                          <div className="h-6 bg-gray-200 w-2/3 rounded" />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))
                : infoCards?.map((card: InfoCard) => (
                    <SwiperSlide key={card.id}>
                      <div className="bg-white rounded-[15px] overflow-hidden shadow-sm h-full flex flex-col">
                        <div className="relative h-[308px] w-full rounded-[15px] overflow-hidden">
                          <Image
                            src={card.image}
                            alt={card.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            className="object-cover"
                          />
                        </div>
                        <div className="p-6 flex flex-col flex-1 gap-3">
                          <span className="text-[16px] font-medium font-inter text-[#8A8A8A]">
                            {card.date}
                          </span>
                          <h3 className="text-[22px] font-bold font-inter text-[#3F3F3F] leading-tight line-clamp-2">
                            {card.title}
                          </h3>
                          <div className="mt-auto pt-4 border-t border-gray-50">
                            <button className="flex items-center gap-2 text-[#009EE2] font-bold font-inter text-[16px] hover:gap-3 transition-all cursor-pointer">
                              Ətraflı <ArrowRightIcon size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
            </Swiper>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

export default UsefulInfoSection;
