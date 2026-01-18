import DoctorDetail from "../DoctorDetail";

export default async function DoctorDetailPage({
  params,
}: {
  params: Promise<{ doctorId: string }>;
}) {
  const resolvedParams = await params;
  return <DoctorDetail doctorId={resolvedParams.doctorId} />;
}
