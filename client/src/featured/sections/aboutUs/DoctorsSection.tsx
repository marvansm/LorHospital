"use client";
import React from "react";
import { DOCTORS } from "@/constants";
import Reveal from "@/components/ui/Reveal";
import DoctorCard from "@/components/cards/DoctorCard";

const DoctorsSection = () => {
  return (
    <div className="flex flex-col">
      <Reveal delay={0.1}>
        <div className="mb-10 relative">
          <input
            type="text"
            placeholder="Həkimin Adı, Soyadı"
            className="w-[484px] bg-[#F9F9F9] border border-[#E8E8E8] rounded-[12px] px-6 py-4 text-[16px] font-inter outline-none focus:border-[#009EE2] transition-colors"
          />
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        {DOCTORS.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default DoctorsSection;
