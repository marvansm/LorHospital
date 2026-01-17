"use client";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { TESTIMONIALS } from "@/constants";

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionHeader title="Pasiyent məmnunluğu" variant="dark" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-[#F9F9F9] rounded-[8px] p-8 h-full flex flex-col relative transition-all duration-300 hover:shadow-md"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="relative w-[68px] h-[68px] rounded-full overflow-hidden border-2 border-white shadow-sm">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    sizes="68px"
                    className="object-cover"
                  />
                </div>
                <div className="w-[38px] h-[38px] bg-[#009EE2] rounded-[4px] flex items-center justify-center">
                  <Quote size={20} color="white" fill="white" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-[22px] font-bold font-inter text-[#3F3F3F]">
                  {item.name}
                </h3>
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-[#009EE2] text-[#009EE2]"
                    />
                  ))}
                </div>
              </div>

              <p className="mt-6 text-[18px] font-medium font-inter text-[#3F3F3F] opacity-70 leading-[28px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
