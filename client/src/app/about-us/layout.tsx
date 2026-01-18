import Container from "@/components/ui/Container";
import AboutSidebar from "@/featured/sections/aboutUs/AboutSidebar";

export default function HaqqimizdaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="py-20 bg-white min-h-screen">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <AboutSidebar />
          <div className="flex-1">{children}</div>
        </div>
      </Container>
    </main>
  );
}
