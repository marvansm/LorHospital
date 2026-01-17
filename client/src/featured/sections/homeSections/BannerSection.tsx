import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const BannerSection = () => {
  return (
    <section className="relative w-full h-[656px] overflow-hidden bg-[#F8F8F8]">
      <Image
        src="/images/bannerImg.png"
        alt="Banner"
        fill
        priority
        className="object-cover object-bottom-right"
      />

      <Container className="relative z-10 flex items-center h-full">
        <div className="flex flex-col gap-10 max-w-[560px]">
          <h2 className="font-bold font-inter text-[55px] leading-[64px] text-[#464646]">
            İxtisaslaşmış Tibbi Xidmətin Tək Ünvanı!
          </h2>

          <Button
            icon={ArrowUpRight}
            variant="secondary"
            iconPosition="right"
            fillIcon={false}
            strokeWidth={2}
            className="pr-1 pl-4 py-1 h-[50px] max-w-[219px]"
          >
            <span className="text-[18.03px] tracking-[-1%]">
              Bütün xidmətlər
            </span>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default BannerSection;
