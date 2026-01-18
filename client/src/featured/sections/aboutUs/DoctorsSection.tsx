"use client";

import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import api from "@/services/api";
import Reveal from "@/components/ui/Reveal";
import DoctorCard from "@/components/cards/DoctorCard";
import { Doctor } from "@/types";

const DoctorsSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("all");

  const { data: doctors, isLoading } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      return await api.getData("doctors");
    },
  });

  const specialties = useMemo(() => {
    if (!doctors) return [];
    const uniqueSpecialties = new Set<string>();
    doctors.forEach((doctor: Doctor) => {
      if (doctor.title) {
        uniqueSpecialties.add(doctor.title);
      }
    });
    return Array.from(uniqueSpecialties);
  }, [doctors]);

  const filteredDoctors = doctors?.filter((doctor: Doctor) => {
    const matchesSearch = doctor.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesSpecialty =
      selectedSpecialty === "all" || doctor.title === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="flex flex-col">
      <Reveal delay={0.1}>
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Həkim Axtar
              </label>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Həkimin adı və ya soyadı..."
                className="w-full bg-white border-2 border-gray-200 rounded-xl px-5 py-3.5 text-[15px] font-inter outline-none focus:border-[#009EE2] focus:ring-4 focus:ring-[#009EE2]/10 hover:border-gray-300 transition-all duration-300 placeholder:text-gray-400"
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                İxtisas
              </label>
              <div className="relative">
                <select
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="w-full appearance-none bg-white border-2 border-gray-200 rounded-xl px-5 py-3.5 pr-12 text-[15px] font-inter outline-none focus:border-[#009EE2] focus:ring-4 focus:ring-[#009EE2]/10 hover:border-gray-300 transition-all duration-300 cursor-pointer text-gray-700"
                >
                  <option value="all">Bütün İxtisaslar</option>
                  {specialties.map((specialty) => (
                    <option key={specialty} value={specialty}>
                      {specialty}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {!isLoading && filteredDoctors && (
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-800">
                  {filteredDoctors.length}
                </span>{" "}
                həkim tapıldı
              </p>
              {(searchQuery || selectedSpecialty !== "all") && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedSpecialty("all");
                  }}
                  className="text-sm text-[#009EE2] hover:text-[#0077B6] font-medium transition-colors duration-200"
                >
                  Filtirləri təmizlə
                </button>
              )}
            </div>
          )}
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        {isLoading ? (
          <div className="col-span-1 md:col-span-2 flex justify-center items-center py-20">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-[#009EE2] border-t-transparent rounded-full animate-spin"></div>
              <span className="text-gray-500 font-medium">Yüklənir...</span>
            </div>
          </div>
        ) : filteredDoctors?.length > 0 ? (
          filteredDoctors.map((doctor: Doctor, index: number) => (
            <Reveal key={doctor.id} delay={0.1 * (index % 4)}>
              <DoctorCard doctor={doctor} />
            </Reveal>
          ))
        ) : (
          <div className="col-span-1 md:col-span-2 text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-linear-to-br from-gray-100 to-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-gray-100">
                <svg
                  className="w-12 h-12 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Həkim tapılmadı
              </h3>
              <p className="text-gray-500 mb-6">
                Axtarış kriteriyalarınızı dəyişdirərək yenidən cəhd edin
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedSpecialty("all");
                }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#009EE2] text-white rounded-xl font-medium hover:bg-[#0077B6] transition-colors duration-200"
              >
                Filtirləri təmizlə
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorsSection;
