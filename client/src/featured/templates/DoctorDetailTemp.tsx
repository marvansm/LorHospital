import DoctorDetailSection from "../sections/aboutUs/DoctorDetailSection";

interface DoctorDetailTempProps {
  doctorId: string;
}

const DoctorDetailTemp = ({ doctorId }: DoctorDetailTempProps) => {
  return (
    <>
      <DoctorDetailSection doctorId={doctorId} />
    </>
  );
};

export default DoctorDetailTemp;
