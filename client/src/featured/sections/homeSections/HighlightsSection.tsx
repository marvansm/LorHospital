import Container from "@/components/ui/Container";
import Image from "next/image";

const HighlightsSection = () => {
  return (
    <section className="py-14">
      <Container>
        <div className="grid grid-cols-3">
          <div className="flex items-center justify-start gap-2">
            <Image
              src="/images/checklist.png"
              alt="Checklist"
              width={79}
              height={79}
              className="object-contain"
            />
            <h2 className="text-[22.86px] font-semibold font-inter leading-[31.27px] tracking-[0%] text-[#3F3F3F] flex items-start flex-col">
              Qafqazın ilk və tək{" "}
              <span className="text-[22.86px] font-normal leading-[31.27px] tracking-[0%] text-[#3F3F3F]">
                ixtisaslaşmış mərkəzi
              </span>
            </h2>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Image
              src="/images/experience.png"
              alt="Experience"
              width={79}
              height={79}
              className="object-contain"
            />
            <h2 className="text-[22.86px] font-semibold font-inter leading-[31.27px] tracking-[0%] text-[#3F3F3F] flex items-start flex-col">
              12 illik+
              <span className="text-[22.86px] font-normal leading-[31.27px] tracking-[0%] text-[#3F3F3F]">
                təcrübə
              </span>
            </h2>
          </div>
          <div className="flex items-center justify-end gap-2">
            <Image
              src="/images/doctor.png"
              alt="Doctor"
              width={79}
              height={79}
              className="object-contain"
            />
            <h2 className="text-[22.86px] font-semibold font-inter leading-[31.27px] tracking-[0%] text-[#3F3F3F] flex items-start flex-col">
              Pasiyent
              <span className="text-[22.86px] font-normal leading-[31.27px] tracking-[0%] text-[#3F3F3F]">
                yönümlü xidmət
              </span>
            </h2>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HighlightsSection;
