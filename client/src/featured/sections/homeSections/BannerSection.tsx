import Image from "next/image";
import { ArrowUpRight, MessageCircle, Phone } from "lucide-react";
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

        <div className="absolute right-8 bottom-32 flex flex-col gap-10 z-20">
          <a
            href="https://wa.me/yournumber"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center group"
          >
            <div className="absolute w-[100px] h-[100px] border border-[#7CD953]/20 rounded-full animate-ping-slow"></div>
            <div className="absolute w-[85px] h-[85px] border border-[#7CD953]/40 rounded-full"></div>
            <div className="absolute w-[72px] h-[72px] border border-[#7CD953]/60 rounded-full"></div>

            <div className="relative w-[60px] h-[60px] bg-[#7CD953] rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 z-10">
              <MessageCircle size={32} color="white" fill="white" />
            </div>
          </a>

          <a
            href="tel:*0111"
            className="relative flex items-center justify-center group"
          >
            <div className="absolute w-[100px] h-[100px] border border-[#009EE2]/20 rounded-full animate-ping-slow"></div>
            <div className="absolute w-[85px] h-[85px] border border-[#009EE2]/40 rounded-full"></div>
            <div className="absolute w-[72px] h-[72px] border border-[#009EE2]/60 rounded-full"></div>

            <div className="relative w-[60px] h-[60px] bg-[#009EE2] rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 z-10">
              <Phone size={30} color="white" fill="white" />
            </div>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default BannerSection;
