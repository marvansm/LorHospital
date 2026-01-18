"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import Reveal from "@/components/ui/Reveal";

import "swiper/css";
import DoctorCard from "@/components/cards/DoctorCard";
import { useQuery } from "@tanstack/react-query";
import api from "@/services/api";
import { Doctor } from "@/types";

const OurDoctorsSection = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const { data: doctors, isLoading } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      return await api.getData("doctors");
    },
  });

  return (
    <section className="py-24 bg-[#00A6F2] overflow-hidden">
      <Container>
        <div className="flex flex-col gap-12">
          <div className="flex items-end justify-between">
            <Reveal>
              <div className="flex flex-col gap-4">
                <h2 className="text-[36px] md:text-[48px] font-bold font-inter text-white leading-tight tracking-tight">
                  Həkimlərimiz
                </h2>
                <div className="w-20 h-1 bg-white rounded-full" />
              </div>
            </Reveal>

            <Reveal delay={0.2} width="fit-content">
              <div className="hidden md:flex items-center gap-4">
                <button
                  onClick={() => swiper?.slidePrev()}
                  className="w-12 h-12 rounded-full border border-[#E8E8E8] flex items-center justify-center text-[#8A8A8A] hover:bg-[#009EE2] hover:text-white hover:border-[#009EE2] transition-all cursor-pointer"
                >
                  <ArrowLeft size={24} />
                </button>
                <button
                  onClick={() => swiper?.slideNext()}
                  className="w-12 h-12 rounded-full border border-[#E8E8E8] flex items-center justify-center text-[#8A8A8A] hover:bg-[#009EE2] hover:text-white hover:border-[#009EE2] transition-all cursor-pointer"
                >
                  <ArrowRight size={24} />
                </button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.3}>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              onSwiper={setSwiper}
              loop={true}
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
