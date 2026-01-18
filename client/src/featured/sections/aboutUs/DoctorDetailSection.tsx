"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import api from "@/services/api";
import { Doctor } from "@/types";
import Reveal from "@/components/ui/Reveal";
import { Stethoscope, Users, Star, Check } from "lucide-react";

interface DoctorDetailProps {
  doctorId: string;
}

const DoctorDetailSection = ({ doctorId }: DoctorDetailProps) => {
  const [activeTab, setActiveTab] = useState("info");

  const { data: doctors, isLoading } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      return await api.getData("doctors");
    },
  });

  const doctor = doctors?.find((d: Doctor) => d.id === Number(doctorId));

  const tabs = [
    { id: "info", label: "Məlumat" },
    { id: "articles", label: "Həkimin məqalələri" },
    { id: "reviews", label: "Rəylər" },
  ];

  if (isLoading) {
    return <div className="text-center py-20">Yüklənir...</div>;
  }

  if (!doctor) {
    return <div>Həkim tapılmadı</div>;
  }

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-[300px] h-[300px] relative rounded-[20px] overflow-hidden bg-gray-100 shrink-0">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 flex flex-col pt-4">
          <h1 className="text-[32px] font-bold text-[#009EE2] mb-2 font-inter">
            {doctor.name}
          </h1>
          <p className="text-[#434343] text-[18px] max-w-[400px] mb-8 font-inter">
            {doctor.title}
          </p>

          <div className="border border-[#E7E7E7] rounded-[16px] p-6 flex items-center justify-between max-w-[600px] bg-white">
            <div className="flex flex-col items-center gap-1 flex-1 border-r border-[#E7E7E7] last:border-0">
              <div className="flex items-center gap-2 text-[#434343] text-[24px] font-bold">
                <Stethoscope className="w-8 h-8 text-[#009EE2]" />{" "}
                {doctor.experience || "0 il"}
              </div>
              <span className="text-[#898989] text-[14px]">Təcrübə</span>
            </div>
            <div className="flex flex-col items-center gap-1 flex-1 border-r border-[#E7E7E7] last:border-0">
              <div className="flex items-center gap-2 text-[#434343] text-[24px] font-bold">
                <Users className="w-8 h-8 text-[#009EE2]" />{" "}
                {doctor.patientCount || 0}
              </div>
              <span className="text-[#898989] text-[14px]">Pasiyent sayı</span>
            </div>
            <div className="flex flex-col items-center gap-1 flex-1">
              <div className="flex items-center gap-2 text-[#434343] text-[24px] font-bold">
                <Star className="w-8 h-8 text-[#009EE2] fill-[#009EE2]" />{" "}
                {doctor.reviewCount || 0}
              </div>
              <span className="text-[#898989] text-[14px]">Rəylər</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-12 border-b border-[#E7E7E7] mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-[20px] font-semibold pb-4 relative transition-colors hover:text-[#009EE2] ${
                activeTab === tab.id ? "text-[#434343]" : "text-[#B4B4B4]"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#009EE2] rounded-t-full transition-all duration-300" />
              )}
            </button>
          ))}
        </div>

        <div className="flex flex-col rounded-[16px] overflow-hidden border border-[#F2F2F2]">
          {activeTab === "info" && (
            <Reveal>
              <div className="flex flex-col md:flex-row bg-[#F9F9F9] p-6 md:px-8 border-b border-[#F2F2F2]">
                <span className="w-[200px] text-[#434343] text-[16px] font-bold shrink-0">
                  Vəzifə
                </span>
                <span className="text-[#666666] text-[16px]">
                  {doctor.position || doctor.title}
                </span>
              </div>

              <div className="flex flex-col md:flex-row bg-white p-6 md:px-8 border-b border-[#F2F2F2]">
                <span className="w-[200px] text-[#434343] text-[16px] font-bold shrink-0">
                  Mərkəz
                </span>
                <span className="text-[#666666] text-[16px]">
                  {doctor.center || "-"}
                </span>
              </div>

              <div className="flex flex-col md:flex-row bg-[#F9F9F9] p-6 md:px-8 border-b border-[#F2F2F2]">
                <span className="w-[200px] text-[#434343] text-[16px] font-bold shrink-0">
                  Təhsil
                </span>
                <div className="flex flex-col gap-3">
                  {doctor.education?.map((item: string, index: number) => (
                    <div key={index} className="flex gap-3 items-start">
                      <div className="w-5 h-5 rounded-full bg-[#009EE2] flex items-center justify-center mt-0.5 shrink-0">
                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                      </div>
                      <p className="text-[#666666] text-[16px] leading-[150%]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col md:flex-row bg-white p-6 md:px-8">
                <span className="w-[200px] text-[#434343] text-[16px] font-bold shrink-0">
                  Müayinə və müalicə istiqamətləri
                </span>
                <div className="flex flex-col gap-3">
                  {doctor.treatments?.map((item: string, index: number) => (
                    <div key={index} className="flex gap-3 items-start">
                      <div className="w-5 h-5 rounded-full bg-[#009EE2] flex items-center justify-center mt-0.5 shrink-0">
                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                      </div>
                      <p className="text-[#666666] text-[16px] leading-[150%]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          )}
          {activeTab === "articles" && (
            <div className="p-8 text-center text-gray-500">
              Məqalə tapılmadı
            </div>
          )}
          {activeTab === "reviews" && (
            <div className="p-8 text-center text-gray-500">Rəy yoxdur</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorDetailSection;
