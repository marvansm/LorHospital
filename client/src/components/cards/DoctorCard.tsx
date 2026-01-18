import Image from "next/image";
import { Doctor } from "@/types";

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard = ({ doctor }: DoctorCardProps) => {
  return (
    <div className="bg-white rounded-[32px] overflow-hidden shadow-sm  cursor-pointer">
      <div className="rounded-br-[110px] overflow-hidden bg-[#F2F2F2]">
        <Image
          src={doctor.image}
          alt={doctor.name}
          width={412}
          height={412}
          className="w-full h-auto object-cover object-top scale-105 hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6 pb-10 h-[150px]">
        <h3 className="text-[28px] font-bold font-inter text-[#3F3F3F] leading-snug mb-2">
          {doctor.name}
        </h3>
        <p className="text-[17px] font-medium font-inter text-[#3F3F3F] opacity-80 leading-relaxed max-w-[280px]">
          {doctor.title}
        </p>
      </div>
    </div>
  );
};

export default DoctorCard;
