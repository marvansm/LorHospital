import DoctorDetailTop from "@/featured/pages/DoctorDetailTop";

export default async function DoctorDetailPage({
  params,
}: {
  params: Promise<{ doctorId: string }>;
}) {
  const resolvedParams = await params;
  return <DoctorDetailTop doctorId={resolvedParams.doctorId} />;
}
