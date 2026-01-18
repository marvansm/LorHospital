"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { DOCTORS } from "@/constants";
import Reveal from "@/components/ui/Reveal";

import "swiper/css";
import DoctorCard from "@/components/cards/DoctorCard";

const OurDoctorsSection = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSwiper = (s: SwiperType) => {
    setSwiper(s);
    setIsBeginning(s.isBeginning);
    setIsEnd(s.isEnd);
  };

  return (
    <section className="bg-[#009EE2] py-20 pb-28 min-h-[821px] flex flex-col justify-center overflow-hidden">
      <Container>
        <Reveal>
          <SectionHeader
            title="Həkimlər"
            onPrev={() => swiper?.slidePrev()}
            onNext={() => swiper?.slideNext()}
            isBeginning={isBeginning}
            isEnd={isEnd}
          />
        </Reveal>

        <Reveal delay={0.4} y={50}>
          <div className="w-full">
            <Swiper
              modules={[Navigation]}
              onSwiper={handleSwiper}
              onSlideChange={handleSwiper}
              spaceBetween={30}
              slidesPerView={3}
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
              }}
              className="overflow-visible!"
            >
              {DOCTORS.map((doctor) => (
                <SwiperSlide key={doctor.id}>
                  <DoctorCard doctor={doctor} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

export default OurDoctorsSection;
