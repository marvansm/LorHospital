"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import { useQuery } from "@tanstack/react-query";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import DoctorCard from "@/components/cards/DoctorCard";
import api from "@/services/api";
import { Doctor } from "@/types";

import "swiper/css";

const OurDoctorsSection = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const { data: doctors, isLoading } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      return await api.getData("doctors");
    },
  });

  const handleSwiper = (s: SwiperType) => {
    setSwiper(s);
    setIsBeginning(s.isBeginning);
    setIsEnd(s.isEnd);
  };

  return (
    <section className="py-24 bg-[#00A6F2] overflow-hidden">
      <Container>
        <div className="flex flex-col gap-12">
          <Reveal>
            <SectionHeader
              title="Həkimlərimiz"
              onPrev={() => swiper?.slidePrev()}
              onNext={() => swiper?.slideNext()}
              isBeginning={isBeginning}
              isEnd={isEnd}
              variant="light"
            />
          </Reveal>

          <Reveal delay={0.3}>
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              onSwiper={handleSwiper}
              onSlideChange={handleSwiper}
              loop={false}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 4,
                },
              }}
              className="pb-10!"
            >
              {isLoading
                ? [1, 2, 3, 4].map((i) => (
                    <SwiperSlide key={i}>
                      <div className="bg-white h-[400px] rounded-[32px] animate-pulse" />
                    </SwiperSlide>
                  ))
                : doctors?.map((doctor: Doctor) => (
                    <SwiperSlide key={doctor.id}>
                      <DoctorCard doctor={doctor} />
                    </SwiperSlide>
                  ))}
            </Swiper>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

export default OurDoctorsSection;
