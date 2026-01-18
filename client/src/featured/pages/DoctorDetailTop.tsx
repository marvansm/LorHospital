import DoctorDetailTemp from "../templates/DoctorDetailTemp";

interface DoctorDetailPageProps {
  doctorId: string;
}

const DoctorDetailPage = ({ doctorId }: DoctorDetailPageProps) => {
  return (
    <div>
      <DoctorDetailTemp doctorId={doctorId} />
    </div>
  );
};

export default DoctorDetailPage;
