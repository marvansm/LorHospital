"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import api from "@/services/api";
import Reveal from "@/components/ui/Reveal";
import DoctorCard from "@/components/cards/DoctorCard";
import { Doctor } from "@/types";

const DoctorsSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { data: doctors, isLoading } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      return await api.getData("doctors");
    },
  });

  const filteredDoctors = doctors?.filter((doctor: Doctor) =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="flex flex-col">
      <Reveal delay={0.1}>
        <div className="mb-10 relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Həkimin Adı, Soyadı"
            className="w-[484px] bg-[#F9F9F9] border border-[#E8E8E8] rounded-[12px] px-6 py-4 text-[16px] font-inter outline-none focus:border-[#009EE2] hover:shadow-md focus:shadow-md transition-all duration-300"
          />
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        {isLoading ? (
          <div className="col-span-1 md:col-span-2 text-center text-gray-500 py-10">
            Yüklənir...
          </div>
        ) : filteredDoctors?.length > 0 ? (
          filteredDoctors.map((doctor: Doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))
        ) : (
          <div className="col-span-1 md:col-span-2 text-center text-gray-500 py-10">
            Həkim tapılmadı
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorsSection;
