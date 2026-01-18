import Header from "./Header";
import Footer from "./Footer";
import InitialLoader from "@/components/ui/InitialLoader";
const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <InitialLoader />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
